import dotenv from 'dotenv';
import { Client } from '@notionhq/client';
import { fetchLinkedInProfiles } from './apify.js';

dotenv.config();

const notion = new Client({ auth: process.env.NOTION_KEY });
const NEW_LEADS_PAGE_ID = process.env.DEV_NEW_LEADS_NOTION_PAGE_ID;
const LEADS_DB_PAGE_ID = process.env.LEADS_DB_NOTION_PAGE_ID;

// Get LinkedIn leads URLs from Notion list, that need to be fetched from LinkedIn
async function getLeadsListFromNotion() {
  try {
    const result = await notion.blocks.children.list({
      block_id: NEW_LEADS_PAGE_ID, // a block ID can be a page ID
    });

    const profileLinks = result.results.map((block) => {
      if (block.paragraph.rich_text[0] !== undefined) {
        return block.paragraph.rich_text[0].plain_text;
      }
    });

    return { code: 'SUCCESS', data: profileLinks };
  } catch (error) {
    return { code: 'ERROR', data: error };
  }
}

// Get the leads we already fetched and saved
async function getExistingLeadsFromDB() {
  try {
    const response = await notion.databases.query({
      database_id: LEADS_DB_PAGE_ID, // a block ID can be a page ID
    });

    const existingProfiles = response.results.map((page) => {
      if (page.properties) {
        return page.properties.LinkedIn.url;
      }
    });

    return { code: 'SUCCESS', data: existingProfiles };
  } catch (error) {
    return { code: 'ERROR', data: error };
  }
}

function constructLeadsDBObject(linkedInProfile) {
  return {
    parent: {
      database_id: LEADS_DB_PAGE_ID,
    },
    properties: {
      Name: {
        id: 'title',
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: linkedInProfile.name,
              link: {
                url: linkedInProfile.linkedinUrl,
              },
            },
            annotations: {
              bold: true,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: linkedInProfile.name,
            href: linkedInProfile.linkedinUrl,
          },
        ],
      },
      LinkedIn: {
        type: 'url',
        url: linkedInProfile.linkedinUrl,
      },
      Email: { type: 'email', email: linkedInProfile.email },
      Company: {
        type: 'rich_text',
        rich_text: [
          {
            type: 'text',
            text: {
              content: linkedInProfile.company,
              link: {
                url: `https://www.${linkedInProfile.companyWebsite}`,
              },
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: linkedInProfile.company,
            href: `https://www.${linkedInProfile.companyWebsite}`,
          },
        ],
      },
      Country: {
        type: 'rich_text',
        rich_text: [
          {
            type: 'text',
            text: {
              content: linkedInProfile.country || '',
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: linkedInProfile.country || '',
            href: null,
          },
        ],
      },
      About: {
        type: 'rich_text',
        rich_text: [
          {
            type: 'text',
            text: {
              content: linkedInProfile.about,
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: linkedInProfile.about,
            href: null,
          },
        ],
      },
      Role: {
        type: 'rich_text',
        rich_text: [
          {
            type: 'text',
            text: {
              content: linkedInProfile.role,
              link: null,
            },
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            plain_text: linkedInProfile.role,
            href: null,
          },
        ],
      },
    },
  };
}

async function addNewLeadsToDB(leadsObjects) {
  const leadsPromises = leadsObjects.map((lead) => notion.pages.create(lead));
  try {
    const saveLeadsResponse = await Promise.all(leadsPromises);
    return { code: 'SUCCESS', data: saveLeadsResponse };
  } catch (error) {
    return { code: 'ERROR', data: error };
  }
}

export async function processLeads() {
  // Fetch new leads from Notion
  const { code: newLeadsCode, data: newLeadsData } = await getLeadsListFromNotion();

  if (newLeadsCode === 'ERROR') {
    console.log('🥚🥚❌ ERROR RETRIEVING LIST OF LEADS', newLeadsData);
    return { code: 'ERROR_FETCHING_NEW_LIST_FROM_NOTION', data: newLeadsData };
  }
  console.log('🥚🥚✅ SUCCESS RETRIEVING LIST OF LEADS');

  // Fetch existing leads from Notion
  const { code: existingLeadsCode, data: existingLeadsData } = await getExistingLeadsFromDB();

  if (existingLeadsCode === 'ERROR') {
    console.log('🐔🐔❌ ERROR RETRIEVING EXISTING LEADS', existingLeadsData);
    return {
      code: 'ERROR_FETCHING_EXISTING_LIST_FROM_NOTION',
      data: existingLeadsData,
    };
  }
  console.log('🐔🐔✅ SUCCESS RETRIEVING EXISTING LEADS');

  // Filter out the leads that we already fetched
  const leadsToFetch = newLeadsData.filter((lead) => {
    if (lead !== null && lead !== undefined) {
      return !existingLeadsData.includes(lead);
    }
  });

  if (leadsToFetch.length === 0) {
    return { code: 'SUCCESS', data: 'No new leads to fetch' };
  }

  // Fetch new LinkedIn profiles
  const { code: fetchedLeadsCode, data: fetchedLeadsData } = await fetchLinkedInProfiles(leadsToFetch);

  if (fetchedLeadsCode === 'ERROR') {
    console.log('🐥🐥❌ ERROR FETCHING LINKEDIN PROFILES', leadsToFetch);

    return { code: 'ERROR_FETCHING_LINKEDIN_PROFILES', data: fetchedLeadsData };
  }
  console.log('🐥🐥✅ SUCCESS FETCHING LINKEDIN PROFILES', fetchedLeadsData);

  const leadsObjects = fetchedLeadsData.map((lead) => constructLeadsDBObject(lead));

  const result = await addNewLeadsToDB(leadsObjects);

  if (result.code === 'ERROR') {
    console.log('🏦🏦 ❌ ERROR SAVING NEW PROFILES', result.data);

    return { code: 'ERROR_SAVING_LEADS_TO_DB', data: result.data };
  }
  console.log(`🏦🏦 ✅ SUCCESSFULLY SAVED ${result.data.length} NEW PROFILES`);

  return { code: 'SUCCESS', data: result.data };
}

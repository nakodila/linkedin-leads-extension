import { ApifyClient } from 'apify-client';

function parseCompanyData(linkedInProfile) {
  const company = {};

  if (linkedInProfile.companyName) {
    company.name = linkedInProfile.companyName;
  } else if (linkedInProfile.experiences[0].subtitle) {
    company.name = linkedInProfile.experiences[0].subtitle;
  } else {
    company.name = '';
  }

  if (linkedInProfile.companyWebsite) {
    company.website = `https://www.${linkedInProfile.companyWebsite}`;
  } else if (linkedInProfile.companyLinkedin) {
    company.website = `https://www.${linkedInProfile.companyLinkedin}`;
  } else if (linkedInProfile.experiences[0].companyLink1) {
    company.website = linkedInProfile.experiences[0].companyLink1;
  } else {
    company.website = '';
  }

  return company;
}

export async function fetchLinkedInProfiles(profileLinks) {
  const Apify = new ApifyClient({
    token: process.env.APIFY_TOKEN,
  });
  const input = {
    profileUrls: [...profileLinks],
  };

  const run = await Apify.actor('dev_fusion/linkedin-profile-scraper').call(input);
  try {
    const { items } = await Apify.dataset(run.defaultDatasetId).listItems();
    console.log(items);
    const newProfiles = items.map((item) => {
      const company = parseCompanyData(item);
      return {
        name: item.fullName,
        country: item.addressCountryOnly,
        publicIdentifier: item.publicIdentifier,
        linkedinUrl: `https://www.linkedin.com/in/${item.publicIdentifier}/`,
        company: company.name,
        companyWebsite: company.website,
        email: item.email,
        about: item.headline,
        role: item.experiences[0].title,
      };
    });
    return { code: 'SUCCESS', data: newProfiles };
  } catch (error) {
    return { code: 'ERROR', data: error };
  }
}

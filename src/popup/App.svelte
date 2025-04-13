<script>
  import AppHeader from './AppHeader.svelte';
  import TextArea from './TextArea.svelte';
  import { supabase } from '../supabaseClient.js';

  let accountUrl = '';

  function onInput() {
    const input = this;
    accountUrl = input.value;
  }

  async function addToPotentialLeadsList() {
    const data = await supabase.functions.invoke('super-task/profile', {
      body: { accountUrl: accountUrl },
      headers: {
        Authorization: BEARER_TOKEN,
      },
    });
  }

  async function getProfileDetails() {
    const data = await supabase.functions.invoke('super-task/profile', {
      body: { accountUrl: accountUrl },
    });
  }
</script>

<div class="extension-container">
  <AppHeader />
  <TextArea id="accountUrl" placeholder="Type or paste" value={accountUrl} {onInput} />
  <div class="button-container">
    <button id="encode" class="button" on:click|preventDefault={addToPotentialLeadsList}>Add To Pending</button>
    <button id="decode" class="button" on:click|preventDefault={getProfileDetails}>Add Details To DB</button>
  </div>
</div>

<style>
  .extension-container {
    box-sizing: border-box;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    width: 330px;
    flex-shrink: 0;
    padding-left: 10px;
    padding-right: 10px;
  }

  .button-container {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  .button {
    width: 48%;
    height: 30px;
    margin-bottom: 20px;
    background-color: #ffb870;
    color: #4a2e1e;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s ease;
  }

  .button:focus,
  .button:active {
    outline: none;
    box-shadow: none;
    background-color: #e68a45;
    color: #fff6ec;
  }

  .button:hover {
    background-color: #ffd099;
  }
</style>

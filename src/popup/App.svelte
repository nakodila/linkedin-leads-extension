<script>
  import AppHeader from './AppHeader.svelte';
  import TextArea from './TextArea.svelte';

  let accountUrl = '';

    function onInput() {
        const input = this;
        accountUrl = input.value
    }

  function addToPotentialLeadsList() {};
  function getProfileDetails() {};
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
    background-color: #FFB870;
    color: #4A2E1E;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s ease;
  }

  .button:focus,
  .button:active {
    outline: none;
    box-shadow: none;
    background-color: #E68A45;
    color: #FFF6EC;
  }

  .button:hover {
    background-color: #FFD099;
  }
</style>

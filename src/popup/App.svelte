<script>
  import AppHeader from './AppHeader.svelte';
  import TextArea from './TextArea.svelte';

  let accountUrl = '';

    function onInput() {
        const input = this;
        accountUrl = input.value
    }

  function addToUnfetchedList() {};
  function getProfileDetails() {};
</script>

<div class="extension-container">
  <AppHeader />
  <TextArea id="accountUrl" placeholder="Type or paste" value={accountUrl} {onInput} />
  <button id="encode" class="button" on:click|preventDefault={addToUnfetchedList}>Add To Pending</button>
  <button id="decode" class="button" on:click|preventDefault={getProfileDetails}>Add Details To DB</button>
</div>

<style>
  .extension-container {
    box-sizing: border-box;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    width: 330px;
    height: 390px;
    flex-shrink: 0;
    padding-left: 10px;
    padding-right: 10px;
  }

  .light-mode {
    background-color: #fff;
  }
</style>

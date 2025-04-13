<script>
  export let id;
  export let placeholder;
  export let value;
  export let onInput;

  function clearText() {
    value = '';
  }
</script>

<div class="input-container input-container-light-mode">
  <textarea {id} class="input input-light-mode" {placeholder} {value} on:input|preventDefault={onInput}></textarea>
  <button class="clear-button clear-button-light-mode" on:click={clearText}>
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.5 4L4 12.5" />
      <path d="M12.5 12.5L4 4" />
    </svg>
  </button>
</div>

<style>
  textarea {
    resize: none;
  }

  textarea:focus {
    outline: none;
    box-shadow: none;
  }

  .input-container {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 40px;
    margin-bottom: 15px;
  }

  .input-container-light-mode {
    border: 1px solid #c0c6d2;
    border-radius: 3px;
  }

  .input {
    padding: 10px;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border: none;
    background: none;
    font-size: 10px;
  }

  .input-light-mode {
    color: #000;
  }

  .input::placeholder {
    font: 'Roboto';
    font-size: 12px;
  }

  .clear-button {
    position: absolute;
    top: 5px;
    right: 5px;
    background: none;
    border: none;
    cursor: pointer;
  }

  .copy-button-light-mode svg *,
  .clear-button-light-mode svg * {
    stroke: #5e6064;
    stroke-width: 1px;
  }

  .copy-button-dark-mode svg *,
  .clear-button-dark-mode svg * {
    stroke: #c0c6d2;
    stroke-width: 1px;
  }

  .copy-button-light-mode:active svg *,
  .clear-button-light-mode:active svg * {
    stroke: #000;
  }

  .copy-button-dark-mode:active svg *,
  .clear-button-dark-mode:active svg * {
    stroke: #dddddd;
  }
</style>

<script>
  let title = 'Leads Extractor';
</script>

<div class="extension-header">
  <div class="title-icon-container"></div>
  <p class="extension-title extension-title-light-mode">{title}</p>
</div>

<style>
  .extension-header {
    display: flex;
    justify-content: flex-start;
    flex-flow: row nowrap;
    align-items: center;
    width: 100%;
    height: 32px;
  }

  .title-icon-container {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    flex-shrink: 0;
  }

  .extension-title {
    font-size: 15px;
  }

  .extension-title-light-mode {
    color: #000;
  }
</style>

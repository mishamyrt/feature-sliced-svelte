<script lang="ts">
  import { fsd } from '$lib'

  import CopyButton from './CopyButton.svelte'

  export let value: string
</script>

<div use:fsd={'features/CopyCodeBlock'} class="container">
  <div class="code">
    <pre><code>{value}</code></pre>
  </div>
  <div class="copy">
    <CopyButton {value} />
  </div>
</div>

<style>
  .code {
    margin: 0 -20px;
    padding: 7px 20px;

    font-family: var(--font-family-code);

    background-color: var(--color-background-secondary);
    border-radius: 8px;
  }

  .container {
    position: relative;
  }

  .copy {
    position: absolute;
    top: 4px;
    right: -14px;
  }
</style>

<script>
  import { fsd } from '$lib'
  export let combination
</script>

<div use:fsd={'entities/Hotkey'}>
  <div class="combination">{combination}</div>
</div>

<style>
  .combination {
    font-size: 48px;
    margin: 24px 0;
    color: var(--color-content-accent);
  }
</style>

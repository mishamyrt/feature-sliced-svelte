<script lang="ts">
  import { fsd } from '$lib'

  export let combination: string
</script>

<div use:fsd={'entities/Hotkey'}>
  <div class="combination">{combination}</div>
</div>

<style>
  .combination {
    margin: 24px 0;
    font-size: 48px;
    color: var(--color-content-accent);
  }
</style>

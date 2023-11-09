<script lang="ts">
  export let value: string

  function handleClick() {
    navigator.clipboard.writeText(value)
  }
</script>

<button on:click={handleClick} class="button">
  Copy
</button>

<style>
  .button {
    border-radius: 4px;
    background-color: var(--color-background-secondary);
    border: none;
    color: var(--color-content-primary);
    transition: opacity 0.3s ease-out;
  }

  .button:hover {
    opacity: 0.7;
  }
</style>

<script lang="ts">
  export let value: string

  function handleClick() {
    navigator.clipboard.writeText(value)
  }
</script>

<button on:click={handleClick} class="button">Copy</button>

<style>
  .button {
    color: var(--color-content-primary);

    background-color: var(--color-background-secondary);
    border: none;
    border-radius: 4px;

    transition: opacity 0.3s ease-out;
  }

  .button:hover {
    opacity: 0.7;
  }
</style>

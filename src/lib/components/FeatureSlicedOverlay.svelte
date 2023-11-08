<script>
  import { createEventDispatcher } from 'svelte';
  export let layers;

  const dispatch = createEventDispatcher();

  function handleMouseEnter(layerName) {
    dispatch('mouseenter', layerName);
  }

  function handleMouseLeave(layerName) {
    dispatch('mouseleave', layerName);
  }
</script>

<div class="window">
  <div class="heading">
    <span>Layer</span>
    <span>Count</span>
    <span>Color</span>
  </div>
  <div class="layers">
    {#each layers as layer}
      <div
        role="presentation"
        on:mouseleave={() => handleMouseLeave(layer.name)}
        on:mouseenter={() => handleMouseEnter(layer.name)}
        class="row"
      >
        <span>{layer.name}</span>
        <span>{layer.count}</span>
        <div>
          <div class="legend" style:--fsd-hue="var(--fsd-hue-{layer.name})" />
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  .heading,
  .row {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
  }

  .heading > *:nth-child(3),
  .row > *:nth-child(3) {
    text-align: right;
  }

  .heading {
    opacity: 0.4;
    font-size: 10px;
    margin: 8px 0 2px;
    padding: 0 14px;
  }

  .row {
    font-size: 14px;
    padding: 4px 14px;
  }

  .row:hover {
    background-color: rgb(255 255 255 / 10%);
  }

  .layers {
    display: grid;
    flex-direction: column;
    padding-bottom: 8px;
  }

  .window {
    width: 220px;
    background-color: #292929;
    border-radius: 8px;
    position: absolute;
    bottom: 20px;
    right: 20px;
  }

  .legend {
    display: inline-block;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: oklch(50% 0.15 var(--fsd-hue));
  }
</style>

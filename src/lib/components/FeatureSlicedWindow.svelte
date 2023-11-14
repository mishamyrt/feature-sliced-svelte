<script lang="ts">
  import { createEventDispatcher } from 'svelte'

  import { getModulesCount } from '../utils/count.js'

  const dispatch = createEventDispatcher()

  const layers = getModulesCount()

  function handleMouseEnter(layerName: string) {
    dispatch('mouseenter', layerName)
  }

  function handleMouseLeave() {
    dispatch('mouseleave')
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
        on:mouseleave={handleMouseLeave}
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
    grid-template-columns: 70px 1fr 1fr;
    align-items: center;
  }

  .heading > *:nth-child(3),
  .row > *:nth-child(3) {
    text-align: right;
  }

  .heading {
    margin: 8px 0 2px;
    padding: 0 14px;
    font-size: 10px;
    opacity: 0.4;
  }

  .row {
    padding: 4px 14px;
    font-size: 14px;
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
    position: fixed;
    z-index: 99999999;
    right: 20px;
    bottom: 20px;

    width: 170px;

    font-family: sans-serif;
    color: rgb(255 255 255 / 90%);

    background-color: #282828;
    border: 1px solid rgb(60 60 60 / 77%);
    border-radius: 8px;
    box-shadow: 0 2px 6px -2px rgb(0 0 0 / 11%);
  }

  .legend {
    position: relative;
    top: 1px;

    display: inline-block;

    width: 14px;
    height: 14px;

    background-color: oklch(50% 0.15 var(--fsd-hue));
    border-radius: 50%;
  }
</style>

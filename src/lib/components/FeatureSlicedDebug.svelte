<script>
  import { onMount } from 'svelte'

  import { countByLayers } from '../utils/dom/index.js'
  import FeatureSlicedOverlay from './FeatureSlicedOverlay.svelte'

  let showOverlay = false
  let layers = []
  let activeLayer = ''

  function handleKeyDown(e) {
    if (e.code !== 'KeyF' || !e.ctrlKey || !e.shiftKey) return
    e.preventDefault()
    showOverlay = !showOverlay
    layers = countByLayers()
  }

  function handleHover(e) {
    activeLayer = e.detail
  }

  function handleLeave() {
    activeLayer = ''
  }

  onMount(() => {
    document.body.addEventListener('keydown', handleKeyDown)
  })

  $: isLayersVisible = (() => {
    let defaultValue = false
    if (activeLayer.length === 0) {
      defaultValue = true
    }
    const results = {
      shared: defaultValue,
      entities: defaultValue,
      features: defaultValue,
      widgets: defaultValue,
      pages: defaultValue,
      app: defaultValue,
    }

    if (activeLayer.length > 0) {
      results[activeLayer] = true
    }
    return results
  })()
</script>

<div
  class="featureSlicedRoot"
  class:show={showOverlay}
  class:featuresVisible={isLayersVisible.features}
  class:widgetsVisible={isLayersVisible.widgets}
  class:sharedVisible={isLayersVisible.shared}
  class:entitiesVisible={isLayersVisible.entities}
  class:pagesVisible={isLayersVisible.pages}
  class:appVisible={isLayersVisible.app}
>
  <slot />
  {#if showOverlay}
    <FeatureSlicedOverlay
      {layers}
      on:mouseenter={handleHover}
      on:mouseleave={handleLeave}
    />
  {/if}
</div>

<style>
  .featureSlicedRoot {
    --fsd-hue-features: 141;
    --fsd-hue-pages: 163;
    --fsd-hue-widgets: 290;
    --fsd-hue-shared: 109;
    --fsd-hue-entities: 240;
    --fsd-hue-app: 27;
    --fsd-text-color: transparent;

    display: contents;
  }

  .featureSlicedRoot.show :global([data-fsd]) {
    outline: 2px solid transparent;
    background-color: transparent;
    position: relative;
  }

  .featureSlicedRoot.show :global([data-fsd]::after) {
    content: attr(data-fsd);
    pointer-events: none;
    position: absolute;
    top: 0;
    right: 0;
    box-sizing: border-box;
    background: oklch(50% 0.15 var(--fsd-hue));
    color: white;
    font-size: 10px;
    line-height: 1;
    font-weight: bold;
    padding: 0 2px;
    font-family: sans-serif;
    display: none;
  }

  .featuresVisible :global([data-fsd-layer='features']) {
    --fsd-hue: var(--fsd-hue-features);
  }

  .widgetsVisible :global([data-fsd-layer='widgets']) {
    --fsd-hue: var(--fsd-hue-widgets);
  }

  .entitiesVisible :global([data-fsd-layer='entities']) {
    --fsd-hue: var(--fsd-hue-entities);
  }

  .pagesVisible :global([data-fsd-layer='pages']) {
    --fsd-hue: var(--fsd-hue-pages);
  }

  .sharedVisible :global([data-fsd-layer='shared']) {
    --fsd-hue: var(--fsd-hue-shared);
  }

  .appVisible :global([data-fsd-layer='app']) {
    --fsd-hue: var(--fsd-hue-app);
  }

  .featuresVisible.show :global([data-fsd-layer='features']::after),
  .widgetsVisible.show :global([data-fsd-layer='widgets']::after),
  .entitiesVisible.show :global([data-fsd-layer='entities']::after),
  .pagesVisible.show :global([data-fsd-layer='pages']::after),
  .sharedVisible.show :global([data-fsd-layer='shared']::after),
  .appVisible.show :global([data-fsd-layer='app']::after) {
    display: inline-block;
  }

  .featuresVisible.show :global([data-fsd-layer='features']),
  .widgetsVisible.show :global([data-fsd-layer='widgets']),
  .entitiesVisible.show :global([data-fsd-layer='entities']),
  .pagesVisible.show :global([data-fsd-layer='pages']),
  .sharedVisible.show :global([data-fsd-layer='shared']),
  .appVisible.show :global([data-fsd-layer='app']) {
    outline-color: oklch(50% 0.15 var(--fsd-hue));
    background-color: oklch(50% 0.17 var(--fsd-hue) / 15%);
  }
</style>

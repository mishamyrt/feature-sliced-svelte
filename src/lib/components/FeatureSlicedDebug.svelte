<script lang="ts">
  import { onMount } from 'svelte'

  import FeatureSlicedWindow from './FeatureSlicedWindow.svelte'

  let showOverlay = false

  function handleKeyDown(e: KeyboardEvent) {
    if (e.code !== 'KeyF' || !e.ctrlKey || !e.shiftKey) return
    e.preventDefault()
    if (showOverlay) {
      setVisibleLayer('none')
      showOverlay = false
    } else {
      setVisibleLayer('all')
      showOverlay = true
    }
  }

  function setVisibleLayer(layer: string) {
    document.body.setAttribute('data-fsd-visible', layer)
  }

  function handleHover(e: CustomEvent<string>) {
    setVisibleLayer(e.detail)
  }

  function handleLeave() {
    setVisibleLayer('all')
  }

  onMount(() => {
    document.body.addEventListener('keydown', handleKeyDown)
    document.body.classList.add('featureSlicedRoot')
    setVisibleLayer('none')
  })
</script>

{#if showOverlay}
  <FeatureSlicedWindow on:mouseenter={handleHover} on:mouseleave={handleLeave} />
{/if}

<style lang="scss">
  :global(.featureSlicedRoot) {
    --fsd-hue-features: 141;
    --fsd-hue-pages: 163;
    --fsd-hue-widgets: 290;
    --fsd-hue-shared: 109;
    --fsd-hue-entities: 240;
    --fsd-hue-app: 27;
  }

  :global([data-fsd-layer='features']) {
    --fsd-hue: var(--fsd-hue-features);
  }

  :global([data-fsd-layer='widgets']) {
    --fsd-hue: var(--fsd-hue-widgets);
  }

  :global([data-fsd-layer='entities']) {
    --fsd-hue: var(--fsd-hue-entities);
  }

  :global([data-fsd-layer='pages']) {
    --fsd-hue: var(--fsd-hue-pages);
  }

  :global([data-fsd-layer='shared']) {
    --fsd-hue: var(--fsd-hue-shared);
  }

  :global([data-fsd-layer='app']) {
    --fsd-hue: var(--fsd-hue-app);
  }

  :global([data-fsd-visible='features'] [data-fsd-layer='features']::after),
  :global([data-fsd-visible='widgets'] [data-fsd-layer='widgets']::after),
  :global([data-fsd-visible='entities'] [data-fsd-layer='entities']::after),
  :global([data-fsd-visible='pages'] [data-fsd-layer='pages']::after),
  :global([data-fsd-visible='shared'] [data-fsd-layer='shared']::after),
  :global([data-fsd-visible='app'] [data-fsd-layer='app']::after),
  :global([data-fsd-visible='all'] [data-fsd]::after) {
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
    display: inline-block;
  }

  :global([data-fsd-visible='features'] [data-fsd-layer='features']),
  :global([data-fsd-visible='widgets'] [data-fsd-layer='widgets']),
  :global([data-fsd-visible='entities'] [data-fsd-layer='entities']),
  :global([data-fsd-visible='pages'] [data-fsd-layer='pages']),
  :global([data-fsd-visible='shared'] [data-fsd-layer='shared']),
  :global([data-fsd-visible='app'] [data-fsd-layer='app']),
  :global([data-fsd-visible='all'] [data-fsd]) {
    outline: 2px solid oklch(50% 0.15 var(--fsd-hue));
    background-color: oklch(50% 0.17 var(--fsd-hue) / 15%);
    position: relative;
  }
</style>

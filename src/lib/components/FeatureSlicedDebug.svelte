<script lang="ts">
  import './FeatureSlicedDebug.css'

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
    document.body.classList.add('feature-sliced-root')
    setVisibleLayer('none')
  })
</script>

{#if showOverlay}
  <FeatureSlicedWindow on:mouseenter={handleHover} on:mouseleave={handleLeave} />
{/if}

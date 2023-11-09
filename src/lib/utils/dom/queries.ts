import type { Layer } from '../layers'

interface ComponentsCount {
  name: Layer
  count: number
}

export function countByLayers(): ComponentsCount[] {
  const items = document.querySelectorAll('[data-fsd]')
  const results: Record<string, number> = {}
  for (const item of items) {
    const layer = item.getAttribute('data-fsd-layer')
    if (!layer) continue
    if (results[layer]) {
      results[layer]++
    } else {
      results[layer] = 1
    }
  }
  return Object.entries(results).map(([name, count]) => ({
    name: name as Layer,
    count,
  }))
}

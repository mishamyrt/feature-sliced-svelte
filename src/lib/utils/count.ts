import type { Layer } from './layer'

export interface ModulesCount {
  name: Layer
  count: number
}

export function getModulesCount(): ModulesCount[] {
  const items = document.querySelectorAll('[data-fsd]')
  const results: Record<string, number> = {}
  for (const item of items) {
    const layer = item.getAttribute('data-fsd-layer')
    if (!layer) {
      throw Error('Found element without "data-fsd-layer" attribute ')
    }
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

import { layerAttribute, moduleAttribute } from './attributes.js'
import type { Layer } from './layer'

export interface ModulesCount {
  name: Layer
  count: number
}

const moduleSelector = `[${moduleAttribute}]`

export function getModulesCount(): ModulesCount[] {
  const items = document.querySelectorAll(moduleSelector)
  const results: Record<string, Set<string>> = {}
  for (const item of items) {
    const layer = item.getAttribute(layerAttribute)
    const moduleName = item.getAttribute(moduleAttribute)
    if (!layer || !moduleName) {
      throw Error('Found element without required attributes attribute')
    }
    if (results[layer]) {
      results[layer].add(moduleName)
    } else {
      results[layer] = new Set<string>([moduleName])
    }
  }
  return Object.entries(results).map(([name, items]) => ({
    name: name as Layer,
    count: items.size,
  }))
}

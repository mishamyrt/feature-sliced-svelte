export const moduleAttribute = 'data-fsd'
export const layerAttribute = 'data-fsd-layer'

export function setAttributes(el: HTMLElement, layer: string, module: string) {
  if (!layer.length || !module.length) {
    throw new Error('The layer and module name must be non-empty')
  }
  el.setAttribute(moduleAttribute, `${layer}/${module}`)
  el.setAttribute(layerAttribute, layer)
}

import { setAttributes } from './attributes.js'
import { allowedLayers } from './layer.js'
import { parseName } from './name.js'

function processElement(el: HTMLElement, name: string) {
  const results = parseName(name)
  if (!results) {
    // eslint-disable-next-line no-console
    console.error(
      [
        `Module name '${name}' is incorrect. Format should be <layer>/<module>.`,
        `Allowed layers are: ${allowedLayers.join(', ')}`,
      ].join('\n'),
    )
    return
  }
  setAttributes(el, ...results)
}

export function fsd(el: HTMLElement, name: string) {
  function update(newName: string) {
    processElement(el, newName)
  }
  processElement(el, name)

  return { update }
}

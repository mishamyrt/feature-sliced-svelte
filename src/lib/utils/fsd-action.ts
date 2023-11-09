import { setFSDAttributes } from './dom/index.js'
import { allowedLayers, isCorrectName } from './layers/index.js'

function assertModuleName(name: string) {
  if (!isCorrectName(name)) {
    // eslint-disable-next-line no-console
    console.warn(`Module name '${name}' is incorrect.
Format should be <layer>/<module>.
Allowed layers are: ${allowedLayers.join(', ')}`)
  }
}

export function fsd(el: HTMLElement, name: string) {
  function update(newName: string) {
    assertModuleName(newName)
    setFSDAttributes(el, newName)
  }

  assertModuleName(name)
  setFSDAttributes(el, name)

  return { update }
}

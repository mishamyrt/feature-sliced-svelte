import { allowedLayers, isCorrectName } from './layers/index.js';
import { setFSDAttributes } from './dom/index.js';

/**
 * @param {string} name
 */
function assertModuleName(name) {
  if (!isCorrectName(name)) {
    throw new Error(`Module name is incorrect.
Format should be <layer>/<module>.
Allowed layers are: ${allowedLayers.join(', ')}`);
  }
}

/**
 *
 * @param {HTMLElement} el
 * @param {ModuleName} name
 */
export function fsd(el, name) {
  function update(newName) {
    assertModuleName(newName);
    setFSDAttributes(el, newName);
  }

  assertModuleName(name);
  setFSDAttributes(el, name);

  return {
    update,
  };
}

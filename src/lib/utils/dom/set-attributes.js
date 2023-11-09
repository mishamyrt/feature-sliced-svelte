// @ts-check

/**
 * @param {HTMLElement} el
 * @param {import('../layers/types.js').ModuleName} name
 */
export function setFSDAttributes(el, name) {
  const [layer] = name.split('/')
  el.setAttribute('data-fsd', name)
  el.setAttribute('data-fsd-layer', layer)
}

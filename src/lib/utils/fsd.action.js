/**
 * @typedef {'shared' | 'entities' | 'features' | 'widgets' | 'pages' | 'app'} Layer
 */

/**
 * @typedef {`${Layer}/${string}`} ModuleName
 */

/**
 * 
 * @param {HTMLElement} el 
 * @param {ModuleName} name 
 * @returns 
 */
export function fsd (el, name) {
  function applyAttributes (moduleName) {
    const [layer] = moduleName.split('/')
    el.setAttribute('data-fsd', name)
    el.setAttribute('data-fsd-layer', layer)
  }

  function update (newName) {
    applyAttributes(newName)
  }

  applyAttributes(name)

  return {
    update
  }
}

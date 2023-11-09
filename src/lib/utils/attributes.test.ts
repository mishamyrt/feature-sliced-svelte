import { describe, expect, it } from 'vitest'

import { layerAttribute, moduleAttribute, setAttributes } from './attributes.js'

describe('setAttributes', () => {
  it('should set module and layer attributes correctly', () => {
    const element = document.createElement('div')
    const layer = 'testLayer'
    const module = 'testModule'

    setAttributes(element, layer, module)

    expect(element.getAttribute(moduleAttribute)).toBe(`${layer}/${module}`)
    expect(element.getAttribute(layerAttribute)).toBe(layer)
  })

  it('should throw an error for empty layer and module values', () => {
    const element = document.createElement('div')

    expect(() => setAttributes(element, '', '')).toThrowError()
  })

  it('should handle existing attributes correctly', () => {
    const element = document.createElement('div')
    const existingModuleValue = 'existingLayer/existingModule'
    const existingLayerValue = 'existingLayer'

    element.setAttribute(moduleAttribute, existingModuleValue)
    element.setAttribute(layerAttribute, existingLayerValue)

    const newLayer = 'newLayer'
    const newModule = 'newModule'

    setAttributes(element, newLayer, newModule)

    expect(element.getAttribute(moduleAttribute)).toBe(`${newLayer}/${newModule}`)
    expect(element.getAttribute(layerAttribute)).toBe(newLayer)
  })
})

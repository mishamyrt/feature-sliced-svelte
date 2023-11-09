import { describe, expect, it } from 'vitest'

import { allowedLayers, isLayer, type Layer } from './layer.js'

describe('isLayer', () => {
  it('should return true for valid layers', () => {
    allowedLayers.forEach((layer) => {
      expect(isLayer(layer)).toBe(true)
    })
  })

  it('should return false for invalid layers', () => {
    const invalidLayers = ['invalidLayer', 'test', '123', '']

    invalidLayers.forEach((layer) => {
      expect(isLayer(layer)).toBe(false)
    })
  })

  it('should correctly type narrow string to Layer', () => {
    const validLayer: string = 'entities'

    if (isLayer(validLayer)) {
      // Now TS knows that validLayer is Layer
      const layer: Layer = validLayer
      expect(layer).toBe(validLayer)
    } else {
      expect(true).toBe('Valid layer was not correctly identified')
    }
  })
})

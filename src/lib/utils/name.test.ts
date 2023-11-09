import { describe, expect, it } from 'vitest'

import { isLayer } from './layer.js'
import { parseName } from './name.js'

describe('parseName', () => {
  it('should parse valid module names correctly', () => {
    const validNames = [
      'shared/Module1',
      'entities/Module2',
      'features/Module3',
      'widgets/Module4',
      'pages/Module5',
      'app/Module6',
    ]

    validNames.forEach((name) => {
      const result = parseName(name)
      expect(result).not.toBeNull()
      if (result) {
        const [layer, moduleName] = result
        expect(isLayer(layer)).toBe(true)
        expect(typeof moduleName).toBe('string')
      }
    })
  })

  it('should return null for invalid module names', () => {
    const invalidNames = [
      'shared',
      'entities/',
      'features/Module/',
      'pages/Module/',
      'invalidLayer/Module',
      'shared/Module/extra',
    ]

    invalidNames.forEach((name) => {
      const result = parseName(name)
      expect(result).toBeNull()
    })
  })

  it('should handle layer and module with special characters', () => {
    const nameWithSpecialChars = 'shared/module_with_special-chars123'
    const result = parseName(nameWithSpecialChars)
    expect(result).not.toBeNull()
    if (result) {
      const [layer, moduleName] = result
      expect(isLayer(layer)).toBe(true)
      expect(moduleName).toBe('module_with_special-chars123')
    }
  })

  it('should handle case sensitivity', () => {
    const mixedCaseName = 'Shared/MODULE'
    const result = parseName(mixedCaseName)
    expect(result).toBeNull()
  })
})

import { beforeEach, describe, expect, it } from 'vitest'

import { getModulesCount, type ModulesCount } from './count.js'

describe('getModulesCount', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div data-fsd data-fsd-layer="layer1"></div>
      <div data-fsd data-fsd-layer="layer2"></div>
      <div data-fsd data-fsd-layer="layer1"></div>
    `
  })

  it('should return correct module count for each layer', () => {
    const result: ModulesCount[] = getModulesCount()
    expect(result).toHaveLength(2)

    expect(result).toEqual(
      expect.arrayContaining([
        { name: 'layer1', count: 2 },
        { name: 'layer2', count: 1 },
      ]),
    )
  })

  it('should throw an error if an element has no "data-fsd-layer" attribute', () => {
    document.body.innerHTML += `
      <div data-fsd></div>
    `

    expect(() => getModulesCount()).toThrowError()
  })

  it('should handle no elements with data-fsd attribute', () => {
    document.body.innerHTML = ''

    const result: ModulesCount[] = getModulesCount()
    expect(result).toHaveLength(0)
  })
})

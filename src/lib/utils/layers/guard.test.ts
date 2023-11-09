import { describe, expect, it } from 'vitest'

import { isCorrectName } from './guard.js'

describe('layer guard test', () => {
  it('resolves correct values', () => {
    const result = isCorrectName('features/asd')
    expect(result).toBeTruthy()
  })
})

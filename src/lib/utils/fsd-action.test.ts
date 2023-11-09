import { cleanup, render } from '@testing-library/svelte'
import { afterEach, describe, expect, it, vi } from 'vitest'

import FSDActionTest from './__test__/FSDActionTest.svelte'
import { setAttributes } from './attributes.js'

afterEach(cleanup)

vi.mock('./attributes.js', async (importOriginal) => {
  // eslint-disable-next-line @typescript-eslint/consistent-type-imports
  const mod = await importOriginal<typeof import('./attributes.js')>()
  return {
    ...mod,
    setAttributes: vi.fn(),
  }
})

describe('fsd action', () => {
  it('should set attributes on element with valid name', async () => {
    const { getByTestId } = render(FSDActionTest, { props: { name: 'entities/ModuleName' } })
    const element = getByTestId('fsd-test-element')

    expect(setAttributes).toHaveBeenCalledWith(element, 'entities', 'ModuleName')
  })

  it('should log an error for invalid name', async () => {
    const spy = vi.spyOn(console, 'error')
    render(FSDActionTest, { props: { name: 'invalidName' } })

    expect(spy).toHaveBeenCalled()
  })

  it('should update attributes when name is updated', async () => {
    const { getByTestId, rerender } = render(FSDActionTest, { props: { name: 'entities/ModuleName' } })
    const element = getByTestId('fsd-test-element')

    expect(setAttributes).toHaveBeenCalledWith(element, 'entities', 'ModuleName')

    rerender({ props: { name: 'widgets/AnotherModule' } })

    expect(setAttributes).toHaveBeenCalledWith(element, 'widgets', 'AnotherModule')
  })
})

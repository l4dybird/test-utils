import { expect, it } from 'vitest'

it('should return the runtimeConfig from nuxt.config', () => {
  const config = useRuntimeConfig()
  expect(config).toBeTypeOf('object')
  expect(config?.public).toEqual({
    hello: 'nuxt',
    testValue: 123,
  })
  expect(config).toBe('nuxt')
})

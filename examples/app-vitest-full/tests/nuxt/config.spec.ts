import { expect, it } from 'vitest'

it('should return the runtimeConfig from nuxt.config', () => {
  const config = useRuntimeConfig()
  expect(config).toBeTypeOf('object')
  console.log('check:object', config?.public)
  console.log('check:property', config?.public.nuxt)
  expect(config?.public).toEqual({
    hello: 'nuxt',
    testValue: 123,
  })
  expect(config.public.hello).toBe('nuxt')
})

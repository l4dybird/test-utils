import { expect, it } from 'vitest'

it('unit test', () => {
  expect(typeof window).toBe('undefined')
})

it('hello nuxt', () => {
  const config = useRuntimeConfig()
  expect(config.public.hello).toBe('nuxt')
})

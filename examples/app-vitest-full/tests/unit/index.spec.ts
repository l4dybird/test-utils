import { expect, it } from 'vitest'

it('unit test', () => {
  expect(typeof window).toBe('undefined')
})

it('hello nuxt', () => {
  const config = useRuntimeConfig()
  console.log('fuga', config.public)
  expect(config.public).toBe('nuxt')
})

import { expect, it } from 'vitest'
import { mockNuxtImport } from '@nuxt/test-utils/runtime'

mockNuxtImport('useRuntimeConfig', () => {
  return () => {
    return {
      public: { API_ENTRYPOINT: 'http://api.example.com' },
    }
  }
})

it('should mock core nuxt composables', () => {
  expect(useRuntimeConfig().public?.API_ENTRYPOINT).toMatchInlineSnapshot(
    '"http://api.example.com"',
  )
})

import type { NuxtConfig } from '@nuxt/types'

// https://nuxt.com/docs/api/configuration/nuxt-config

const config: NuxtConfig = {
  buildModules: ['@nuxt/typescript-build'],
  devtools: { enabled: true }
}

export default config
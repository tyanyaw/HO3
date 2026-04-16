// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4,
  },

  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@primevue/nuxt-module',
    '@formkit/nuxt'
  ],

  // --- ADD THIS SECTION ---
  vite: {
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit',
        '@formkit/core',
        '@formkit/utils',
        '@formkit/inputs'
      ]
    },
  },

  primevue: {
    options: {
      unstyled: true // This strips all default PrimeVue CSS
    },
    // importPT: { as: 'Tailwind', from: 'path/to/your/preset' } // Optional: If using a global Tailwind preset
  },
  // FormKit auto-detects formkit.config.ts in root

})

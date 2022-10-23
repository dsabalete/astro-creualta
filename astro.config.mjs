import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import vue from '@astrojs/vue'
import tailwind from '@astrojs/tailwind'
// import react from '@astrojs/react'
// import svelte from '@astrojs/svelte'
// import lit from '@astrojs/lit'

// https://astro.build/config
export default defineConfig({
  site: 'https://astro-creualta.netlify.com',
  // integrations: [mdx(), sitemap(), tailwind(), vue(), react(), svelte(), lit()]
  integrations: [mdx(), sitemap(), tailwind(), vue()]
})

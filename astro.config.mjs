import { defineConfig, squooshImageService } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import vercel from "@astrojs/vercel/serverless";

import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  trailingSlash: "never",
  integrations: [
    react(), 
    tailwind(), 
    icon(), 
    starlight({
      title: 'Data',
      sidebar: [{
        label: '2017',
        items: [
        // Each item here is one entry in the navigation menu.
        {
          label: 'Example Guide',
          link: '/guides/example/'
        }]
        }, {
          label: '2018',
          autogenerate: {
            directory: 'reference'
          }
        }],
    })],
  security: {
    checkOrigin: true
  },
  experimental: {
    actions: true
  },
  output: "server",
  adapter: vercel(),
  image: {
    service: squooshImageService()
  }
});
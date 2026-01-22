import { defineConfig } from "astro/config";
import icon from "astro-icon";
import robotsTxt from "astro-robots-txt";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://l0drex.github.io/",

  integrations: [
    icon(),
    robotsTxt({
      sitemap: false,
      policy: [{ userAgent: "*", disallow: ["/404"] }],
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});

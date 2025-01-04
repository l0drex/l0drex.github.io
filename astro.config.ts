import { defineConfig } from "astro/config";
import icon from "astro-icon";
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: "https://l0drex.github.io/",
  integrations: [icon(), tailwind(), robotsTxt({
    sitemap: false,
    policy: [{ userAgent: "*", disallow: ["/404"] }],
  })]
});
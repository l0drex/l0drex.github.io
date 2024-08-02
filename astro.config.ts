import { defineConfig } from "astro/config";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://l0drex.github.io/",
  integrations: [icon()]
});

import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";
import astroI18next from "astro-i18next";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://master--astrotutorial-ovo.netlify.app/",
  integrations: [astroI18next(), preact(), tailwind()]
});
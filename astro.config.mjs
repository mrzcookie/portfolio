// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
	site: "https://www.mrzcookie.dev",
	vite: {
		plugins: [tailwindcss()],
	},
	build: {
		assets: "assets",
	},
});

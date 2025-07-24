import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import { defineConfig } from "astro/config";
import expressiveCode from "astro-expressive-code";
import spectre from "./package/src";
import { spectreDark } from "./src/ec-theme";

const config = defineConfig({
	site: "https://www.mrzcookie.dev",
	adapter: vercel({
		imageService: true,
	}),
	integrations: [
		expressiveCode({
			themes: [spectreDark],
		}),
		mdx(),
		sitemap(),
		spectre({
			name: "Cookie",
			openGraph: {
				home: {
					title: "Cookie",
					description: "I'm a 16-year-old full-stack developer passionate about building websites, Discord bots, and Minecraft servers!",
				},
				blog: {
					title: "Blog",
					description: "News and guides from Cookie.",
				},
				projects: {
					title: "Projects",
				},
			},
		}),
	],
	build: {
		assets: "assets",
	},
});

export default config;

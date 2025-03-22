import adapterStatic from "@sveltejs/adapter-static";
import { sveltePreprocess } from "svelte-preprocess";
import autoprefixer from "autoprefixer";
import adapter from "@sveltejs/adapter-static";

const preprocess = sveltePreprocess({
	postcss: {
		plugins: [autoprefixer]
	}
});

const config = {
	compilerOptions: {
		runes: true
	},
	preprocess,
	kit: {
		adapter: adapterStatic({ strict: false })
	}
};

// export default config;

export default {
	kit: {
		adapter: adapter({
			pages: "build",
			assets: "build",
			fallback: null
		}),
		paths: {
			base: "/interactive"
		}
	}
};

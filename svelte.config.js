import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: vitePreprocess({
		less: true
	}),
	extensions: ['.svelte', '.md'],
	/*compilerOptions: {
        customElement: true
        // other compiler options ...
    },*/

	kit: {
		files: {
			assets: 'static'
		},
		adapter: adapter({
			out: 'build'
		})
	}
};

export default config;

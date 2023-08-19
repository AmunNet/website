import { sveltekit } from '@sveltejs/kit/vite';
import icons from 'unplugin-icons/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [icons({ compiler: 'svelte' }), sveltekit()],
	server: {
		port: 3000
	},
	ssr: {
		noExternal: process.env.NODE_ENV === 'production' ? ['@carbon/charts'] : []
	}
};

export default config;

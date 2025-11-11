import { defineConfig } from 'jsrepo';

export default defineConfig({
    // configure where stuff comes from here
    registries: ['@ieedan/shadcn-svelte-extras@beta'],
    // configure were stuff goes here
    paths: {
		ui: '$lib/components/ui',
		blocks: '$lib/components',
		hooks: '$lib/hooks',
		actions: '$lib/actions',
		utils: '$lib/utils',
		lib: '$lib'
	},
});
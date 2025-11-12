import { defineConfig } from 'jsrepo';
import { demoOutput } from './src/lib/outputs/demo-output';

export default defineConfig({
	registries: ['@ieedan/shadcn-svelte-extras@beta'],
	paths: {
		ui: '$lib/components/ui',
		blocks: '$lib/components',
		hooks: '$lib/hooks',
		actions: '$lib/actions',
		utils: '$lib/utils',
		lib: '$lib'
	},
	registry: {
		name: '@registry/kit',
		outputs: [demoOutput()],
		items: [
			// registry kit
			{
				name: 'add',
				description: 'Allow users to copy the jsrepo add command to their clipboard',
				type: 'ui',
				files: [
					{
						path: 'src/lib/components/ui/add'
					},
					{
						path: 'src/lib/examples/add-demo.svelte',
						type: 'registry:example'
					}
				]
			},
			// logos
			{
				name: 'pnpm-logo',
				type: 'logo',
				files: [
					{
						path: 'src/lib/components/logos/pnpm.svelte'
					}
				]
			},
			{
				name: 'npm-logo',
				type: 'logo',
				files: [
					{
						path: 'src/lib/components/logos/npm.svelte'
					}
				]
			},
			{
				name: 'yarn-logo',
				type: 'logo',
				files: [
					{
						path: 'src/lib/components/logos/yarn.svelte'
					}
				]
			},
			{
				name: 'bun-logo',
				type: 'logo',
				files: [
					{
						path: 'src/lib/components/logos/bun.svelte'
					}
				]
			},
			{
				name: 'jsrepo-logo',
				type: 'logo',
				files: [
					{
						path: 'src/lib/components/logos/jsrepo.svelte'
					}
				]
			},
			{
				name: 'github-logo',
				type: 'logo',
				files: [
					{
						path: 'src/lib/components/logos/github.svelte'
					}
				]
			},
			{
				name: 'gitlab-logo',
				type: 'logo',
				files: [
					{
						path: 'src/lib/components/logos/gitlab.svelte'
					}
				]
			},
			{
				name: 'bitbucket-logo',
				type: 'logo',
				files: [
					{
						path: 'src/lib/components/logos/bitbucket.svelte'
				}
				]
			},
			{
				name: 'azure-devops-logo',
				type: 'logo',
				files: [
					{
						path: 'src/lib/components/logos/azure-devops.svelte'
					}
				]
			},
			{
				name: 'utils',
				type: 'lib',
				add: 'when-needed',
				files: [
					{
						path: 'src/lib/utils.ts'
					}
				]
			},

			// shadcn-svelte
			{
				name: 'dropdown-menu',
				type: 'ui',
				add: 'when-needed',
				files: [
					{
						path: 'src/lib/components/ui/dropdown-menu'
					}
				]
			},
			{
				name: 'separator',
				type: 'ui',
				add: 'when-needed',
				files: [
					{
						path: 'src/lib/components/ui/separator'
					}
				]
			},

			// shadcn-svelte-extras
			{
				name: 'use-clipboard',
				type: 'hook',
				add: 'when-needed',
				files: [
					{
						path: 'src/lib/hooks/use-clipboard.svelte.ts'
					}
				]
			}
		]
	}
});

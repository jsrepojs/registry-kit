import { defineConfig } from 'jsrepo';
import { repository, distributed } from 'jsrepo/outputs';

export default defineConfig({
	registries: ['@ieedan/shadcn-svelte-extras'],
	paths: {
		ui: '$lib/components/ui',
		block: '$lib/components',
		logo: '$lib/components/logos',
		hook: '$lib/hooks',
		action: '$lib/actions',
		util: '$lib/utils',
		lib: '$lib'
	},
	registry: {
		name: '@registry/kit',
		description: 'Components for your registry',
		version: 'package',
		homepage: 'https://registry-kit.dev',
		authors: ['Aidan Bleser'],
		bugs: 'https://github.com/jsrepojs/registry-kit/issues',
		repository: 'https://github.com/jsrepojs/registry-kit',
		tags: ['svelte', 'sveltekit', 'registry', 'components', 'jsrepo'],
		outputs: [repository({ format: true }), distributed({ dir: 'static/r', format: true })],
		defaultPaths: {
			ui: '$lib/components/ui',
			block: '$lib/components',
			logo: '$lib/components/logos',
			hook: '$lib/hooks',
			action: '$lib/actions',
			util: '$lib/utils',
			lib: '$lib'
		},
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
						path: 'src/lib/demos/add-demo.svelte',
						role: 'example',
						dependencyResolution: 'manual',
						type: 'block'
					}
				]
			},
			{
				name: 'demo',
				description: 'Display an interactive demo of a component',
				type: 'ui',
				files: [
					{
						path: 'src/lib/components/ui/demo'
					},
					{
						path: 'src/routes/demos/[...path]',
						type: 'page',
						target: 'src/routes/demos/[...path]'
					},
					{
						path: 'src/lib/demos/demo-demo.svelte',
						target: 'src/lib/demos/demo-demo.svelte',
						dependencyResolution: 'manual'
					}
				]
			},
			// logos
			...[
				{
					name: 'pnpm-logo',
					type: 'logo',
					add: 'when-needed',
					files: [
						{
							path: 'src/lib/components/logos/pnpm.svelte'
						}
					]
				},
				{
					name: 'npm-logo',
					type: 'logo',
					add: 'when-needed',
					files: [
						{
							path: 'src/lib/components/logos/npm.svelte'
						}
					]
				},
				{
					name: 'yarn-logo',
					type: 'logo',
					add: 'when-needed',
					files: [
						{
							path: 'src/lib/components/logos/yarn.svelte'
						}
					]
				},
				{
					name: 'bun-logo',
					type: 'logo',
					add: 'when-needed',
					files: [
						{
							path: 'src/lib/components/logos/bun.svelte'
						}
					]
				},
				{
					name: 'jsrepo-logo',
					type: 'logo',
					add: 'when-needed',
					files: [
						{
							path: 'src/lib/components/logos/jsrepo.svelte'
						}
					]
				},
				{
					name: 'github-logo',
					type: 'logo',
					add: 'when-needed',
					files: [
						{
							path: 'src/lib/components/logos/github.svelte'
						}
					]
				},
				{
					name: 'gitlab-logo',
					type: 'logo',
					add: 'when-needed',
					files: [
						{
							path: 'src/lib/components/logos/gitlab.svelte'
						}
					]
				},
				{
					name: 'bitbucket-logo',
					type: 'logo',
					add: 'when-needed',
					files: [
						{
							path: 'src/lib/components/logos/bitbucket.svelte'
						}
					]
				},
				{
					name: 'azure-devops-logo',
					type: 'logo',
					add: 'when-needed',
					files: [
						{
							path: 'src/lib/components/logos/azure-devops.svelte'
						}
					]
				},
				{
					name: 'registry-kit-logo',
					type: 'logo',
					add: 'when-needed',
					files: [
						{
							path: 'src/lib/components/logos/registry-kit.svelte'
						}
					]
				}
			],
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
			...[
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
				{
					name: 'resizable',
					type: 'ui',
					add: 'when-needed',
					files: [
						{
							path: 'src/lib/components/ui/resizable'
						}
					]
				},
				{
					name: 'tabs',
					type: 'ui',
					add: 'when-needed',
					files: [
						{
							path: 'src/lib/components/ui/tabs'
						}
					]
				},
				{
					name: 'toggle',
					type: 'ui',
					add: 'when-needed',
					files: [
						{
							path: 'src/lib/components/ui/toggle'
						}
					]
				},
				{
					name: 'toggle-group',
					type: 'ui',
					add: 'when-needed',
					files: [
						{
							path: 'src/lib/components/ui/toggle-group'
						}
					]
				}
			],

			// shadcn-svelte-extras
			...[
				{
					name: 'use-clipboard',
					type: 'hook',
					add: 'when-needed',
					files: [
						{
							path: 'src/lib/hooks/use-clipboard.svelte.ts'
						}
					]
				},
				{
					name: 'button',
					type: 'ui',
					add: 'when-needed',
					files: [
						{
							path: 'src/lib/components/ui/button'
						}
					]
				},
				{
					name: 'copy-button',
					type: 'ui',
					add: 'when-needed',
					files: [
						{
							path: 'src/lib/components/ui/copy-button'
						}
					]
				},
				{
					name: 'light-switch',
					type: 'ui',
					add: 'when-needed',
					files: [
						{
							path: 'src/lib/components/ui/light-switch'
						}
					]
				},
				{
					name: 'code',
					type: 'ui',
					add: 'when-needed',
					files: [
						{
							path: 'src/lib/components/ui/code'
						}
					]
				}
			]
		]
	}
});

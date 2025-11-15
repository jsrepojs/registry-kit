<script>
	import Add from '$lib/components/add.svelte';
	import * as Demo from '$lib/components/ui/demo';
	import AddDemo from '$lib/demos/add-demo.svelte';
	import { MetaTags } from 'svelte-meta-tags';
	import { LightSwitch } from '$lib/components/ui/light-switch';
	import RegistryKitLogo from '$lib/components/logos/registry-kit.svelte';
	import { Button } from '$lib/components/ui/button';
	import GithubLogo from '$lib/components/logos/github.svelte';
	import LightbulbIcon from '@lucide/svelte/icons/lightbulb';
</script>

<MetaTags
	title="registry-kit - Beautiful, fully composable, components for your registry."
	description="Beautiful, fully composable, components for your registry."
	canonical="https://registry-kit.dev"
	twitter={{
		title: 'registry-kit - Beautiful, fully composable, components for your registry.',
		description: 'Beautiful, fully composable, components for your registry.',
		cardType: 'summary_large_image',
		image: 'https://registry-kit.dev/og.png'
	}}
	openGraph={{
		title: 'registry-kit - Beautiful, fully composable, components for your registry.',
		description: 'Beautiful, fully composable, components for your registry.',
		siteName: 'registry-kit.dev',
		images: [
			{
				url: 'https://registry-kit.dev/og.png',
				width: 1074,
				height: 638,
				alt: 'registry-kit - Beautiful, fully composable, components for your registry.'
			}
		]
	}}
/>

<header class="flex justify-end px-4 py-2">
	<div class="flex items-center gap-2">
		<Button href="https://github.com/jsrepojs/registry-kit" variant="ghost" size="icon">
			<GithubLogo />
		</Button>
		<LightSwitch variant="ghost" />
	</div>
</header>

<main class="flex flex-col place-items-center px-4 pb-10">
	<div class="flex flex-col place-items-center gap-2 py-10">
		<RegistryKitLogo wordmark class="h-30 w-auto" />
		<p class="text-center text-lg text-muted-foreground">
			Beautiful, fully composable, components for your registry.
		</p>
		<Button href="https://github.com/jsrepojs/registry-kit" variant="secondary">
			<GithubLogo />
			GitHub
		</Button>
	</div>
	<div class="flex w-full max-w-4xl flex-col gap-10">
		<div class="flex flex-col gap-6">
			<div class="flex flex-col gap-2">
				<h2 class="text-3xl font-bold">Add</h2>
				<p class="text-muted-foreground">
					Allow users to copy the jsrepo add command to their clipboard.
				</p>
			</div>
			<Demo.Root>
				<Demo.ActionsGroup class="justify-between">
					<Demo.Tabs />
					<Demo.ActionsGroup>
						<Add item="add" />
					</Demo.ActionsGroup>
				</Demo.ActionsGroup>
				<Demo.Preview type="component">
					<AddDemo />
				</Demo.Preview>
				<Demo.Code
					code={import('$lib/demos/add-demo.svelte?raw').then(({ default: code }) => code)}
				/>
			</Demo.Root>
			<small class="flex flex-wrap items-center gap-1 rounded-lg border p-2 text-muted-foreground">
				<LightbulbIcon class="inline size-4 text-yellow-400" />
				Inspired by the
				<a href="https://www.shadcnblocks.com/" class="font-medium underline underline-offset-2">
					shadcnblocks
				</a>
				command component.
			</small>
		</div>
		<div class="flex flex-col gap-6">
			<div class="flex flex-col gap-2">
				<h2 class="text-3xl font-bold">Demo</h2>
				<p class="text-muted-foreground">Display an interactive demo of a component</p>
			</div>
			<Demo.Root>
				<Demo.ActionsGroup class="justify-between">
					<Demo.Tabs />
					<Demo.ActionsGroup>
						<Add item="demo" />
						<Demo.ControlGroup>
							<Demo.ControlSizeMobile />
							<Demo.ControlSizeTablet />
							<Demo.ControlSizeDesktop />
							<Demo.ControlGroupSeparator />
							<Demo.Fullscreen />
							<Demo.ControlGroupSeparator />
							<Demo.ControlRefresh />
						</Demo.ControlGroup>
					</Demo.ActionsGroup>
				</Demo.ActionsGroup>
				<Demo.Preview type="iframe" demo="demo-demo" />
				<Demo.Code />
			</Demo.Root>

			<p>
				When using the <strong>demo</strong> component there are 2 possible modes.
			</p>
			<ul class="list-inside list-disc">
				<li>
					<strong>Component mode</strong>
					is for displaying a component passed to the <strong>Preview</strong> component.
				</li>
				<li>
					<strong>Iframe mode</strong> is for displaying a demo of a component from a URL.
				</li>
			</ul>
			<p>
				The above demo is using <strong>Iframe mode</strong>. In <strong>Iframe mode</strong> the
				demo can be resized and refreshed. By default the demo the URL of the demo will
				<strong>{'demos/<demo-name>'}</strong>. Likewise the code will be pulled from the
				<strong>{'src/lib/demos/<demo-name>.svelte'}</strong> file.
			</p>
		</div>
	</div>
</main>

<div class="flex w-full flex-col place-items-center border-t border-border">
	<footer class="flex w-full max-w-4xl place-items-center justify-between px-4 py-6 md:px-0">
		<div class="flex items-center gap-2">
			<p>
				Components by
				<a href="https://x.com/ieeeedan" class="font-medium underline underline-offset-2">
					ieedan
				</a>.
			</p>
		</div>
		<div>
			<Button href="https://github.com/jsrepojs/registry-kit" variant="ghost" size="icon">
				<GithubLogo />
			</Button>
			<LightSwitch variant="ghost" />
		</div>
	</footer>
</div>

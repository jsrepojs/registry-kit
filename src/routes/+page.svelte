<script>
	import Add from '$lib/components/add.svelte';
	import * as Demo from '$lib/components/ui/demo';
	import AddDemo from '$lib/examples/add-demo.svelte';
	import { MetaTags } from 'svelte-meta-tags';
	import { LightSwitch } from '$lib/components/ui/light-switch';
	import RegistryKitLogo from '$lib/components/logos/registry-kit.svelte';
	import { Button } from '$lib/components/ui/button';
	import GithubLogo from '$lib/components/logos/github.svelte';
</script>

<MetaTags title="registry-kit - Components for your registry" />

<header class="sticky top-0 z-40 flex justify-end px-4 py-2">
	<div class="flex items-center gap-2">
		<Button href="https://github.com/jsrepojs/registry-kit" variant="ghost" size="icon">
			<GithubLogo />
		</Button>
		<LightSwitch variant="ghost" />
	</div>
</header>

<main class="flex flex-col place-items-center px-4 pb-4">
	<div class="flex flex-col place-items-center gap-2 py-10">
		<RegistryKitLogo wordmark class="h-30 w-auto" />
		<p class="text-center text-lg text-muted-foreground">Components for your registry.</p>
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
					Allow users to copy the jsrepo add command to their clipboard
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
					code={import('$lib/examples/add-demo.svelte?raw').then(({ default: code }) => code)}
				/>
			</Demo.Root>
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
		</div>
	</div>
</main>

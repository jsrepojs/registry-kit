<script>
	import Add from '$lib/components/add.svelte';
	import * as Demo from '$lib/components/ui/demo';
	import { LightSwitch } from '$lib/components/ui/light-switch';
	import { MetaTags } from 'svelte-meta-tags';
</script>

<MetaTags title="registry-kit - Components for your registry" />

<main class="flex flex-col place-items-center px-4">
	<div class="flex flex-col place-items-center gap-2 py-10">
		<h1 class="text-center text-4xl font-bold">@registry/kit</h1>
		<p class="text-center text-lg text-muted-foreground">Components for your registry</p>
	</div>
	<div class="w-full max-w-2xl">
		<Demo.Root>
			<Demo.ActionsGroup class="justify-between">
				<Demo.Tabs />
				<Demo.ActionsGroup>
					<Add item="add" />
					<LightSwitch />
				</Demo.ActionsGroup>
			</Demo.ActionsGroup>
			<Demo.PreviewCode demo="add-demo" />
		</Demo.Root>
	</div>
</main>

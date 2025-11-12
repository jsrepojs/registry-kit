<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { ModeWatcher } from 'mode-watcher';
	import { AddProvider } from '$lib/components/ui/add';
	import { REGISTRIES } from '$lib/constants';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<ModeWatcher />
<AddProvider
	agent="pnpm"
	registryOptions={REGISTRIES}
	registry="@registry/kit"
>
	{@render children()}
</AddProvider>

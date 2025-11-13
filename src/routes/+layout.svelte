<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon-light.svg';
	import { ModeWatcher, mode } from 'mode-watcher';
	import { AddProvider } from '$lib/components/ui/add';
	import { REGISTRIES } from '$lib/constants';
	import { PersistedState } from 'runed';
	import type { Agent } from '$lib/components/ui/add';

	let { children } = $props();

	const agent = new PersistedState<Agent>('user-agent-preference', 'pnpm');
	const registry = new PersistedState<(typeof REGISTRIES)[number]>(
		'user-registry-preference',
		'@registry/kit'
	);
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<ModeWatcher />
<AddProvider
	registryOptions={REGISTRIES}
	bind:agent={agent.current}
	bind:registry={registry.current}
>
	{@render children()}
</AddProvider>

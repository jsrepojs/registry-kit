<script lang="ts">
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import { AddProvider } from '$lib/components/ui/add';
	import { REGISTRIES } from '$lib/constants';
	import { PersistedState } from 'runed';
	import type { Agent } from '$lib/components/ui/add';
	import { dev } from '$app/environment';
	import { UmamiAnalytics } from '@lukulent/svelte-umami';

	let { children } = $props();

	const agent = new PersistedState<Agent>('user-agent-preference', 'pnpm');
	const registry = new PersistedState<(typeof REGISTRIES)[number]>(
		'user-registry-preference',
		'@registry/kit'
	);
</script>

<!-- only inject analytics in production -->
{#if !dev}
	<UmamiAnalytics
		srcURL="https://cloud.umami.is/script.js"
		websiteID="af153ecf-98d5-408c-bfa5-1ab1aceca5cf"
	/>
{/if}

<ModeWatcher />
<AddProvider
	registryOptions={REGISTRIES}
	bind:agent={agent.current}
	bind:registry={registry.current}
>
	{@render children()}
</AddProvider>

<script lang="ts">
	import type { Snippet } from 'svelte';
	import { useAdd } from './add.svelte.js';
	import { box } from 'svelte-toolbelt';

	type Props = {
		item: string;
		children: Snippet;
	};

	let { item, children }: Props = $props();

	useAdd({
		item: box.with(() => item)
	});
</script>

{@render children?.()}

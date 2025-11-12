<script lang="ts">
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import type { ComponentProps } from 'svelte';
	import { useAddDropdownCopyInit } from './add.svelte.js';

	let {
		class: className,
		...rest
	}: Omit<ComponentProps<typeof DropdownMenu.Item>, 'onSelect'> = $props();

	const dropdownCopyInitState = useAddDropdownCopyInit();
</script>

<DropdownMenu.Item class="flex flex-col place-items-start! gap-1" {...dropdownCopyInitState.props}>
	<span class="text-xs">
		{dropdownCopyInitState.root.initCommand}
	</span>
	<span class="text-start text-xs text-muted-foreground">Init registry</span>
</DropdownMenu.Item>

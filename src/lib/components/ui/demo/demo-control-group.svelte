<script lang="ts">
	import { cn } from '$lib/utils.js';
	import * as ToggleGroup from '$lib/components/ui/toggle-group';
	import type { ComponentProps } from 'svelte';
	import { useDemoControlGroup } from './demo.svelte.js';

	let {
		// this is just here to satisfy the types
		type = 'single',
		class: className,
		children,
		...rest
	}: Omit<ComponentProps<typeof ToggleGroup.Root>, 'type' | 'value' | 'onValueChange'> & {
		type?: 'single';
	} = $props();

	const controlGroupState = useDemoControlGroup({});
</script>

<ToggleGroup.Root
	{type}
	value="100"
	onValueChange={(value) => controlGroupState.onValueChange(parseInt(value))}
	class={cn('h-9 gap-0.5 rounded-md border border-border p-0.5', className)}
	{...rest}
>
	{@render children?.()}
</ToggleGroup.Root>

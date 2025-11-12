<script lang="ts">
	import { Tabs as TabsPrimitive } from 'bits-ui';
	import * as Tabs from '$lib/components/ui/tabs';
	import { cn } from '$lib/utils.js';

	let {
		ref = $bindable(null),
		class: className,
		children,
		...rest
	}: Omit<TabsPrimitive.ContentProps, 'value'> = $props();
</script>

<Tabs.Content
	value="preview"
	bind:ref
	class={cn(
		'flex min-h-[300px] place-items-center justify-center rounded-md border border-border',
		className
	)}
	{...rest}
>
	{@render children?.()}
</Tabs.Content>

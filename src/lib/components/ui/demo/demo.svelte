<script lang="ts">
	import * as Tabs from '$lib/components/ui/tabs';
	import { cn } from '$lib/utils';
	import { Tabs as TabsPrimitive } from 'bits-ui';

	let {
		value = $bindable('preview'),
		ref = $bindable(null),
		class: className,
		children,
		...rest
	}: Omit<TabsPrimitive.RootProps, 'value'> & { value?: 'preview' | 'code' } = $props();
</script>

<Tabs.Root data-slot="demo" bind:ref bind:value class={cn(className)} {...rest}>
	{@render children?.()}
</Tabs.Root>

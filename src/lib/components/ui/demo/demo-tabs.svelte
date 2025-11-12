<script lang="ts">
	import * as Tabs from '$lib/components/ui/tabs';
	import { cn } from '$lib/utils';
	import { Tabs as TabsPrimitive } from 'bits-ui';

	let { ref = $bindable(null), class: className, ...rest }: TabsPrimitive.ListProps = $props();
</script>

<Tabs.List data-slot="demo-tabs" bind:ref class={cn(className)} {...rest}>
	<Tabs.Trigger value="preview">Preview</Tabs.Trigger>
	<Tabs.Trigger value="code">Code</Tabs.Trigger>
</Tabs.List>

<script lang="ts">
	import * as Tabs from '$lib/components/ui/tabs';
	import { cn } from '$lib/utils';
	import { Tabs as TabsPrimitive } from 'bits-ui';
	import { useDemo, type Mode, type TabValue } from './demo.svelte.js';
	import { box } from 'svelte-toolbelt';
	import type { DemoPath } from '$lib/examples/index.js';
	import type { Component } from 'svelte';

	type RootProps = { value?: TabValue } & (
		| {
				mode: 'component';
				demo: Component;
				code: Promise<string>;
		  }
		| {
				mode: 'iframe';
				demo: DemoPath;
				code?: undefined;
		  }
	);

	let {
		value = $bindable('preview'),
		demo,
		mode,
		code,
		ref = $bindable(null),
		class: className,
		children,
		...rest
	}: Omit<TabsPrimitive.RootProps, 'value'> & RootProps = $props();

	useDemo({
		value: box.with(
			() => value,
			(v) => (value = v)
		),
		demo: box.with(() => demo),
		mode: box.with(() => mode),
		code: box.with(() => code)
	} as any);
</script>

<Tabs.Root data-slot="demo" bind:ref bind:value class={cn(className)} {...rest}>
	{@render children?.()}
</Tabs.Root>

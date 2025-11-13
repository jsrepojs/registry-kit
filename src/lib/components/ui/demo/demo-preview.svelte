<script lang="ts">
	import * as Resizable from '$lib/components/ui/resizable';
	import * as Tabs from '$lib/components/ui/tabs';
	import { cn } from '$lib/utils';
	import { useDemoPreview } from './demo.svelte.js';
	import type { Snippet } from 'svelte';
	import type { DemoPath } from '$lib/examples/index.js';
	import { box } from 'svelte-toolbelt';

	type Props =
		| {
				type: 'iframe';
				demo: DemoPath;
				children?: undefined;
		  }
		| {
				type: 'component';
				children: Snippet;
				demo?: undefined;
		  };

	let { type, demo, children }: Props = $props();

	useDemoPreview({
		type: box.with(() => type),
		demo: box.with(() => demo)
	});
</script>

<Tabs.Content
	value="preview"
	data-slot="demo-preview"
	class={cn('relative aspect-video rounded-md border border-border bg-background', {
		'border-none bg-accent dark:bg-card': type === 'iframe'
	})}
>
	{#if children}
		{@render children?.()}
	{:else}
		<Resizable.PaneGroup direction="horizontal">
			<Resizable.Pane
				defaultSize={100}
				class="relative rounded-md border border-border bg-background"
			>
				<iframe
					title="Preview {demo}"
					src={`/demos/${demo}`}
					loading="lazy"
					class="relative z-20 h-full w-full"
				></iframe>
			</Resizable.Pane>
			<Resizable.Handle
				withHandle
				class="z-30 bg-transparent [&_div]:absolute [&_div]:top-1/2 [&_div]:right-2 [&_div]:h-12 [&_div]:w-2 [&_div]:-translate-y-1/2 [&_div]:rounded-full [&_div]:border-none [&_div_svg]:hidden"
			/>
			<Resizable.Pane defaultSize={0}></Resizable.Pane>
		</Resizable.PaneGroup>
	{/if}
</Tabs.Content>

<script lang="ts">
	import * as Resizable from '$lib/components/ui/resizable';
	import * as Tabs from '$lib/components/ui/tabs';
	import * as Code from '$lib/components/ui/code';
	import { cn } from '$lib/utils';
	import { Portal } from 'bits-ui';
	import { useDemoPreview } from './demo.svelte.js';

	const previewState = useDemoPreview({});

	const uid = $props.id();

	const codePromise = $derived(
		previewState.root.opts.mode.current === 'component'
			? previewState.root.opts.code.current
			: import(`$lib/examples/${previewState.root.opts.demo.current}.svelte?raw`)
	);
</script>

<Tabs.Content value="preview" class={cn('relative aspect-video rounded-md bg-accent dark:bg-card')}>
	{#if typeof previewState.root.opts.demo.current === 'string'}
		<Resizable.PaneGroup direction="horizontal">
			<Resizable.Pane defaultSize={100} class="relative rounded-md border border-border">
				<iframe
					title="Preview {previewState.root.opts.demo.current}"
					src={`/demos/${previewState.root.opts.demo.current}`}
					class="absolute inset-0 h-full w-full"
				></iframe>
			</Resizable.Pane>
			<Resizable.Handle withHandle class="bg-transparent" />
			<Resizable.Pane defaultSize={0}></Resizable.Pane>
		</Resizable.PaneGroup>
	{:else}
		<div class="relative size-full rounded-md border bg-background border-border">
			<previewState.root.opts.demo.current />
		</div>
	{/if}
</Tabs.Content>

<Tabs.Content id="{uid}-code" value="code" class={cn('rounded-md border border-border')}
></Tabs.Content>

<!-- we do this to prevent having to render the code every time we switch tabs -->
<Portal to="#{uid}-code">
	{#await codePromise then { default: code }}
		<Code.Root lang="svelte" {code} class="aspect-video border-none [&_pre]:aspect-video">
			<Code.CopyButton />
		</Code.Root>
	{/await}
</Portal>

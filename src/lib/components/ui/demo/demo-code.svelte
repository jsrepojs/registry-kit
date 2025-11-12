<script lang="ts">
	import { Portal, Tabs as TabsPrimitive } from 'bits-ui';
	import * as Tabs from '$lib/components/ui/tabs';
	import { cn } from '$lib/utils.js';
	import * as Code from '$lib/components/ui/code';
	import type { SupportedLanguage } from '../code/shiki';

	const uid = $props.id();

	let {
		ref = $bindable(null),
		class: className,
		code,
		lang = 'svelte',
		...rest
	}: Omit<TabsPrimitive.ContentProps, 'value'> & {
		code: string;
		lang?: SupportedLanguage;
	} = $props();
</script>

<Portal to="#{uid}">
	<Code.Root {lang} {code} class="min-h-[300px] border-none [&_pre]:min-h-[300px]">
		<Code.CopyButton />
	</Code.Root>
</Portal>

<Tabs.Content
	id={uid}
	value="code"
	bind:ref
	class={cn('rounded-md border border-border', className)}
	{...rest}
></Tabs.Content>

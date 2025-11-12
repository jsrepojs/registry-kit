<script lang="ts">
	import Preview from './demo-preview.svelte';
	import type { DemoPath } from '../../../examples/index';
	import Code from './demo-code.svelte';

	type Props = {
		demo: DemoPath;
	};

	let { demo }: Props = $props();

	const codePromise = import(`$lib/examples/${demo}.svelte?raw`);
	const previewPromise = import(`$lib/examples/${demo}.svelte`);
</script>

<Preview>
	{#await previewPromise then { default: PreviewComponent }}
		<PreviewComponent />
	{/await}
</Preview>
{#await codePromise then { default: code }}
	<Code lang="svelte" {code} />
{/await}

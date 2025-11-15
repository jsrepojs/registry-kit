<script lang="ts">
	import type { ComponentProps } from 'svelte';
	import { Separator } from '../separator';

	let { class: className, ...rest }: ComponentProps<typeof Separator> = $props();
</script>

<Separator orientation="vertical" class={className} {...rest} />

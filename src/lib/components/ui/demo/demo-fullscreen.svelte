<script lang="ts">
	import { Button, type ButtonElementProps } from '$lib/components/ui/button';
	import MaximizeIcon from '@lucide/svelte/icons/maximize';

	let {
		ref = $bindable(null),
		variant = 'outline',
		size = 'icon',
		class: className,
		...rest
	}: ButtonElementProps = $props();
</script>

<Button aria-label="View in fullscreen" bind:ref {variant} {size} {...rest}>
	<MaximizeIcon />
</Button>

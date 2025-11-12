<script lang="ts">
	let { data } = $props();

	const ComponentPromise = import(`../../../examples/${data.path}.svelte`);
</script>

<div class="flex size-full h-svh place-items-center justify-center">
	{#await ComponentPromise then { default: Component }}
		<Component />
	{/await}
</div>

<script lang="ts">
	let { data } = $props();

	const ComponentPromise = import(`$lib/examples/${data.path}.svelte`);
</script>

<div class="flex h-svh place-items-center justify-center">
	{#await ComponentPromise then { default: Component }}
		<Component />
	{/await}
</div>

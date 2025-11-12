<script lang="ts">
	let { data } = $props();

	const ComponentPromise = import(`$lib/examples/${data.path}.svelte`);
</script>

<div class="flex place-items-center justify-center h-svh">
	{#await ComponentPromise then { default: Component }}
		<Component />
	{/await}
</div>

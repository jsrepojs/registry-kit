<script lang="ts">
	import { REGISTRIES } from '$lib/constants';
	import * as Add from '$lib/components/ui/add';
	import RegistryKitLogo from '$lib/components/logos/registry-kit.svelte';

	type Props = {
		item: string;
	};

	let { item }: Props = $props();
</script>

<Add.Root {item}>
	<Add.Group>
		<Add.Button />
		<Add.GroupSeparator />
		<Add.Dropdown>
			<Add.DropdownContent>
				<Add.DropdownCopyInit />
				<Add.DropdownSeparator />
				{#each Add.AGENTS as agent (agent)}
					<Add.DropdownAgentOption {agent} />
				{/each}
				<Add.DropdownSeparator />
				{#each REGISTRIES as registry (registry)}
					<Add.DropdownRegistryOption {registry} fallbackIcon={RegistryKitLogo} />
				{/each}
				<Add.DropdownSeparator />
				<Add.DropdownDocsLink />
			</Add.DropdownContent>
		</Add.Dropdown>
	</Add.Group>
</Add.Root>

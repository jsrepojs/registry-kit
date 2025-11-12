<script lang="ts">
	import * as Add from '$lib/components/ui/add';

	// the `as const` will ensure type safety for the registry prop
	const REGISTRY_OPTIONS = ['@registry/kit', 'github/jsrepojs/registry-kit'] as const;
</script>

<Add.Provider agent="pnpm" registryOptions={REGISTRY_OPTIONS} registry="@registry/kit">
	<Add.Root item="add">
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
					{#each REGISTRY_OPTIONS as registry (registry)}
						<Add.DropdownRegistryOption {registry} />
					{/each}
					<Add.DropdownSeparator />
					<Add.DropdownDocsLink />
				</Add.DropdownContent>
			</Add.Dropdown>
		</Add.Group>
	</Add.Root>
</Add.Provider>

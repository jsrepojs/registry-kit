<script lang="ts">
	import CheckIcon from '@lucide/svelte/icons/check';
	import ChevronDown from '@lucide/svelte/icons/chevron-down';
	import ExternalLink from '@lucide/svelte/icons/external-link';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { UseClipboard } from '$lib/hooks/use-clipboard.svelte';
	import { resolveCommand } from 'package-manager-detector/commands';
	import { useAgentSelection } from '$lib/hooks/use-agent-selection.svelte';
	import { cn } from '$lib/utils.js';
	import type { Agent } from 'package-manager-detector';
	import PnpmLogo from '$lib/components/logos/pnpm.svelte';
	import NpmLogo from '$lib/components/logos/npm.svelte';
	import YarnLogo from '$lib/components/logos/yarn.svelte';
	import BunLogo from '$lib/components/logos/bun.svelte';
	import { useRegistrySelection } from '$lib/hooks/use-registry-selection.svelte';
	import { RegistryLogo } from '$lib/components/ui/registry-logo';
	import { Separator } from '../separator';

	type Props = {
		registry: string | string[];
		item: string;
		class?: string;
	};

	let { registry: r, item, class: className }: Props = $props();
	const registryOptions = $derived(typeof r === 'string' ? [r] : r);

	const agent = useAgentSelection('pnpm');
	const registry = useRegistrySelection(typeof r === 'string' ? r : r[0]!);

	const addCommand = $derived(
		resolveCommand(agent.current, 'execute', ['jsrepo', 'add', `${registry.current}/${item}`])
	);
	const initCommand = $derived(
		resolveCommand(agent.current, 'execute', ['jsrepo', 'init', registry.current])
	);

	const copyAdd = new UseClipboard({ delay: 2000 });
	const copyInit = new UseClipboard({ delay: 2000 });
</script>

<div class={cn('flex h-9 items-center overflow-hidden bg-background rounded-md border border-border', className)}>
	<button
		aria-label="Copy add command"
		tabindex="0"
		onclick={() => copyAdd.copy([addCommand?.command, ...(addCommand?.args ?? [])].join(' '))}
		class="flex flex-1 place-items-center rounded-l-md transition-colors hover:bg-accent md:pr-2 [&_svg]:size-3.5"
	>
		<div class="flex size-9 items-center justify-center">
			<CheckIcon
				class={cn('absolute scale-0 transition-all ease-out', copyAdd.copied && 'scale-100')}
			/>
			{@render AgentLogo({
				agent: agent.current,
				class: cn('absolute scale-100 transition-all ease-out', copyAdd.copied && 'scale-0')
			})}
		</div>
		<span class="hidden font-mono text-xs text-nowrap text-ellipsis select-text md:inline">
			{[addCommand?.command, ...(addCommand?.args ?? [])].join(' ')}
		</span>
	</button>
	<Separator orientation="vertical" />
	<DropdownMenu.Root>
		<DropdownMenu.Trigger
			class="flex size-9 items-center justify-center rounded-r-md transition-colors hover:bg-accent"
		>
			<ChevronDown class="size-4" />
		</DropdownMenu.Trigger>
		<DropdownMenu.Content align="end">
			<DropdownMenu.Item
				class="flex flex-col place-items-start! gap-1"
				onSelect={() =>
					copyInit.copy([initCommand?.command, ...(initCommand?.args ?? [])].join(' '))}
			>
				<span class="text-xs">
					{[initCommand?.command, ...(initCommand?.args ?? [])].join(' ')}
				</span>
				<div class="flex items-center gap-1 [&_svg]:size-3">
					<span class="text-start text-xs text-muted-foreground">Init registry</span>
					<CheckIcon
						class={cn('scale-0 transition-all ease-out', copyInit.copied && 'scale-100')}
					/>
				</div>
			</DropdownMenu.Item>
			<DropdownMenu.Separator />
			{@render AgentOption({ agent: 'pnpm' })}
			{@render AgentOption({ agent: 'npm' })}
			{@render AgentOption({ agent: 'yarn' })}
			{@render AgentOption({ agent: 'bun' })}
			<DropdownMenu.Separator />
			{#if registryOptions.length > 1}
				{#each registryOptions as r}
					{@render RegistryOption({ registry: r })}
				{/each}
				<DropdownMenu.Separator />
			{/if}
			<DropdownMenu.Item
				onSelect={() => window.open('https://v3.jsrepo.dev/docs/cli/add', '_blank')}
			>
				<ExternalLink class="size-4" />
				<span class="text-sm">View CLI Documentation</span>
			</DropdownMenu.Item>
		</DropdownMenu.Content>
	</DropdownMenu.Root>
</div>

{#snippet RegistryOption({ registry: r }: { registry: string })}
	<DropdownMenu.Item
		onSelect={() => {
			registry.current = r;
			copyAdd.copy([addCommand?.command, ...(addCommand?.args ?? [])].join(' '));
		}}
		class="flex items-center justify-between [&_svg]:size-3.5"
	>
		<span class="flex items-center gap-2">
			<RegistryLogo registry={r} />
			{r}
		</span>
		<div class="size-4">
			{#if registry.current === r}
				<CheckIcon class="size-4" />
			{/if}
		</div>
	</DropdownMenu.Item>
{/snippet}

{#snippet AgentOption({ agent: a }: { agent: Agent })}
	<DropdownMenu.Item
		onSelect={() => {
			agent.current = a;
			copyAdd.copy([addCommand?.command, ...(addCommand?.args ?? [])].join(' '));
		}}
		class="flex items-center justify-between [&_svg]:size-3.5"
	>
		<span class="flex items-center gap-2">
			{@render AgentLogo({ agent: a })}
			{a}
		</span>
		<div class="size-4">
			{#if agent.current === a}
				<CheckIcon class="size-4" />
			{/if}
		</div>
	</DropdownMenu.Item>
{/snippet}

{#snippet AgentLogo({ agent, class: className }: { agent: Agent; class?: string })}
	{#if agent === 'pnpm'}
		<PnpmLogo class={className} />
	{:else if agent === 'npm'}
		<NpmLogo class={className} />
	{:else if agent === 'yarn'}
		<YarnLogo class={className} />
	{:else if agent === 'bun'}
		<BunLogo class={className} />
	{/if}
{/snippet}

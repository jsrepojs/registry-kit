<script lang="ts">
	import CheckIcon from '@lucide/svelte/icons/check';
	import ChevronDown from '@lucide/svelte/icons/chevron-down';
	import ExternalLink from '@lucide/svelte/icons/external-link';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { UseClipboard } from '$lib/hooks/use-clipboard.svelte';
	import { resolveCommand } from 'package-manager-detector/commands';
	import { useAgentSelection } from '$lib/hooks/use-agent-selection.svelte';
	import { cn } from '$lib/utils';
	import type { Agent } from 'package-manager-detector';
	import PnpmLogo from '$lib/components/logos/pnpm.svelte';
	import NpmLogo from '$lib/components/logos/npm.svelte';
	import YarnLogo from '$lib/components/logos/yarn.svelte';
	import BunLogo from '$lib/components/logos/bun.svelte';

	type Props = {
		registry: string;
		item: string;
	};

	let { registry, item }: Props = $props();
	const agent = useAgentSelection('pnpm');

	const addCommand = $derived(
		resolveCommand(agent.current, 'execute', ['jsrepo', 'add', `${registry}/${item}`])
	);
	const initCommand = $derived(
		resolveCommand(agent.current, 'execute', ['jsrepo', 'init', registry])
	);

	const copyAdd = new UseClipboard({ delay: 1000 });
	const copyInit = new UseClipboard({ delay: 1000 });
</script>

<div class="flex h-9 items-center overflow-hidden rounded-md border border-border">
	<button
		onclick={() => copyAdd.copy([addCommand?.command, ...(addCommand?.args ?? [])].join(' '))}
		class="flex flex-1 place-items-center rounded-l-md pr-2 transition-colors hover:bg-accent [&_svg]:size-3.5"
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
		<span class="font-mono text-xs">
			{[addCommand?.command, ...(addCommand?.args ?? [])].join(' ')}
		</span>
	</button>
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
			<DropdownMenu.Item
				onSelect={() => window.open('https://v3.jsrepo.dev/docs/cli/add', '_blank')}
			>
				<ExternalLink class="size-4" />
				<span class="text-sm">View CLI Documentation</span>
			</DropdownMenu.Item>
		</DropdownMenu.Content>
	</DropdownMenu.Root>
</div>

{#snippet AgentOption({ agent: a }: { agent: Agent })}
	<DropdownMenu.Item
		onSelect={() => (agent.current = a)}
		class="flex items-center justify-between [&_svg]:size-3.5"
	>
		<span class="flex items-center gap-2">
			{@render AgentLogo({ agent: a })}
			{a}
		</span>
		{#if agent.current === a}
			<CheckIcon class="size-4" />
		{/if}
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

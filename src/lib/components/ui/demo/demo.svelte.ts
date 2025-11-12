import type { DemoPath } from '$lib/examples';
import { Context } from 'runed';
import type { Component } from 'svelte';
import type { ReadableBoxedValues, WritableBoxedValues } from 'svelte-toolbelt';

export type TabValue = 'preview' | 'code';
export type Mode = 'iframe' | 'component';

type DemoRootProps = WritableBoxedValues<{
	value: TabValue;
}> &
	ReadableBoxedValues<
		| {
				mode: 'component';
				demo: Component;
				code: Promise<string>;
		  }
		| {
				mode: 'iframe';
				demo: DemoPath;
				code: undefined;
		  }
	>;

class DemoState {
	constructor(readonly opts: DemoRootProps) {}
}

const DemoRootCtx = new Context<DemoState>('demo-root-ctx');

type DemoPreviewProps = {};

class DemoPreviewState {
	constructor(
		readonly opts: DemoPreviewProps,
		readonly root: DemoState
	) {}
}

export function useDemo(props: DemoRootProps) {
	return DemoRootCtx.set(new DemoState(props));
}

export function useDemoPreview(props: DemoPreviewProps) {
	return new DemoPreviewState(props, DemoRootCtx.get());
}

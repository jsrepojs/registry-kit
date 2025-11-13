import type { DemoPath } from '$lib/examples';
import { Context } from 'runed';
import type { ReadableBoxedValues, WritableBoxedValues } from 'svelte-toolbelt';

export type TabValue = 'preview' | 'code';
export type Mode = 'iframe' | 'component';

type DemoRootProps = WritableBoxedValues<{
	value: TabValue;
}>;

class DemoState {
	demo = $state<DemoPath>();
	constructor(readonly opts: DemoRootProps) {}
}

const DemoRootCtx = new Context<DemoState>('demo-root-ctx');

type DemoPreviewProps = ReadableBoxedValues<{
	type: 'iframe' | 'component';
	demo: DemoPath | undefined;
}>;

class DemoPreviewState {
	constructor(
		readonly opts: DemoPreviewProps,
		readonly root: DemoState
	) {
		this.root.demo = this.opts.demo.current;
	}
}

type DemoCodeProps = ReadableBoxedValues<{
	code: string | Promise<string> | undefined;
}>;

class DemoCodeState {
	constructor(
		readonly opts: DemoCodeProps,
		readonly root: DemoState
	) {}

	get code(): Promise<string> {
		if (!this.opts.code.current) return this.#demoCode ?? Promise.resolve('');

		if (typeof this.opts.code.current === 'string') return Promise.resolve(this.opts.code.current);

		return this.opts.code.current;
	}

	#demoCode: Promise<string> | undefined = $derived.by(() => {
		if (!this.root.demo) return undefined;

		return import(`$lib/examples/${this.root.demo}.svelte?raw`).then(({ default: code }) => code);
	});
}

export function useDemo(props: DemoRootProps) {
	return DemoRootCtx.set(new DemoState(props));
}

export function useDemoPreview(props: DemoPreviewProps) {
	return new DemoPreviewState(props, DemoRootCtx.get());
}

export function useDemoCode(props: DemoCodeProps) {
	return new DemoCodeState(props, DemoRootCtx.get());
}

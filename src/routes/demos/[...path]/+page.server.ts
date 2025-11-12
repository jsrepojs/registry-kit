import { error } from '@sveltejs/kit';
import { DEMO_PATHS, type DemoPath } from '$lib/examples/index';

export async function load({ params }) {
	if (!params.path || !DEMO_PATHS.includes(params.path as DemoPath)) {
		throw error(400, 'Not a valid demo path');
	}
	return {
		path: params.path
	};
}

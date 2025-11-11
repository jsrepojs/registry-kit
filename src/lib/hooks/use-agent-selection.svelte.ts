import { PersistedState } from 'runed';
import type { Agent } from 'package-manager-detector';

export function useAgentSelection(fallback: Agent) {
	return new PersistedState('agent', fallback);
}

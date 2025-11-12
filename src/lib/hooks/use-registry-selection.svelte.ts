import { PersistedState } from 'runed';

export function useRegistrySelection(fallback: string) {
	return new PersistedState('registry', fallback);
}

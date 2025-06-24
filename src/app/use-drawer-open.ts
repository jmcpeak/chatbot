import useStore, { type Store } from "@/hooks/use-store";

const selector = (state: Store) => state.drawerOpen;

export default function useDrawerOpen() {
	return useStore(selector);
}

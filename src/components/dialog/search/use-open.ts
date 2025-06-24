import useStore, { type Store } from "@/hooks/use-store";
import { useCallback } from "react";
import { useShallow } from "zustand/react/shallow";

const selector = (state: Store) => ({
	dialogSearchOpen: state.dialogSearchOpen,
	setDialogSearchOpen: state.setDialogSearchOpen,
});

export default function useOpen() {
	const { dialogSearchOpen, setDialogSearchOpen } = useStore(
		useShallow(selector),
	);

	const onClose = useCallback(() => {
		setDialogSearchOpen(false);
	}, [setDialogSearchOpen]);

	return { onClose, open: dialogSearchOpen };
}

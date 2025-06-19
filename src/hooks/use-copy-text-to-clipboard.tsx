import useStore, { type Store } from "@/hooks/use-store";
import { useCallback } from "react";
import { useShallow } from "zustand/react/shallow";

const selector = (state: Store) => ({
	setSnackbarMessage: state.setSnackbarMessage,
	setSnackbarOpen: state.setSnackbarOpen,
});

export default function useCopyTextToClipboard(
	text = "",
	message = "Copied to clipboard",
) {
	const { setSnackbarMessage, setSnackbarOpen } = useStore(
		useShallow(selector),
	);

	return useCallback(() => {
		const copyToClipboard = async () => {
			await navigator.clipboard.writeText(text).finally();
		};
		copyToClipboard().finally();
		setSnackbarMessage(message);
		setSnackbarOpen(true);
	}, [message, setSnackbarMessage, setSnackbarOpen, text]);
}

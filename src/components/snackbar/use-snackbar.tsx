import useStore from "@/hooks/use-store";
import type { SnackbarCloseReason } from "@mui/material/Snackbar";
import type { SyntheticEvent } from "react";

type Tuple = [
	string,
	boolean,
	(event: SyntheticEvent | Event, reason?: SnackbarCloseReason) => void,
];

export default function useSnackbar(): Tuple {
	const open = useStore((state) => state.snackbarOpen);
	const message = useStore((state) => state.snackbarMessage);
	const setOpen = useStore((state) => state.setSnackbarOpen);

	const handleClose = (
		event: SyntheticEvent | Event,
		reason?: SnackbarCloseReason,
	) => {
		if (reason === "clickaway") {
			return;
		}

		setOpen(false);
	};

	return [message, open, handleClose];
}

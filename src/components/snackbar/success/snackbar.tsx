"use client";

import useSnackbar from "@/components/snackbar/use-snackbar";
import Close from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import Slide from "@mui/material/Slide";
import type {
	SnackbarOrigin,
	SnackbarProps,
	SnackbarSlots,
} from "@mui/material/Snackbar";
import MuiSnackbar from "@mui/material/Snackbar";

const anchorOrigin = {
	vertical: "top",
	horizontal: "center",
} as SnackbarOrigin;
const slotProps = {
	content: {
		sx: {
			"&.MuiSnackbarContent-root": {
				backgroundColor: "success.main",
				color: "success.contrastText",
			},
		},
	},
	transition: { direction: "down" },
};
const slots = { transition: Slide } as SnackbarSlots;

export default function Snackbar({ ...props }: SnackbarProps) {
	const [message, open, handleClose] = useSnackbar();

	const action = (
		<IconButton
			size="small"
			aria-label="close"
			color="inherit"
			onClick={handleClose}
		>
			<Close fontSize="small" />
		</IconButton>
	);

	return (
		<MuiSnackbar
			action={action}
			anchorOrigin={anchorOrigin}
			autoHideDuration={4000}
			message={message}
			onClose={handleClose}
			open={open}
			slotProps={slotProps}
			slots={slots}
			{...props}
		/>
	);
}

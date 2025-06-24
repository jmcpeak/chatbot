"use client";

import { slotProps } from "@/components/card/prompt/consts";
import List from "@/components/dialog/search/list";
import useDialogAutofocus from "@/components/dialog/search/use-dialog-autofocus";
import useInput from "@/components/dialog/search/use-input";
import useOpen from "@/components/dialog/search/use-open";
import Close from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import { useRouter } from "next/navigation";

export default function DialogSearch() {
	const input = useInput();
	const { inputRef, onTransitionEnter } = useDialogAutofocus();
	const { onClose, open } = useOpen();
	const router = useRouter();

	return (
		<Dialog
			fullWidth
			hideBackdrop
			keepMounted
			maxWidth="sm"
			onClose={onClose}
			onTransitionEnter={onTransitionEnter}
			open={open}
		>
			<DialogTitle>
				<Grid container alignItems="center" spacing={1}>
					<Grid size="grow">
						<TextField
							{...input}
							autoFocus
							fullWidth
							inputRef={inputRef}
							placeholder="Search chats..."
							variant="standard"
							slotProps={slotProps}
						/>
					</Grid>
					<Grid>
						<IconButton onClick={onClose}>
							<Close fontSize="small" />
						</IconButton>
					</Grid>
				</Grid>
			</DialogTitle>
			<Divider />
			<DialogContent>
				<List />
			</DialogContent>
		</Dialog>
	);
}

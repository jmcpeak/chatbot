"use client";

import useDialogAutofocus from "@/app/@dialog/(.)search/use-dialog-autofocus";
import ChatHistoryItems from "@/app/@drawer/chat-history-items";
import NewChatListItem from "@/app/@drawer/new-chat-list-item";
import { slotProps } from "@/components/card/prompt/consts";
import Close from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import TextField from "@mui/material/TextField";
import { useRouter } from "next/navigation";

const sx = {
	backgroundColor: "transparent",
	color: "text.disabled",
	lineHeight: "unset",
	pb: 1,
	pt: 2,
};

export default function Page() {
	const { inputRef, onClose, onTransitionEnter, open } = useDialogAutofocus();
	const router = useRouter();

	return (
		<Dialog
			fullWidth
			hideBackdrop
			maxWidth="sm"
			onClose={onClose}
			onTransitionEnter={onTransitionEnter}
			open={open}
		>
			<DialogTitle>
				<Grid container alignItems="center" spacing={1}>
					<Grid size="grow">
						<TextField
							autoFocus
							fullWidth
							inputRef={inputRef}
							placeholder="Search chats..."
							variant="standard"
							slotProps={slotProps}
						/>
					</Grid>
					<Grid>
						<IconButton onClick={router.back}>
							<Close fontSize="small" />
						</IconButton>
					</Grid>
				</Grid>
			</DialogTitle>
			<Divider />
			<DialogContent>
				<List>
					<NewChatListItem />
					<ListSubheader sx={sx}>Yesterday</ListSubheader>
					<ChatHistoryItems secondaryActionDisabled />
				</List>
			</DialogContent>
		</Dialog>
	);
}

"use client";

import useDeleteChatById from "@/components/dialog/delete-chat/use-delete-chat-by-id";
import useStore, { type Store } from "@/hooks/use-store";
import Button from "@mui/material/Button";
import DialogActionsMui from "@mui/material/DialogActions";
import { useCallback, useEffect } from "react";

const selector = (state: Store) => state.setDialogDeleteChatOpen;

export default function DialogActions({ id = "" }) {
	const setDialogDeleteChatOpen = useStore(selector);
	const { mutate, isPending, isSuccess } = useDeleteChatById();

	const handleCancel = useCallback(() => {
		setDialogDeleteChatOpen(false);
	}, [setDialogDeleteChatOpen]);
	const handleDelete = useCallback(() => {
		mutate(id);
	}, [id, mutate]);

	useEffect(() => {
		if (isSuccess) {
			setDialogDeleteChatOpen(false);
		}
	}, [isSuccess, setDialogDeleteChatOpen]);

	return (
		<DialogActionsMui>
			<Button color="inherit" onClick={handleCancel} size="small">
				Cancel
			</Button>
			<Button
				color="error"
				disabled={isPending}
				onClick={handleDelete}
				size="small"
				variant="contained"
			>
				Delete
			</Button>
		</DialogActionsMui>
	);
}

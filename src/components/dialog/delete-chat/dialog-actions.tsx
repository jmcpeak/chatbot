"use client";

import useMutationArchiveOrDeleteChatById from "@/hooks/mutations/use-mutation-archive-or-delete-chat-by-id";
import useStore, { type Store } from "@/hooks/use-store";
import Button from "@mui/material/Button";
import DialogActionsMui from "@mui/material/DialogActions";
import { useCallback, useEffect } from "react";

const selector = (state: Store) => state.setDialogDeleteChatOpen;

export default function DialogActions({
	id,
	isSuccess: isSuccessProp,
}: { id: string; isSuccess?: boolean }) {
	const setDialogDeleteChatOpen = useStore(selector);
	const { mutate, isPending, isSuccess } =
		useMutationArchiveOrDeleteChatById(true);

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
				disabled={isPending || !isSuccessProp}
				onClick={handleDelete}
				size="small"
				variant="contained"
			>
				Delete
			</Button>
		</DialogActionsMui>
	);
}

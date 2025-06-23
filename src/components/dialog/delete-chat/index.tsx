"use client";

import DialogActions from "@/components/dialog/delete-chat/dialog-actions";
import DialogContent from "@/components/dialog/delete-chat/dialog-content";
import useStore, { type Store } from "@/hooks/use-store";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { useParams } from "next/navigation";
import { useCallback, useMemo } from "react";
import { useShallow } from "zustand/react/shallow";

const selector = (state: Store) => ({
	dialogDeleteChatId: state.dialogDeleteChatId,
	dialogDeleteChatOpen: state.dialogDeleteChatOpen,
	setDialogDeleteChatId: state.setDialogDeleteChatId,
});

export default function DeleteChat() {
	const { id: idParam } = useParams();
	const { dialogDeleteChatId, dialogDeleteChatOpen, setDialogDeleteChatId } =
		useStore(useShallow(selector));

	const id = useMemo(
		() => dialogDeleteChatId || idParam,
		[dialogDeleteChatId, idParam],
	) as string;

	const handleClose = useCallback(() => {
		setDialogDeleteChatId("");
	}, [setDialogDeleteChatId]);

	return (
		<Dialog open={dialogDeleteChatOpen} onClose={handleClose}>
			<DialogTitle>Delete chat?</DialogTitle>
			<DialogContent id={id} />
			<DialogActions id={id} />
		</Dialog>
	);
}

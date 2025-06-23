"use client";

import useChatHistoryById from "@/components/dialog/delete-chat/use-chat-history-by-id";
import DialogContentMui from "@mui/material/DialogContent";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import Link from "next/link";

const sx = { display: "inline-block" };

export default function DialogContent({
	id,
	isSuccess,
}: { id: string; isSuccess?: boolean }) {
	const { data } = useChatHistoryById(id);

	return (
		<DialogContentMui>
			<Typography>
				This will delete&nbsp;
				{isSuccess ? (
					<strong>{data?.label}</strong>
				) : (
					<Skeleton variant="text" width={140} sx={sx} />
				)}
			</Typography>
			<Typography color="textDisabled" variant="caption">
				Visit <Link href="/">settings</Link> to delete any memories saved during
				this chat.
			</Typography>
		</DialogContentMui>
	);
}

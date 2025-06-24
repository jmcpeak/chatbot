"use client";

import useMutationArchiveOrDeleteChatById from "@/hooks/mutations/use-mutation-archive-or-delete-chat-by-id";
import useStore, { type Store } from "@/hooks/use-store";
import DeleteOutlined from "@mui/icons-material/DeleteOutlined";
import DriveFileRenameOutlineOutlined from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import Inventory2Outlined from "@mui/icons-material/Inventory2Outlined";
import IosShareOutlined from "@mui/icons-material/IosShareOutlined";
import MoreHoriz from "@mui/icons-material/MoreHoriz";
import CircularProgress from "@mui/material/CircularProgress";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useParams } from "next/navigation";
import { type MouseEvent, useCallback, useEffect } from "react";
import { useShallow } from "zustand/react/shallow";

type Props = {
	anchorEl: HTMLElement | null;
	id: string;
	onClickAction: (event: MouseEvent<HTMLElement>) => void;
	onCloseAction: () => void;
};

const selector = (state: Store) => ({
	setDialogDeleteChatId: state.setDialogDeleteChatId,
	setDialogDeleteChatOpen: state.setDialogDeleteChatOpen,
});
const sx = { color: "error.dark" };

export default function MoreMenuAndButton({
	anchorEl,
	id: idProp,
	onClickAction,
	onCloseAction,
}: Props) {
	const { setDialogDeleteChatOpen, setDialogDeleteChatId } = useStore(
		useShallow(selector),
	);
	const { mutate, isPending, isSuccess } = useMutationArchiveOrDeleteChatById();
	const params = useParams();
	const id = idProp ? idProp : (params?.id as string | "");

	const handleClickArchive = useCallback(() => {
		mutate(id);
	}, [id, mutate]);
	const handleClickDelete = useCallback(() => {
		onCloseAction();
		setDialogDeleteChatOpen(true);
		setDialogDeleteChatId(id);
	}, [id, onCloseAction, setDialogDeleteChatId, setDialogDeleteChatOpen]);

	useEffect(() => {
		if (isSuccess) {
			onCloseAction();
		}
	}, [isSuccess, onCloseAction]);

	return (
		<>
			<IconButton
				aria-controls="more-menu-appbar"
				aria-haspopup="true"
				aria-label="menu"
				color="inherit"
				onClick={onClickAction}
			>
				<MoreHoriz fontSize="small" />
			</IconButton>
			<Menu
				anchorEl={anchorEl}
				id="more-menu-appbar"
				onClick={onCloseAction}
				onClose={onCloseAction}
				open={Boolean(anchorEl)}
			>
				<MenuItem disabled={isPending} onClick={onCloseAction}>
					<ListItemIcon>
						<IosShareOutlined fontSize="small" />
					</ListItemIcon>
					Share
				</MenuItem>
				<MenuItem disabled={isPending} onClick={onCloseAction}>
					<ListItemIcon>
						<DriveFileRenameOutlineOutlined />
					</ListItemIcon>
					Rename
				</MenuItem>
				<Divider />
				<MenuItem disabled={isPending} onClick={handleClickArchive}>
					<ListItemIcon>
						{isPending ? (
							<CircularProgress color="inherit" size={24} />
						) : (
							<Inventory2Outlined fontSize="small" />
						)}
					</ListItemIcon>
					Archive
				</MenuItem>
				<MenuItem disabled={isPending} onClick={handleClickDelete} sx={sx}>
					<ListItemIcon>
						<DeleteOutlined sx={sx} />
					</ListItemIcon>
					Delete
				</MenuItem>
			</Menu>
		</>
	);
}

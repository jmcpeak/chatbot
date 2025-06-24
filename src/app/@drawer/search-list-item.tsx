"use client";

import ListItemDrawer from "@/app/@drawer/list-item-drawer";
import useStore, { type Store } from "@/hooks/use-store";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import { useCallback } from "react";

const shortcut = { mac: "⌘ K", windows: "Ctrl K" };
const selector = (store: Store) => store.setDialogSearchOpen;

export default function SearchListItem() {
	const setDialogSearchOpen = useStore(selector);

	const handleClick = useCallback(() => {
		setDialogSearchOpen(true);
	}, [setDialogSearchOpen]);

	return (
		<ListItemDrawer
			icon={<SearchOutlined fontSize="small" />}
			onClick={handleClick}
			shortcut={shortcut}
			text="Search chats"
		/>
	);
}

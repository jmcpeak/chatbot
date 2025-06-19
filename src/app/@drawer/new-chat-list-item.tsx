import ListItemDrawer from "@/app/@drawer/list-item-drawer";
import useStore from "@/hooks/use-store";
import MapsUgcOutlined from "@mui/icons-material/MapsUgcOutlined";
import { useQueryClient } from "@tanstack/react-query";
import { useCallback } from "react";

const shortcut = { mac: "⇧ ⌘ O", windows: "Ctrl Shift O" };

export default function NewChatListItem() {
	const queryClient = useQueryClient();
	const setStreamedResponse = useStore((store) => store.setStreamedResponse);

	const handleClick = useCallback(() => {
		queryClient.resetQueries({ queryKey: ["mutateStream"] }).finally(() => {
			setStreamedResponse([]);
		});
	}, [queryClient, setStreamedResponse]);

	return (
		<ListItemDrawer
			href="/"
			icon={<MapsUgcOutlined fontSize="small" />}
			onClick={handleClick}
			shortcut={shortcut}
			text="New chat"
		/>
	);
}

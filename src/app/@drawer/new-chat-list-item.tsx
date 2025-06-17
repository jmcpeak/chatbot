import ListItemDrawer from "@/app/@drawer/list-item-drawer";
import MapsUgcOutlined from "@mui/icons-material/MapsUgcOutlined";

const shortcutNew = { mac: "⇧ ⌘ O", windows: "Ctrl Shift O" };

export default function NewChatListItem() {
	return (
		<ListItemDrawer
			href="/"
			icon={<MapsUgcOutlined fontSize="small" />}
			shortcut={shortcutNew}
			text="New chat"
		/>
	);
}

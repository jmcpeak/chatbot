import type { ListItemProps } from "@mui/material/ListItem";

export const sxChatListItemBox = {
	display: "flex",
	justifyContent: "flex-end",
};
export const sxChatListItem = {
	borderRadius: 6,
	mb: 0.5,
	mt: 0.5,
	width: "fit-content",
};
export const sxChatListItemText = {
	ml: 0.5,
	mr: 0.5,
};
export type ChatListItemProps = ListItemProps & {
	primary: string;
	id: string;
};

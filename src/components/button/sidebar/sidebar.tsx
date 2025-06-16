"use client";

import { CLOSE, OPEN } from "@/components/button/sidebar/consts";
import useSidebar from "@/components/button/sidebar/use-sidebar";
import ViewSidebar from "@mui/icons-material/ViewSidebarOutlined";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

type Props = {
	sx: { cursor: string };
	title: typeof CLOSE | typeof OPEN;
};

const sxViewSidebar = { transform: "rotate(180deg)" };

export default function Sidebar({ sx, title }: Props) {
	const { drawerOpen, open, ...props } = useSidebar();

	return (drawerOpen && title === CLOSE) || (!drawerOpen && title === OPEN) ? (
		<Tooltip title={`${title} sidebar`} open={open}>
			<IconButton aria-label="toggle drawer" edge="start" sx={sx} {...props}>
				<ViewSidebar fontSize="small" sx={sxViewSidebar} />
			</IconButton>
		</Tooltip>
	) : null;
}

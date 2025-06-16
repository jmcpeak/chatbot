import SidebarButton, { OPEN } from "@/components/button/sidebar/sidebar";

const sx = { cursor: "e-resize" };

export default function OpenSidebar() {
	return <SidebarButton sx={sx} title={OPEN} />;
}

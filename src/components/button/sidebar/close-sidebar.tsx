import { CLOSE } from "@/components/button/sidebar/consts";
import SidebarButton from "@/components/button/sidebar/sidebar";

const sx = { cursor: "w-resize" };

export default function CloseSidebar() {
	return <SidebarButton sx={sx} title={CLOSE} />;
}

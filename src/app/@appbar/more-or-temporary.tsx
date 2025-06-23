"use client";

import TemporaryChat from "@/components/button/temporary-chat";
import MoreMenuAndButton from "@/components/more-menu-and-button";
import useMenu from "@/hooks/use-menu";
import { usePathname } from "next/navigation";

export default function MoreOrTemporary() {
	const [anchorEl, onClickAction, onCloseAction] = useMenu();
	const pathname = usePathname();

	return pathname !== "/" ? (
		<MoreMenuAndButton
			id=""
			anchorEl={anchorEl}
			onClickAction={onClickAction}
			onCloseAction={onCloseAction}
		/>
	) : (
		<TemporaryChat />
	);
}

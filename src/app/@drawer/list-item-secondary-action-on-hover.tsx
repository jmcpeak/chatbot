"use client";

import MoreMenuAndButton from "@/components/more-menu-and-button";
import useIsHovering from "@/hooks/use-is-hovering";
import useMenu from "@/hooks/use-menu";
import ListItem, { type ListItemProps } from "@mui/material/ListItem";
import { useCallback } from "react";

type Props = ListItemProps & {
	id: string;
	secondaryActionDisabled?: boolean;
};

export default function ListItemSecondaryActionOnHover({
	children,
	id,
	secondaryAction,
	secondaryActionDisabled,
	...props
}: Props) {
	const [anchorEl, handleClick, handleClose] = useMenu();
	const { hovering, onMouseEnter, onMouseLeave } = useIsHovering();

	const handleCloseAndUnhover = useCallback(() => {
		handleClose();
		onMouseLeave();
	}, [handleClose, onMouseLeave]);

	return (
		<ListItem
			{...props}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			secondaryAction={
				hovering &&
				!secondaryActionDisabled && (
					<MoreMenuAndButton
						anchorEl={anchorEl}
						id={id}
						onClickAction={handleClick}
						onCloseAction={handleCloseAndUnhover}
					/>
				)
			}
		>
			{children}
		</ListItem>
	);
}

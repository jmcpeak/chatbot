"use client";

import SecondaryAction from "@/app/@drawer/secondary-action";
import useIsHovered from "@/hooks/use-is-hovered";
import useMenu from "@/hooks/use-menu";
import ListItem, { type ListItemProps } from "@mui/material/ListItem";
import { useCallback } from "react";

type Props = ListItemProps & {
	secondaryActionDisabled?: boolean;
};

export default function ListItemSecondaryActionOnHover({
	children,
	secondaryAction,
	secondaryActionDisabled,
	...props
}: Props) {
	const [anchorEl, handleClick, handleClose] = useMenu();
	const { onMouseLeave, visible, ...propsHover } =
		useIsHovered<HTMLLIElement>();

	const handleCloseAndUnhover = useCallback(() => {
		handleClose();
		onMouseLeave();
	}, [handleClose, onMouseLeave]);

	return (
		<ListItem
			{...props}
			{...propsHover}
			onMouseLeave={onMouseLeave}
			secondaryAction={
				visible &&
				!secondaryActionDisabled && (
					<SecondaryAction
						anchorEl={anchorEl}
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

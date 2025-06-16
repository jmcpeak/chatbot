"use client";

import useStore from "@/hooks/use-store";
import AutoAwesomeOutlined from "@mui/icons-material/AutoAwesomeOutlined";
import ListItemIcon from "@mui/material/ListItemIcon";
import MenuItem from "@mui/material/MenuItem";

type Props = {
	onCloseAction: () => void;
};

export default function Personalize({ onCloseAction }: Props) {
	const setOpen = useStore((state) => state.setPersonalizeDialogOpen);

	const handleClick = () => {
		setOpen(true);
		onCloseAction();
	};

	return (
		<MenuItem onClick={handleClick}>
			<ListItemIcon>
				<AutoAwesomeOutlined fontSize="small" />
			</ListItemIcon>
			Personalize
		</MenuItem>
	);
}

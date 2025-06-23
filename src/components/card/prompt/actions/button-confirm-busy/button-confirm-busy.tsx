"use client";

import useButtonConfirmBusy from "@/components/card/prompt/actions/button-confirm-busy/use-button-confirm-busy";
import ArrowForwardOutlined from "@mui/icons-material/ArrowForwardOutlined";
import StopCircleOutlined from "@mui/icons-material/StopCircleOutlined";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";

export default function ButtonConfirmBusy() {
	const { isPending, sx, ...props } = useButtonConfirmBusy();

	return (
		<Collapse {...props} orientation="horizontal">
			<IconButton sx={sx}>
				{isPending ? <StopCircleOutlined /> : <ArrowForwardOutlined />}
			</IconButton>
		</Collapse>
	);
}

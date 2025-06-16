"use client";

import useInput from "@/app/example/use-input";
import useStore from "@/hooks/use-store";
import Add from "@mui/icons-material/Add";
import Pageview from "@mui/icons-material/Pageview";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useMemo } from "react";

export default function Page() {
	const [isPending, input, response, handleChange, handleStream] = useInput();
	const open = useStore((state) => state.drawerOpen);
	const sx = useMemo(
		() => ({
			ml: open ? 31 : 0,
			mt: "25dvh",
		}),
		[open],
	);

	return (
		<Box sx={sx}>
			<Card>
				<CardHeader>
					<Chip
						avatar={
							<Avatar alt="Natacha">
								<Pageview fontSize="small" />
							</Avatar>
						}
						label="Avatar"
						variant="outlined"
					/>
				</CardHeader>
				<CardActionArea>
					<TextField
						fullWidth
						placeholder="Ask something"
						onChange={handleChange}
						slotProps={{ inputLabel: { shrink: false } }}
						value={input}
						variant="standard"
					/>
				</CardActionArea>
				<CardContent sx={{ minWidth: 600 }}>
					<Button
						variant="contained"
						onClick={handleStream}
						disabled={isPending}
					>
						{isPending ? "Loading..." : "Submit"}
					</Button>
					<Paper elevation={3} sx={{ mt: 3, p: 2, minHeight: 100 }}>
						<Typography
							variant="body1"
							component="div"
							sx={{ whiteSpace: "pre-wrap" }}
						>
							{response}
						</Typography>
					</Paper>
				</CardContent>
				<CardActions>
					<IconButton>
						<Add fontSize="small" />
					</IconButton>
				</CardActions>
			</Card>
		</Box>
	);
}

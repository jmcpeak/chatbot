"use client";

import Info from "@mui/icons-material/InfoOutlined";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Image from "next/image";

const itemData = [
	{
		img: "photo-1551963831-b3b1ca40c98e",
		title: "Breakfast",
		author: "@bkristastucchio",
	},
	{
		img: "photo-1551782450-a2132b4ba21d",
		title: "Burger",
		author: "@rollelflex_graphy726",
	},
	{
		img: "photo-1522770179533-24471fcdba45",
		title: "Camera",
		author: "@helloimnik",
	},
	{
		img: "photo-1444418776041-9c7e33cc5a9c",
		title: "Coffee",
		author: "@nolanissac",
	},
	{
		img: "photo-1533827432537-70133748f5c8",
		title: "Hats",
		author: "@hjrc33",
	},
	{
		img: "photo-1558642452-9d2a7deb7f62",
		title: "Honey",
		author: "@arwinneil",
	},
	{
		img: "photo-1516802273409-68526ee1bdd6",
		title: "Basketball",
		author: "@tjdragotta",
	},
	{
		img: "photo-1518756131217-31eb79b20e8f",
		title: "Fern",
		author: "@katie_wasserman",
	},
	{
		img: "photo-1597645587822-e99fa5d45d25",
		title: "Mushrooms",
		author: "@silverdalex",
	},
	{
		img: "photo-1567306301408-9b74779a11af",
		title: "Tomato basil",
		author: "@shelleypauls",
	},
	{
		img: "photo-1471357674240-e1a485acb3e1",
		title: "Sea star",
		author: "@peterlaster",
	},
	{
		img: "photo-1589118949245-7d38baf380d6",
		title: "Bike",
		author: "@southside_customs",
	},
];

const imageLoader = ({ src = "", quality = 75 }) => {
	return `https://images.unsplash.com/${src}?w=${248}&q=${quality}`;
};

export default function TitlebarBelowImageList() {
	return (
		<Container maxWidth="md">
			<ImageList cols={3}>
				{itemData.map((item) => (
					<ImageListItem key={item.img}>
						<Image
							alt={item.title}
							height={164}
							loader={imageLoader}
							priority
							src={item.img}
							width={248}
						/>
					</ImageListItem>
				))}
			</ImageList>
		</Container>
	);
}

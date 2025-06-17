import { NextResponse } from "next/server";

type Author = {
	role: "user" | "assistant";
	name?: string;
	metadata?: { unknown?: string };
};
type Message = {
	id: string;
	author: Author;
};
type Mapping = {
	children: string[];
	id: string;
	message: Message;
	parent: string;
};
type Chat = {
	key: number;
	label: string;
	id: string;
	mapping?: Mapping[];
};

export type ChatHistory = {
	items: Chat[];
};

const items: Chat[] = [
	{
		key: 1,
		id: "68507c1d-ec94-800a-bbe1-8fcf5b626acf",
		label: "Understanding Tariffs",
		mapping: [
			{
				id: "78507c1d-ec94-800a-cce1-9fcf5b626acf",
				children: ["68507c1d-ec94-800a-bbe1-8fcf5b629bnf"],
				message: { id: "message1", author: { role: "assistant" } },
				parent: "85607c1d-ec94-800a-cce1-9fcf5b626bnm",
			},
		],
	},
	{
		key: 2,
		id: "68506ee6-a1a8-800a-a532-1d318380fcd7",
		label: "Smoot-Hawley Act",
	},
	{
		key: 3,
		id: "6850690b-3cb8-800a-83de-c9e95dbe22f1",
		label: "The Great Depression",
	},
];

export async function GET() {
	return NextResponse.json({ items });
}

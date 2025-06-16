import { NextResponse } from "next/server";

type Chat = {
	key: number;
	label: string;
};
export type ChatHistory = {
	items: Chat[];
};

const items: Chat[] = [
	{ key: 1, label: "Understanding Tariffs" },
	{ key: 2, label: "Smoot-Hawley Act;" },
	{ key: 3, label: "The Great Depression" },
];

export async function GET() {
	return NextResponse.json({ items });
}

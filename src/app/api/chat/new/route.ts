import { createChatItem, db } from "@/app/api/chat/consts";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
	await db.read();
	const data = await request.json();
	const item = createChatItem(data.label);

	await db.update((items) => items.unshift(item));

	return NextResponse.json({ item });
}

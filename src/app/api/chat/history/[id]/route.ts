import { db } from "@/app/api/chat/consts";
import { NextResponse } from "next/server";

export const fetchCache = "force-no-store";

type Params = { params: Promise<{ id: string }> };

export async function GET(_request: Request, { params }: Params) {
	await db.read();
	const items = db.data;

	const { id } = await params;
	const item = items.find((item) => item.id === id);

	return NextResponse.json(item);
}

export async function DELETE(_request: Request, { params }: Params) {
	await db.read();
	const items = db.data;

	const { id } = await params;
	const index = items.findIndex((item) => item.id === id);

	if (index !== -1) {
		await db.update((items) => items.splice(index, 1));
	}

	return NextResponse.json({ id: id });
}

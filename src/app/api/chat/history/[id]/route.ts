import {
	type ChatHistoryRouteProps,
	items,
} from "@/app/api/chat/history/consts";
import { NextResponse } from "next/server";

export async function GET(
	_request: Request,
	{ params }: ChatHistoryRouteProps,
) {
	const { id } = await params;
	const item = items.find((item) => item.id === id);

	return NextResponse.json(item);
}

export async function DELETE(
	_request: Request,
	{ params }: ChatHistoryRouteProps,
) {
	const { id } = await params;
	const index = items.findIndex((item) => item.id === id);

	if (index !== -1) {
		items.splice(index, 1);
	}

	return NextResponse.json({ id: id });
}

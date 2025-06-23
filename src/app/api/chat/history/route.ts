import { items } from "@/app/api/chat/history/consts";
import { NextResponse } from "next/server";

export async function GET() {
	return NextResponse.json({ items });
}

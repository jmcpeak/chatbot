import { db } from "@/app/api/chat/consts";
import { NextResponse } from "next/server";

export async function GET() {
	await db.read();

	return NextResponse.json(db.data);
}

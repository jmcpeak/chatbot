import { db } from "@/app/api/chat/consts";
import { NextResponse } from "next/server";

type Params = { params: Promise<{ id: string }> };

export async function GET(request: Request, { params }: Params) {
	await db.read();

	console.log(request);
	console.log(params);

	return NextResponse.json(db.data);
}

import { NextResponse } from "next/server";

export async function POST() {
	const encoder = new TextEncoder();
	const chunks = [
		"Hello there Jason, ",
		"this content ",
		"is being streamed ",
		"in right ",
		"now!",
	];

	const stream = new ReadableStream({
		async start(controller) {
			for (const chunk of chunks) {
				controller.enqueue(encoder.encode(chunk));
				await new Promise((r) => setTimeout(r, 500));
			}
			controller.close();
		},
	});

	return new NextResponse(stream, {
		headers: {
			"Content-Type": "text/plain; charset=utf-8",
			"Transfer-Encoding": "chunked",
		},
	});
}

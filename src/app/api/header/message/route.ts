import { NextResponse } from "next/server";

const messages = [
	"What's on the agenda today?",
	"How can I help you today?",
	"What would you like to work on?",
	"Ready to tackle something new?",
	"What can I do for you?",
	"Is there something you'd like to discuss?",
	"How can I assist you right now?",
	"What's on your mind?",
	"What brings you here today?",
	"Let's get started! What do you need?",
];

export async function GET() {
	const message = messages[Math.floor(Math.random() * messages.length)];

	return NextResponse.json({ message });
}

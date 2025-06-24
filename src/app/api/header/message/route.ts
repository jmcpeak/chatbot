import { NextResponse } from "next/server";

export type HeaderMessages = {
	message: string[];
};

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

const getMessageForCurrent5MinBlock = () => {
	const now = new Date();
	const minutesSinceMidnight = now.getHours() * 60 + now.getMinutes();
	const blockIndex = Math.floor(minutesSinceMidnight / 5);

	// Cycle through messages if there are fewer than 288
	return messages[blockIndex % messages.length];
};

export async function GET() {
	const message = getMessageForCurrent5MinBlock();

	return NextResponse.json({ message });
}

import { put } from "@vercel/blob";
import { type Adapter, Low } from "lowdb";

type Author = {
	role: "user" | "assistant";
	name?: string;
	metadata?: { unknown?: string };
};
type Message = {
	id: string;
	author: Author;
};
type Mapping = {
	children: string[];
	id: string;
	message: Message;
	parent: string;
};

export type ChatHistoryItem = {
	key: number;
	createdAt?: string;
	label: string;
	id: string;
	mapping?: Mapping[];
};

const getRandomISOStringBetween = (start: Date, end: Date): string => {
	const startTime = start.getTime();
	const endTime = end.getTime();
	const randomTime = startTime + Math.random() * (endTime - startTime);

	return new Date(randomTime).toISOString();
};
const randomISOStringWithinLastDays = (days = 10) => {
	return getRandomISOStringBetween(
		new Date(Date.now()),
		new Date(Date.now() - 1000 * 60 * 60 * 24 * days),
	);
};

export const createChatItem = (label = "New Chat"): ChatHistoryItem => ({
	label,
	key: Math.floor(Math.random() * 500000),
	id: crypto.randomUUID(),
	createdAt: randomISOStringWithinLastDays(1),
	mapping: [
		{
			id: crypto.randomUUID(),
			children: [crypto.randomUUID()],
			message: { id: "message1", author: { role: "assistant" } },
			parent: crypto.randomUUID(),
		},
	],
});

const defaultData: ChatHistoryItem[] = [
	createChatItem("Understanding Tariffs"),
	createChatItem("Smoot-Hawley Act"),
	createChatItem("The Great Depression"),
];

function createVercelBlobAdapter<T>(
	blobKey: string,
	defaultData: T,
): Adapter<T> {
	return {
		async read(): Promise<T> {
			try {
				const res = await fetch(
					`https://w64xsqhwcqpyluf7.public.blob.vercel-storage.com/${blobKey}`,
				);
				const text = await res.text();
				return JSON.parse(text) as T;
			} catch {
				return defaultData;
			}
		},
		async write(data: T): Promise<void> {
			await put(blobKey, JSON.stringify(data), {
				access: "public",
				allowOverwrite: true,
				contentType: "application/json",
			});
		},
	};
}

// Usage:
const adapter = createVercelBlobAdapter<ChatHistoryItem[]>(
	"db.json",
	defaultData,
);
export const db = new Low(adapter, defaultData);
await db.read();

import { NextResponse } from "next/server";

type Trait = {
	key: number;
	label: string;
};
export type Profile = {
	avatar: string;
	email: string;
	firstName: string;
	lastName: string;
	other: string;
	preferredName: string;
	responsibilities: string;
	traits: Trait[];
	userId: string;
};

const profile: Profile = {
	avatar: "/jason.png",
	email: "jason.mcpeak@cfainstitute.org",
	firstName: "Jason",
	lastName: "McPeak",
	other: "Interested in the CFA Program",
	preferredName: "Jason",
	responsibilities: "Senior Lead Front End Developer",
	traits: [
		{ key: 1, label: "Opinionated" },
		{ key: 2, label: "Direct" },
		{ key: 3, label: "Humble" },
	],
	userId: "12344",
};

export async function GET() {
	return NextResponse.json(profile);
}

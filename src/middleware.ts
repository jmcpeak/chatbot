import { type NextRequest, NextResponse } from "next/server";

const isProd = process.env.NODE_ENV === "production";
const generateNonce = (): string => {
	return Array.from(crypto.getRandomValues(new Uint8Array(16)))
		.map((b) => b.toString(16).padStart(2, "0"))
		.join("");
};
const generateContentSecurityPolicy = (nonce: string): string => {
	return `
  script-src 'self' ${isProd ? `nonce-${nonce}` : "'unsafe-inline'"} https://vercel.live;
  style-src 'self' ${isProd ? `nonce-${nonce}` : "'unsafe-inline'"} https://fonts.googleapis.com;
  default-src 'self';
  img-src 'self' https://images.unsplash.com;
  font-src 'self' https://fonts.gstatic.com;
  connect-src 'self' https://vercel.live;
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  upgrade-insecure-requests;`
		.replace(/\s{2,}/g, " ")
		.trim();
};

const securityHeaders = [
	{
		key: "X-Content-Type-Options",
		value: "nosniff",
	},
	{
		key: "Referrer-Policy",
		value: "strict-origin-when-cross-origin",
	},
	{
		key: "X-Frame-Options",
		value: "DENY",
	},
	{
		key: "Strict-Transport-Security",
		value: "max-age=63072000; includeSubDomains; preload",
	},
	{
		key: "Permissions-Policy",
		value: "camera=(), microphone=(), geolocation=()",
	},
];

export async function middleware(request: NextRequest) {
	const nonce = generateNonce();
	const csp = generateContentSecurityPolicy(nonce);

	const response = NextResponse.next();

	// static headers
	for (const { key, value } of securityHeaders) {
		response.headers.set(key, value);
	}

	// dynamic headers
	response.headers.set("Content-Security-Policy", csp);
	response.headers.set("x-csp-nonce", nonce);

	return response;
}

export const config = {
	matcher: [
		/*
		 * Match all request paths except for the ones starting with:
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - favicon.ico, sitemap.xml, robots.txt (metadata files)
		 * - api (API routes)
		 */
		"/((?!_next/static|_next/image|favicon.ico|opengraph-image.png|sitemap.xml|robots.txt|api|font-styles.tsx).*)",
	],
};

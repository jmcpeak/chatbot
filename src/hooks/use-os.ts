import { useEffect, useState } from "react";

type OS = "mac" | "windows" | "linux" | "android" | "ios" | "other";

export default function useOS() {
	const [os, setOS] = useState<OS>("other");

	useEffect(() => {
		const ua = navigator.userAgent.toLowerCase();

		if (ua.includes("macintosh") || ua.includes("mac os")) {
			setOS("mac");
		} else if (ua.includes("windows")) {
			setOS("windows");
		} else if (ua.includes("linux")) {
			setOS("linux");
		} else if (ua.includes("android")) {
			setOS("android");
		} else if (/iphone|ipad|ipod/.test(ua)) {
			setOS("ios");
		} else {
			setOS("other");
		}
	}, []);

	return os;
}

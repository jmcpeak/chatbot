module.exports = {
	preset: "ts-jest",
	testEnvironment: "jsdom",
	transform: {
		"^.+\\.(ts|tsx)$": ["ts-jest", { tsconfig: "tsconfig.jest.json" }],
	},
	moduleNameMapper: {
		"^.+\\.(css|scss|sass)$": "identity-obj-proxy",
		"^@/(.*)$": "<rootDir>/src/$1",
	},
	setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
	testPathIgnorePatterns: ["<rootDir>/.next/", "\\.spec\\."],
};

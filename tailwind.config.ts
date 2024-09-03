import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "#1E1E1E",
				foreground: "#FFFFFF",
				"lighter-primary": "#43CA9F",
				"darker-primary": "#359164",
				card: "#212227",
			},
			backgroundImage: {
				primary: "linear-gradient(180deg, #43CA9F 0%, #359164 100%)",
				silver: "linear-gradient(180deg, #EBEBEB 0%, #858585 100%)",
			},
		},
	},
	plugins: [],
};
export default config;

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { StarsCanvas } from "@/components/star-background";
import { Planet } from "@/components/planet";
import { Light } from "@/components/light";
import { Cursor } from "@/components/cursor";

const poppins = Poppins({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Thiago Dorville",
	description: "Software Engineer",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${poppins.className} bg-black text-foreground overflow-hidden flex flex-col`}
			>
				<Light />
				<StarsCanvas />
				<main className="px-8 flex items-center justify-center h-screen pb-20 sm:pb-[200px] z-40 overflow-hidden">
					{children}
				</main>
				<Planet />
			</body>
		</html>
	);
}

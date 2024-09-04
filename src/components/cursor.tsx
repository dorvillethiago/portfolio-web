"use client";

import React from "react";
import { motion } from "framer-motion";

export function Cursor() {
	const [mousePosition, setMousePosition] = React.useState({
		x: typeof window !== "undefined" ? window.innerWidth / 2 : 0,
		y: typeof window !== "undefined" ? window.innerHeight / 2 : 0,
	});

	React.useEffect(() => {
		const mouseMove = (e: MouseEvent) => {
			setMousePosition({
				x: e.clientX - 16,
				y: e.clientY - 16,
			});
		};

		window.addEventListener("mousemove", mouseMove);

		return () => {
			window.removeEventListener("mousemove", mouseMove);
		};
	});

	return (
		<motion.div
			initial={{
				opacity: 0,
			}}
			animate={{
				opacity: 1,
			}}
			transition={{
				delay: 1,
				duration: 0.5,
			}}
			className="hidden md:block"
		>
			<motion.div
				className="mix-blend-exclusion pointer-events-none bg-white h-8 w-8 rounded-full fixed inset-0 z-50"
				variants={{
					default: {
						x: mousePosition.x,
						y: mousePosition.y,
						transition: {
							duration: 0,
						},
						opacity: 1,
					},
				}}
				animate="default"
			/>
		</motion.div>
	);
}

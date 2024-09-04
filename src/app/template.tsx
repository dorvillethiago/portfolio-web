"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
	return (
		<motion.div
			initial={{ y: -50, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{
				type: "spring", // Change to spring for a natural effect
				stiffness: 80, // Adjust spring stiffness
				damping: 25, // Adjust spring damping
				duration: 0.7, // Slightly longer duration
				ease: "anticipate", // Use an easing function that feels smoother
			}}
		>
			{children}
		</motion.div>
	);
}

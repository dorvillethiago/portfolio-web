"use client";

import { motion } from "framer-motion";

export function Light() {
	return (
		<motion.div
			initial={{
				opacity: 0,
			}}
			animate={{
				opacity: 1,
			}}
			transition={{
				delay: 1.1,
				duration: 1.5,
			}}
			className="h-96 w-[80%] bg-lighter-primary absolute -top-40 left-1/2 -translate-x-1/2 blur-[300px] sm:blur-[400px] md:blur-[500px]"
		/>
	);
}

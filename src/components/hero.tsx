"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const name = "Thiago Dorville";

export function Hero() {
	return (
		<div className="flex flex-col items-center text-center">
			<motion.span
				initial={{
					opacity: 0,
					y: -10,
				}}
				animate={{
					opacity: 1,
					y: 0,
				}}
				transition={{
					delay: 1.1,
				}}
				className="flex font-light gap-3 text-2xl items-center"
			>
				<h2 className="bg-clip-text bg-silver text-transparent">
					Software Engineer
				</h2>{" "}
				<Sparkles className="opacity-80" strokeWidth={1} />
			</motion.span>
			<h1 className="font-semibold text-7xl leading-[6rem]">
				{name.split("").map((letter, index) => (
					<motion.span
						className="bg-clip-text bg-silver text-transparent cursor-default"
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						key={index}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{
							delay: index * 0.07,
							type: "spring",
							stiffness: 300,
							damping: 10,
						}}
					>
						{letter}
					</motion.span>
				))}
			</h1>
			<motion.h3
				initial={{
					opacity: 0,
					y: 10,
				}}
				animate={{
					opacity: 0.75,
					y: 0,
				}}
				transition={{
					delay: 1.3,
				}}
				className="font-light opacity-75 mt-4"
			>
				“I work so companies can have maintanable, scalable
				<br /> and reliable software.”
			</motion.h3>
			<motion.span
				initial={{
					opacity: 0,
					y: 10,
				}}
				animate={{
					opacity: 1,
					y: 0,
				}}
				transition={{
					delay: 1.4,
				}}
				className="flex gap-4 flex-wrap mt-16"
			>
				<button
					type="button"
					className="font-medium bg-primary border-lighter-primary border-[1px] flex items-center gap-2 py-3 px-6 rounded-xl hover:scale-110 active:scale-90 shadow-xl hover:shadow-lighter-primary/15 transition-all"
				>
					Explore <ArrowRight size={22} />
				</button>
				<Link
					href="/contact"
					className="bg-white/5 border-[1px] border-white/15 backdrop-blur-xl py-3 px-6 rounded-xl hover:scale-110 active:scale-90 transition-transform"
				>
					Contact
				</Link>
			</motion.span>
		</div>
	);
}

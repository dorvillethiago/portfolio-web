"use client";

import { Card } from "@/components/card";
import {
	SiGithub,
	SiLinkedin,
	SiWhatsapp,
} from "@icons-pack/react-simple-icons";
import { motion } from "framer-motion";
import Link from "next/link";

const ContactMethods = [
	{
		name: "GitHub",
		icon: <SiGithub size={44} />,
		href: "",
	},
	{
		name: "LinkedIn",
		icon: <SiLinkedin size={44} />,
		href: "",
	},
	{
		name: "WhatsApp",
		icon: <SiWhatsapp size={44} />,
		href: "",
	},
];

export default function Contact() {
	return (
		<div className="text-center flex flex-col items-center gap-8">
			<span className="flex flex-col gap-4">
				<h1 className="text-6xl font-semibold">Contact Me</h1>
				<p className="opacity-75">dorville.dev@gmail.com</p>
			</span>
			<ul className="flex gap-4">
				{ContactMethods.map((method) => (
					<motion.li key={method.name}>
						<Link target="_blank" href={method.href}>
							<Card className="p-5 hover:text-primary hover:scale-105 hover:rotate-6 hover:bg-darker-primary transition-all">
								{method.icon}
							</Card>
						</Link>
					</motion.li>
				))}
			</ul>
		</div>
	);
}

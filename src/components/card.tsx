import { cn } from "@/lib/cn";
import type { ComponentProps } from "react";

export function Card({ children, className, ...rest }: ComponentProps<"div">) {
	return (
		<div
			{...rest}
			className={cn(
				"p-4 rounded-xl border-[1px] border-white/15 bg-white/5 backdrop-blur-md",
				className,
			)}
		>
			{children}
		</div>
	);
}

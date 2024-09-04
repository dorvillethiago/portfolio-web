import { cn } from "@/lib/cn";
import Image from "next/image";
import Link from "next/link";
import type { ComponentProps } from "react";

export function Project({ className, ...rest }: ComponentProps<"div">) {
	return <div className={cn("flex w-80 flex-col", className)} {...rest} />;
}

export function ProjectPreview({
	className,
	children,
	href,
	src,
	...rest
}: ComponentProps<"a"> & {
	src: string;
}) {
	return (
		<div className="group relative overflow-hidden rounded-xl">
			{/* TODO: This should be a preview image of the project */}
			<Link
				target="_blank"
				href={href as string}
				className="bg-white/5"
				{...rest}
			>
				<Image
					src={src}
					height={160}
					width={320}
					alt="Project image"
					className="h-48 bg-center object-cover"
				/>
			</Link>
			{children}
		</div>
	);
}

export function ProjectDescription({
	className,
	...rest
}: ComponentProps<"span">) {
	return (
		<>
			<div className="pointer-events-none -translate-x-1/2 bg-black/75 -translate-y-1/2 absolute top-1/2 left-1/2 size-0 bg-midnight-purple transition-all group-hover:size-full" />

			<span
				className={cn(
					"pointer-events-none -translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 z-50 text-center text-base text-white opacity-0 transition-opacity delay-150 group-hover:opacity-100",
					className,
				)}
				{...rest}
			/>
		</>
	);
}

export function ProjectTitle({ className, ...rest }: ComponentProps<"h3">) {
	return (
		<h3
			className={cn("mt-3 font-semibold text-lg text-white", className)}
			{...rest}
		/>
	);
}

export function ProjectBrief({ className, ...rest }: ComponentProps<"p">) {
	return (
		<p className={cn("mt-2 text-sm text-soft-silver", className)} {...rest} />
	);
}

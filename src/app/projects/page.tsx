"use client";

import {
	Project,
	ProjectBrief,
	ProjectDescription,
	ProjectPreview,
	ProjectTitle,
} from "@/components/project";
import useEmblaCarousel from "embla-carousel-react";

export default function Projects() {
	const [ref] = useEmblaCarousel();

	return (
		<div className="w-screen flex justify-center px-4">
			<div className="overflow-hidden" ref={ref}>
				<ul className="flex">
					<li className="shrink-0">
						<Project>
							<ProjectPreview
								src="/liveness.png"
								href="https://liveness-premium.vercel.app/"
							>
								<ProjectDescription>
									Face detection and validation system with face-api.js using
									Next.js 14.
								</ProjectDescription>
							</ProjectPreview>

							<ProjectTitle>Liveness Premium</ProjectTitle>
							<ProjectBrief>
								Prove of live system that can validate faces in real time.
							</ProjectBrief>
						</Project>
					</li>
				</ul>
			</div>
		</div>
	);
}

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
								src="/gcn-solucoes.png"
								href="https://www.gcnsolucoes.com.br/"
							>
								<ProjectDescription>
									Tech company that provides software and hosting.
								</ProjectDescription>
							</ProjectPreview>

							<ProjectTitle>GCN Solutions</ProjectTitle>
							<ProjectBrief>
								Landing page made with Next.js, Tailwind and Framer Motion.
							</ProjectBrief>
						</Project>
					</li>

					<li className="shrink-0 ml-8">
						<Project>
							<ProjectPreview
								src="/gcn-hosting.png"
								href="https://www.gcnhosting.com.br/"
							>
								<ProjectDescription>
									Website for a hosting company made with React.js.
								</ProjectDescription>
							</ProjectPreview>

							<ProjectTitle>GCN Hosting</ProjectTitle>
							<ProjectBrief>
								Fluid and beautiful hosting company website that uses React.js
								and React Router.
							</ProjectBrief>
						</Project>
					</li>
				</ul>
			</div>
		</div>
	);
}

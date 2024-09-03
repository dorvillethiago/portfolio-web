"use client";

import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense } from "react";
import { motion } from "framer-motion";
import type { Mesh } from "three";
import { motions } from "@/motion";

function Geometry() {
	const ref = React.useRef<Mesh>(null);

	useFrame(() => {
		if (ref.current) {
			ref.current.rotation.x += 0.0015;
			ref.current.rotation.y += 0.0015;
		}
	});

	return (
		<mesh ref={ref}>
			<icosahedronGeometry args={[1, 2]} />
			<meshStandardMaterial wireframe wireframeLinewidth={2} color="#43CA9F" />
		</mesh>
	);
}

export function Planet() {
	return (
		<motion.div
			{...motions.appear}
			className="absolute h-[800px] w-full -bottom-[500px] left-1/2 -translate-x-1/2"
		>
			<Canvas>
				<Suspense fallback={null}>
					<directionalLight position={[1, 5, 5]} />
					<PerspectiveCamera makeDefault position={[0, 0, 2.5]} />
					<Geometry />
				</Suspense>
			</Canvas>
		</motion.div>
	);
}

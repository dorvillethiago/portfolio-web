"use client";

import React, { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { PointMaterial, Points } from "@react-three/drei";
import { motion } from "framer-motion";

// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";

export function StarBackground() {
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	const ref = React.useRef<any>();
	const [sphere] = React.useState(() =>
		random.inSphere(new Float32Array(2500), { radius: 1 }),
	);

	useFrame((_, delta) => {
		ref.current.rotation.x -= delta / 40;
		ref.current.rotation.y -= delta / 40;
	});

	return (
		<group rotation={[0, 0, Math.PI / 4]}>
			<Points ref={ref} positions={sphere} stride={3} frustumCulled>
				<PointMaterial
					transparent
					color="#FFFFFF"
					size={0.001}
					sizeAttenuation={true}
					dethWire={false}
				/>
			</Points>
		</group>
	);
}

export function StarsCanvas() {
	return (
		<motion.div
			initial={{
				opacity: 0,
			}}
			animate={{
				opacity: 1,
			}}
			transition={{
				duration: 0.5,
				delay: 0.5,
			}}
			className="w-full h-auto fixed inset-0"
		>
			<Canvas camera={{ position: [0, 0, 1] }}>
				<Suspense fallback={null}>
					<StarBackground />
				</Suspense>
			</Canvas>
		</motion.div>
	);
}

export const motions = {
	appear: {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		transition: {
			duration: 0.5,
			delay: 0.5,
		},
	},
	slideIn: {
		fromLeft: {
			initial: { x: -100, opacity: 0 },
			animate: {
				x: 0,
				opacity: 1,
				transition: { type: "spring", stiffness: 100 },
			},
		},
		fromRight: {
			initial: { x: 100, opacity: 0 },
			animate: {
				x: 0,
				opacity: 1,
				transition: { type: "spring", stiffness: 100 },
			},
		},
		fromTop: {
			initial: { y: -100, opacity: 0 },
			animate: {
				y: 0,
				opacity: 1,
				transition: { type: "spring", stiffness: 100 },
			},
		},
		fromBottom: {
			initial: { y: 100, opacity: 0 },
			animate: {
				y: 0,
				opacity: 1,
				transition: { type: "spring", stiffness: 100 },
			},
		},
	},
};

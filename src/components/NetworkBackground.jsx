import { useEffect, useRef } from "react";

const hexToRgba = (hex, alpha) => {
	const value = hex.replace("#", "");
	const r = parseInt(value.slice(0, 2), 16);
	const g = parseInt(value.slice(2, 4), 16);
	const b = parseInt(value.slice(4, 6), 16);
	return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export default function NetworkBackground({
	background = "#190e2a",
	network = "#7a1334",
	overlayClass = "bg-gradient-to-b from-black/10 via-black/15 to-black/25",
}) {
	const canvasRef = useRef(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) {
			return;
		}

		const ctx = canvas.getContext("2d");
		if (!ctx) {
			return;
		}

		const points = [];
		let width = 0;
		let height = 0;
		let rafId = 0;

		const createPoints = () => {
			points.length = 0;
			const count = Math.max(55, Math.floor((width * height) / 22000));

			for (let i = 0; i < count; i += 1) {
				points.push({
					x: Math.random() * width,
					y: Math.random() * height,
					vx: (Math.random() - 0.5) * 0.5,
					vy: (Math.random() - 0.5) * 0.5,
				});
			}
		};

		const resize = () => {
			const rect = canvas.getBoundingClientRect();
			const dpr = window.devicePixelRatio || 1;
			width = rect.width;
			height = rect.height;
			canvas.width = Math.floor(width * dpr);
			canvas.height = Math.floor(height * dpr);
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
			createPoints();
		};

		const drawFrame = () => {
			const maxDistance = 150;

			ctx.fillStyle = background;
			ctx.fillRect(0, 0, width, height);

			for (let i = 0; i < points.length; i += 1) {
				const p = points[i];
				p.x += p.vx;
				p.y += p.vy;

				if (p.x <= 0 || p.x >= width) {
					p.vx *= -1;
				}
				if (p.y <= 0 || p.y >= height) {
					p.vy *= -1;
				}
			}

			for (let i = 0; i < points.length; i += 1) {
				const p1 = points[i];

				ctx.beginPath();
				ctx.arc(p1.x, p1.y, 1.5, 0, Math.PI * 2);
				ctx.fillStyle = hexToRgba(network, 0.75);
				ctx.fill();

				for (let j = i + 1; j < points.length; j += 1) {
					const p2 = points[j];
					const dx = p1.x - p2.x;
					const dy = p1.y - p2.y;
					const distance = Math.hypot(dx, dy);

					if (distance < maxDistance) {
						const alpha = (1 - distance / maxDistance) * 0.45;
						ctx.beginPath();
						ctx.moveTo(p1.x, p1.y);
						ctx.lineTo(p2.x, p2.y);
						ctx.strokeStyle = hexToRgba(network, alpha);
						ctx.lineWidth = 1;
						ctx.stroke();
					}
				}
			}

			rafId = window.requestAnimationFrame(drawFrame);
		};

		resize();
		drawFrame();
		window.addEventListener("resize", resize);

		return () => {
			window.removeEventListener("resize", resize);
			window.cancelAnimationFrame(rafId);
		};
	}, [background, network]);

	return (
		<>
			<canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
			<div className={`absolute inset-0 ${overlayClass}`} />
		</>
	);
}
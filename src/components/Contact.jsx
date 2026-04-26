import NetworkBackground from "./NetworkBackground";

export default function Contact() {
	const links = [
		{ label: "Email", value: "shehanjay1921@gmail.com", href: "mailto:shehanjay1921@gmail.com" },
		{ label: "GitHub", value: "github.com/ShehanJay19", href: "https://github.com/ShehanJay19" },
		{ label: "LinkedIn", value: "linkedin.com/in/Shehan Jayasinghe", href: "https://linkedin.com/in/Shehan Jayasinghe" },
	];

	return (
		<section id="contact" className="relative py-24 px-6 text-white overflow-hidden">
			<div className="absolute inset-0 bg-gradient-to-b from-[#0c0614] via-[#0b0613] to-[#09040f]" />
			<NetworkBackground />
			<div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-12 gap-8 items-center">
				<div className="lg:col-span-5">
					<div className="inline-flex rounded-full border border-rose-200/30 bg-rose-300/10 px-4 py-1 text-xs uppercase tracking-[0.22em] text-rose-100/90">
						Contact
					</div>

					<h2 className="mt-5 text-3xl md:text-5xl font-bold leading-tight">
						Let&apos;s build something
						<span className="block bg-gradient-to-r from-rose-200 via-fuchsia-200 to-violet-200 bg-clip-text text-transparent">
							useful and beautiful
						</span>
					</h2>

					<p className="mt-5 text-base md:text-lg text-gray-200/90 max-w-xl">
						I&apos;m open to internships, collaborations, and opportunities where I can
						contribute to AI, web development, and product-focused engineering.
					</p>
				</div>

				<div className="lg:col-span-7 rounded-3xl border border-white/15 bg-white/10 backdrop-blur-md p-6 md:p-8 shadow-2xl shadow-black/20">
					<div className="grid gap-4">
						{links.map((link) => (
							<a
								key={link.label}
								href={link.href}
								className="flex items-center justify-between rounded-2xl border border-white/15 bg-black/15 px-4 py-4 transition hover:bg-white/10"
							>
								<div>
									<p className="text-xs uppercase tracking-[0.2em] text-rose-100/70">{link.label}</p>
									<p className="mt-1 text-sm md:text-base text-white">{link.value}</p>
								</div>
								<span className="text-rose-100/75">↗</span>
							</a>
						))}
					</div>

					<div className="mt-6 rounded-2xl border border-rose-200/25 bg-gradient-to-br from-rose-300/15 to-fuchsia-300/10 p-5">
						<p className="text-sm md:text-base text-rose-50/95">
							Prefer a faster response? Email is the best place to reach me.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

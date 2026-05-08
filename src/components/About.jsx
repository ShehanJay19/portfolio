import heroImage from "../assets/hero.png";
import NetworkBackground from "./NetworkBackground";

export default function About() {
	const highlights = [
		"AI/ML development with Python and TensorFlow",
		"Modern frontend experiences with React and Tailwind",
		"Backend systems and APIs with Laravel and PHP",
		"Structured collaboration using Jira and Git",
	];

	return (
		<section id="about" className="relative py-16 md:py-20 px-6 text-white overflow-hidden">
			<div className="absolute inset-0 bg-gradient-to-b from-[#190e2a] via-[#140b22] to-[#0f081a]" />
			<NetworkBackground />
			<div className="pointer-events-none absolute -top-24 left-[-4rem] h-56 w-56 rounded-full bg-fuchsia-400/10 blur-3xl" />
			<div className="pointer-events-none absolute -bottom-24 right-[-3rem] h-56 w-56 rounded-full bg-rose-500/10 blur-3xl" />
			<div className="relative z-10 max-w-6xl mx-auto grid gap-8 lg:grid-cols-12 items-center">
				<div className="lg:col-span-7">
					<div className="inline-flex rounded-full border border-rose-200/30 bg-rose-300/10 px-4 py-1 text-xs uppercase tracking-[0.22em] text-rose-100/90">
						About Me
					</div>

					<h2 className="mt-4 text-3xl md:text-4xl font-bold leading-tight max-w-xl">
						Building products that
						<span className="block bg-gradient-to-r from-rose-200 via-fuchsia-200 to-violet-200 bg-clip-text text-transparent">
							blend intelligence and design
						</span>
					</h2>

					<p className="mt-4 text-sm md:text-base text-gray-200/90 max-w-xl leading-7">
						I am a Computer Science student focused on creating practical software that
						solves real problems. My work combines machine learning, full stack development,
						and thoughtful user experience to build polished digital tools.
					</p>

					<div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl">
						<div className="rounded-2xl border border-white/15 bg-white/8 px-4 py-3 backdrop-blur-sm">
							<p className="text-lg font-semibold text-white">AI + Web</p>
							<p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-rose-100/70">Primary Focus</p>
						</div>
						<div className="rounded-2xl border border-white/15 bg-white/8 px-4 py-3 backdrop-blur-sm">
							<p className="text-lg font-semibold text-white">13+</p>
							<p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-rose-100/70">Core Skills</p>
						</div>
						<div className="rounded-2xl border border-white/15 bg-white/8 px-4 py-3 backdrop-blur-sm">
							<p className="text-lg font-semibold text-white">4</p>
							<p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-rose-100/70">Skill Areas</p>
						</div>
					</div>

					<div className="mt-6 rounded-3xl border border-white/15 bg-white/10 backdrop-blur-md p-5 md:p-6 shadow-2xl shadow-black/20 max-w-2xl">
						<div className="grid sm:grid-cols-2 gap-3">
							{highlights.map((item) => (
								<div key={item} className="rounded-2xl border border-white/15 bg-black/15 px-4 py-3">
									<p className="text-xs md:text-sm text-rose-100/90 leading-6">{item}</p>
								</div>
							))}
						</div>

						<div className="mt-4 rounded-2xl border border-rose-200/25 bg-gradient-to-br from-rose-300/15 to-fuchsia-300/10 p-4">
							<p className="text-sm text-rose-50/95 leading-7">
								I enjoy turning ideas into clean, modern interfaces and dependable systems,
								from concept through delivery.
							</p>
						</div>
					</div>
				</div>

				<div className="lg:col-span-5">
					<div className="relative mx-auto w-full max-w-[23rem] sm:max-w-[26rem] lg:max-w-[24rem]">
						<div className="relative overflow-hidden rounded-[1.8rem] border border-white/15 bg-white/10 p-2.5 shadow-2xl shadow-black/30">
							<div className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem]">
								<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
								<img
									src={heroImage}
									alt="Shehan Jayasighe portrait"
									className="h-full w-full object-cover object-center"
								/>
								<div className="absolute bottom-3 left-3 right-3 rounded-2xl border border-white/15 bg-black/25 px-3 py-2.5 backdrop-blur-md">
									<p className="text-[11px] uppercase tracking-[0.18em] text-rose-100/80">AI/ML Engineer</p>
									<p className="mt-1 text-xs text-white/95">Full Stack Developer | Portfolio</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

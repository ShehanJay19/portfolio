import NetworkBackground from "./NetworkBackground";

export default function Projects() {
	const projects = [
		{
			title: "AI Study Assistant",
			category: "Machine Learning",
			description:
				"An intelligent assistant concept for summarizing study material and supporting revision workflows.",
			tags: ["Python", "TensorFlow", "NLP"],
		},
		{
			title: "Smart Portfolio Dashboard",
			category: "Frontend",
			description:
				"A responsive analytics-style dashboard idea for tracking personal progress and presenting achievements.",
			tags: ["React", "Tailwind", "UI Design"],
		},
		{
			title: "REST API Service",
			category: "Backend",
			description:
				"A scalable API foundation for powering modern web applications with clean endpoints and structure.",
			tags: ["Laravel", "PHP", "REST APIs"],
		},
	];

	return (
		<section id="projects" className="relative py-24 px-6 text-white overflow-hidden">
			<div className="absolute inset-0 bg-gradient-to-b from-[#140b22] via-[#10081b] to-[#0c0614]" />
			<NetworkBackground />
			<div className="relative z-10 max-w-6xl mx-auto">
				<div className="inline-flex rounded-full border border-rose-200/30 bg-rose-300/10 px-4 py-1 text-xs uppercase tracking-[0.22em] text-rose-100/90">
					Selected Work
				</div>

				<h2 className="mt-5 text-3xl md:text-5xl font-bold leading-tight">
					Projects with a
					<span className="block bg-gradient-to-r from-rose-200 via-fuchsia-200 to-violet-200 bg-clip-text text-transparent">
						practical, polished edge
					</span>
				</h2>

				<p className="mt-4 max-w-2xl text-gray-200/90 text-base md:text-lg">
					A snapshot of the kinds of products I like building: intelligent, modern,
					and structured around real user needs.
				</p>

				<div className="mt-12 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
					{projects.map((project) => (
						<article
							key={project.title}
							className="rounded-3xl border border-white/15 bg-white/10 backdrop-blur-md p-6 shadow-xl transition hover:-translate-y-1 hover:bg-white/15"
						>
							<p className="text-xs uppercase tracking-[0.2em] text-rose-100/70">
								{project.category}
							</p>
							<h3 className="mt-3 text-2xl font-semibold text-white">{project.title}</h3>
							<p className="mt-3 text-sm leading-6 text-rose-50/90">{project.description}</p>

							<div className="mt-5 flex flex-wrap gap-2">
								{project.tags.map((tag) => (
									<span
										key={tag}
										className="rounded-full border border-white/20 bg-black/20 px-3 py-1 text-xs text-white/90"
									>
										{tag}
									</span>
								))}
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}

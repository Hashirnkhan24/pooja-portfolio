"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Brain, Star, Globe, Shield } from "lucide-react";

export default function Skills() {
	const containerRef = useRef<HTMLDivElement>(null);

	const hrCoreSkills = [
		"Recruitment",
		"Employee Engagement",
		"Learning & Development",
		"Retail Operations",
		"Team Coordination",
		"Strategic Alignment",
	];

	const softSkills = [
		{ name: "Strong Communication", desc: "Clear verbal/written alignment" },
		{ name: "Problem Solving", desc: "Critical and analytical solutions" },
		{ name: "Adaptability", desc: "Thriving in change and transition" },
		{ name: "Empathy", desc: "Understanding people's perspectives" },
	];

	const techSkills = [
		{ name: "MS Office & Excel", level: "90%" },
		{ name: "Data Analytics", level: "85%" },
		{ name: "Digital Marketing", level: "80%" },
	];

	const languages = [
		{ name: "English", level: "Professional" },
		{ name: "Hindi", level: "Native / Bilingual" },
		{ name: "Kutchi", level: "Spoken / Native" },
	];

	// Draggable floating bubbles skills list
	const bubbles = [
		{ name: "LXP", color: "bg-coral-400" },
		{ name: "Empathy", color: "bg-amber-400" },
		{ name: "Excel", color: "bg-emerald-400" },
		{ name: "SQL", color: "bg-blue-400" },
		{ name: "L&D", color: "bg-purple-400" },
		{ name: "Forensics", color: "bg-rose-400" },
		{ name: "Analytics", color: "bg-cyan-400" },
		{ name: "Recruitment", color: "bg-pink-400" },
	];

	return (
		<section
			id="skills"
			className="py-16 md:py-24 px-4 sm:px-6 bg-black/[0.01] dark:bg-white/[0.01] transition-colors duration-500"
		>
			<div className="max-w-6xl mx-auto">
				<div className="text-center mb-16">
					<h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight mb-2">
						Skills & Competencies 🧠
					</h2>
					<div className="w-16 h-1 bg-accent mx-auto rounded-full" />
					<p className="text-sm text-text-muted mt-3 max-w-md mx-auto text-center">
						A diverse toolkit combining analytical forensic thinking with core
						HR practices.
					</p>
				</div>
				{/* Bento Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{/* Card 1: HR Core Skills */}
					<div className="glass p-5 sm:p-6 rounded-3xl border border-black/5 dark:border-white/5 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300">
						<div>
							<div className="flex items-center gap-2 mb-4">
								<div className="p-2 rounded-xl bg-accent-soft text-accent">
									<Brain size={18} />
								</div>
								<h3 className="font-display font-bold text-lg">
									HR Core Operations
								</h3>
							</div>
							<p className="text-xs text-text-muted mb-4 leading-relaxed">
								Applying structural methodologies to drive engagement, manage
								learning pathways, and coordinate team dynamics.
							</p>
							<div className="flex flex-wrap gap-2">
								{hrCoreSkills.map((skill) => (
									<span
										key={skill}
										className="bg-accent-soft text-accent text-xs font-semibold px-3 py-1.5 rounded-xl border border-accent/5"
									>
										{skill}
									</span>
								))}
							</div>
						</div>
					</div>
					{/* Card 2: Technical & IT */}
					<div className="glass p-5 sm:p-6 rounded-3xl border border-black/5 dark:border-white/5 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300">
						<div>
							<div className="flex items-center gap-2 mb-4">
								<div className="p-2 rounded-xl bg-accent-soft text-accent">
									<Shield size={18} />
								</div>
								<h3 className="font-display font-bold text-lg">
									Technical & Analytics
								</h3>
							</div>
							<p className="text-xs text-text-muted mb-4 leading-relaxed">
								Equipped with certification credentials for data-driven
								analytics and digital campaigns.
							</p>
							<div className="space-y-4">
								{techSkills.map((tech) => (
									<div key={tech.name} className="w-full">
										<div className="flex justify-between text-xs font-bold mb-1">
											<span>{tech.name}</span>
											<span className="text-accent">{tech.level}</span>
										</div>
										<div className="w-full h-1.5 bg-black/5 dark:bg-white/5 rounded-full overflow-hidden">
											<div
												className="h-full bg-accent rounded-full"
												style={{ width: tech.level }}
											/>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
					{/* Card 3: Languages */}
					<div className="glass p-5 sm:p-6 rounded-3xl border border-black/5 dark:border-white/5 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300">
						<div>
							<div className="flex items-center gap-2 mb-4">
								<div className="p-2 rounded-xl bg-accent-soft text-accent">
									<Globe size={18} />
								</div>
								<h3 className="font-display font-bold text-lg">
									Languages Spoken
								</h3>
							</div>
							<p className="text-xs text-text-muted mb-4 leading-relaxed">
								Enabling clear engagement across diverse team cultures and
								regions.
							</p>
							<div className="space-y-3">
								{languages.map((lang) => (
									<div
										key={lang.name}
										className="flex justify-between items-center bg-black/5 dark:bg-white/5 p-3 rounded-2xl text-xs font-semibold"
									>
										<span>{lang.name}</span>
										<span className="text-accent bg-accent-soft px-2.5 py-0.5 rounded-full text-[10px]">
											{lang.level}
										</span>
									</div>
								))}
							</div>
						</div>
					</div>
					{/* Card 4: Soft Skills (Spans 2 columns on medium/large screens) */}
					<div className="glass p-5 sm:p-6 rounded-3xl border border-black/5 dark:border-white/5 md:col-span-2 shadow-sm hover:shadow-md transition-all duration-300">
						<div className="flex items-center gap-2 mb-4">
							<div className="p-2 rounded-xl bg-accent-soft text-accent">
								<Star size={18} />
							</div>
							<h3 className="font-display font-bold text-lg">
								Human & Interpersonal Qualities
							</h3>
						</div>
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
							{softSkills.map((soft) => (
								<div
									key={soft.name}
									className="bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 p-4 rounded-2xl"
								>
									<h4 className="font-display font-bold text-sm text-accent mb-1">
										{soft.name}
									</h4>
									<p className="text-xs text-text-muted leading-relaxed">
										{soft.desc}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>{" "}
			</div>
		</section>
	);
}

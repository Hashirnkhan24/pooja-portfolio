"use client";

import { useState, useRef, MouseEvent } from "react";
import { Sparkles, BarChart, BookOpen, ExternalLink } from "lucide-react";

interface ProjectItem {
  id: number;
  title: string;
  category: "Competition" | "EdTech / ML" | "Field Project" | "Research";
  desc: string;
  badge?: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  bullets: string[];
}

export default function Projects() {
  const projects: ProjectItem[] = [
    {
      id: 1,
      title: "HROpSys Kiosk Competition",
      category: "Competition",
      badge: "Runner-Up 🏆",
      icon: Sparkles,
      desc: "Designed and engineered an innovative kiosk concept mapping circular economy logistics to organizational development.",
      bullets: [
        "Runner-up award in the institute-level HROpSys competition.",
        "Built operational workflows demonstrating cost offsets and trash-to-value circularity.",
        "Presented model demonstrating positive impact on localized employee engagement.",
      ],
    },
    {
      id: 2,
      title: "Personalized & Career-Aligned Learning Paths using ML",
      category: "EdTech / ML",
      icon: BarChart,
      desc: "Co-developed an EdTech framework focusing on machine learning recommendations to align academic learning with job markets.",
      bullets: [
        "Conducted case studies mapping educational modules to real-world skill competencies.",
        "Proposed recommendation architecture mapping skills gaps to targeted content.",
        "Delivered a detailed academic presentation and simulation plan.",
      ],
    },
    {
      id: 3,
      title: "Career Intelligence using ML to Align Learning Paths",
      category: "EdTech / ML",
      icon: BarChart,
      desc: "Deep-dive case study analyzing how automated skill mapping optimizes talent readiness in corporate onboarding.",
      bullets: [
        "Analyzed database mapping techniques matching industry profiles with skill portfolios.",
        "Focused on designing personalized learning pathways for rapid role alignment.",
        "Presented conceptual L&D model at institute seminars.",
      ],
    },
    {
      id: 4,
      title: "Field-Based Marketing Study on Papaya Restaurant",
      category: "Field Project",
      icon: ExternalLink,
      desc: "An on-ground, interactive study examining brand marketing, retail sales dynamics, and guest relations of the Papaya Asian cuisine chain.",
      bullets: [
        "Conducted structured on-ground customer interviews and observational mapping.",
        "Identified key operational points impacting guest satisfaction and retention.",
        "Formulated tactical recommendations for retail engagement campaigns.",
      ],
    },
    {
      id: 5,
      title: "Behavioural Dynamics & Weather Adaptations",
      category: "Research",
      icon: BookOpen,
      desc: "A scientific research paper exploring how weather changes impact behavioral adaptations and team cognitive shifts.",
      bullets: [
        "Compiled data points mapping behavioral trends and mood variables against weather cycles.",
        "Synthesized research regarding ambient environments and productivity outputs.",
        "Published findings in academic reports.",
      ],
    },
  ];

  return (
    <section id="projects" className="py-16 md:py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight mb-2">
          Projects & Achievements 🏆
        </h2>
        <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
        <p className="text-sm text-text-muted mt-3 max-w-md mx-auto text-center">
          Academic contributions, research studies, and award-winning proposals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((proj) => (
          <TiltCard key={proj.id} project={proj} />
        ))}
      </div>
    </section>
  );
}

// 3D Tilt Card Sub-component
function TiltCard({ project }: { project: ProjectItem }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const box = card.getBoundingClientRect();
    
    // Calculate mouse position relative to card center
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;
    
    // Scale rotation to max 8 degrees
    const rotateX = -(y / (box.height / 2)) * 8;
    const rotateY = (x / (box.width / 2)) * 8;

    setCoords({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setCoords({ rotateX: 0, rotateY: 0 });
  };

  const Icon = project.icon;
  const isCompetition = project.category === "Competition";

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${coords.rotateX}deg) rotateY(${coords.rotateY}deg) scale3d(${coords.rotateX !== 0 ? 1.02 : 1}, ${coords.rotateX !== 0 ? 1.02 : 1}, 1)`,
        transition: coords.rotateX === 0 ? "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)" : "none",
      }}
      className={`rounded-3xl p-5 sm:p-6 md:p-8 flex flex-col justify-between h-full relative overflow-hidden select-none ${
        isCompetition
          ? "bg-gradient-to-tr from-accent/10 via-accent/5 to-transparent border-2 border-accent/60 shadow-md shadow-accent/5"
          : "glass border border-black/5 dark:border-white/5 shadow-sm"
      }`}
    >
      {/* Top Details */}
      <div>
        {/* Category Header */}
        <div className="flex justify-between items-center mb-4">
          <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider bg-black/5 dark:bg-white/5 px-2.5 py-1 rounded-full">
            {project.category}
          </span>
          {project.badge && (
            <span className="flex items-center gap-1 text-[10px] font-extrabold text-accent bg-accent-soft px-3 py-1 rounded-full border border-accent/10 uppercase tracking-widest animate-pulse-slow">
              {project.badge}
            </span>
          )}
        </div>

        {/* Icon & Title */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-accent-soft flex items-center justify-center text-accent shrink-0">
            <Icon size={20} />
          </div>
          <h3 className="font-display font-bold text-lg md:text-xl leading-snug group-hover:text-accent transition-colors">
            {project.title}
          </h3>
        </div>

        <p className="text-xs text-text-muted mb-6 leading-relaxed">
          {project.desc}
        </p>

        {/* Bullets List */}
        <ul className="space-y-2.5 text-xs text-text-muted mb-6">
          {project.bullets.map((bullet, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="text-accent mt-1 shrink-0">•</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, Award, ChevronDown, ChevronUp } from "lucide-react";

interface ExpItem {
  id: number;
  company: string;
  role: string;
  period: string;
  location: string;
  details: string[];
  learnings: string[];
  skills: string[];
  isGold: boolean;
  meta?: string;
}

export default function Experience() {
  const [expandedId, setExpandedId] = useState<number | null>(1); // Default expand first item (Tata Motors)

  const experiences: ExpItem[] = [
    {
      id: 1,
      company: "Tata Motors Limited",
      role: "HR Intern (Off-Summer / Live Project)",
      period: "May 2026 – July 2026 (Ongoing)",
      location: "Mumbai / Hybrid",
      meta: "Project Mentor: Scherezade Bahmani",
      details: [
        "Project Title: 'Driving Learner Adoption and Engagement for LXP' (Learning Experience Platform).",
        "Assisting in formulating adoption strategies for digital learning pathways across employee cohorts.",
        "Analysing learning metrics and database trends to design custom learner journeys.",
        "Developing campaigns to boost digital engagement and training completion rates.",
      ],
      learnings: [
        "In-depth understanding of Learning Experience Platforms (LXP) and modern L&D operations.",
        "Ability to translate raw learner behavior metrics into actionable engagement strategies.",
        "Corporate project management, communication, and stakeholder mapping.",
      ],
      skills: ["Learning & Development (L&D)", "Employee Engagement", "Data Tracking", "Stakeholder Alignment"],
      isGold: true,
    },
    {
      id: 2,
      company: "Shoppers Stop",
      role: "On-Job Training / Live Project (02 Days)",
      period: "Off-Summer 2025",
      location: "Mumbai",
      details: [
        "Completed concentrated On-Job Training with exposure to retail operations.",
        "Observed frontline sales processes, customer engagement strategies, and billing systems.",
        "Participated in daily briefings to understand team alignment and store management dynamics.",
      ],
      learnings: [
        "Understanding how customer-facing roles impact brand value and sales metrics.",
        "Insights into floor management, shifts coordination, and retail team structures.",
        "Firsthand observation of operational workflows in one of India's largest retail networks.",
      ],
      skills: ["Retail Operations", "Team Dynamics", "Sales Workflow", "Customer Service"],
      isGold: false,
    },
    {
      id: 3,
      company: "Coaching Classes",
      role: "Educator & Tutor",
      period: "Sept 2025 – Present",
      location: "Kalyan, Thane",
      details: [
        "Teaching and guiding high school students in science and academic curricula.",
        "Designing structured lesson plans, interactive tests, and tracking performance progress.",
        "Conducting doubt-solving sessions and parent-teacher alignment meetings.",
      ],
      learnings: [
        "Sharpened planning and execution skills by managing student curricula.",
        "Refined presentation and communication skills to convey complex concepts simply.",
        "Developed high patience, empathy, and classroom group management techniques.",
      ],
      skills: ["Presentation", "Public Speaking", "Planning", "Mentorship & Coaching"],
      isGold: false,
    },
  ];

  return (
    <section id="experience" className="py-16 md:py-24 px-4 sm:px-6 bg-black/[0.02] dark:bg-white/[0.02] transition-colors duration-500">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight mb-2">
            My Journey So Far 💼
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
          <p className="text-sm text-text-muted mt-3 max-w-md mx-auto text-center">
            Combining academic insights with industry exposures to build a strong foundation in HR.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-accent/25 ml-4 md:ml-6 space-y-12">
          {experiences.map((exp) => {
            const isExpanded = expandedId === exp.id;

            return (
              <div key={exp.id} className="relative pl-8 md:pl-10 group">
                {/* Timeline node marker */}
                <div
                  className={`absolute left-0 -translate-x-[50%] top-6 w-5 h-5 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                    exp.isGold
                      ? "bg-amber-400 border-amber-500 scale-125 shadow-md shadow-amber-500/20"
                      : "bg-bg-base border-accent group-hover:bg-accent"
                  }`}
                >
                  {exp.isGold && <Award size={10} className="text-white animate-pulse" />}
                </div>

                {/* Card */}
                <motion.div
                  layout
                  transition={{ duration: 0.3 }}
                  className={`rounded-3xl p-5 sm:p-6 md:p-8 transition-all duration-300 relative overflow-hidden ${
                    exp.isGold
                      ? "bg-gradient-to-br from-amber-500/5 via-amber-600/[0.02] to-transparent border-2 border-amber-400/60 dark:border-amber-400/30 shadow-md shadow-amber-400/5"
                      : "glass border border-black/5 dark:border-white/5 shadow-sm hover:shadow-md"
                  }`}
                >
                  {/* Gold Badge indicator */}
                  {exp.isGold && (
                    <div className="absolute top-0 right-0 bg-gradient-to-l from-amber-500 to-amber-400 text-white text-[10px] font-bold px-4 py-1.5 rounded-bl-2xl uppercase tracking-wider flex items-center gap-1">
                      <Award size={12} />
                      <span>Key Achievement</span>
                    </div>
                  )}

                  {/* Header info */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                    <div>
                      <h3 className="font-display font-extrabold text-xl md:text-2xl group-hover:text-accent transition-colors">
                        {exp.company}
                      </h3>
                      <p className="text-sm font-semibold text-accent mt-0.5">
                        {exp.role}
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row md:flex-col sm:items-center md:items-end gap-2 text-xs text-text-muted mt-2 md:mt-0 font-medium">
                      <span className="flex items-center gap-1.5 bg-black/5 dark:bg-white/5 px-2.5 py-1 rounded-full">
                        <Calendar size={12} className="text-accent" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5 bg-black/5 dark:bg-white/5 px-2.5 py-1 rounded-full">
                        <MapPin size={12} className="text-accent" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {exp.meta && (
                    <p className="text-sm font-medium text-amber-600 dark:text-amber-400/90 mb-4 bg-amber-500/5 inline-block px-3 py-1 rounded-lg">
                      {exp.meta}
                    </p>
                  )}

                  {/* Responsibilities list */}
                  <ul className="space-y-2.5 text-sm text-text-muted mb-6">
                    {exp.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-accent mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-accent" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Toggle button for details */}
                  <button
                    onClick={() => setExpandedId(isExpanded ? null : exp.id)}
                    className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent hover:text-accent-hover transition-colors cursor-pointer"
                  >
                    <span>{isExpanded ? "Collapse Details" : "View Key Learnings & Skills"}</span>
                    {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>

                  {/* Expanded Section (Key Learnings & Skills) */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-black/5 dark:border-white/5 mt-6 pt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                          {/* Learnings */}
                          <div>
                            <h4 className="font-display font-bold text-sm text-accent mb-3 uppercase tracking-wider">
                              Key Learnings
                            </h4>
                            <ul className="space-y-2 text-xs text-text-muted">
                              {exp.learnings.map((learning, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <span className="text-amber-500 mt-1 shrink-0">✓</span>
                                  <span>{learning}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Skills Gained */}
                          <div>
                            <h4 className="font-display font-bold text-sm text-accent mb-3 uppercase tracking-wider">
                              Skills Practiced
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {exp.skills.map((skill, idx) => (
                                <span
                                  key={idx}
                                  className="bg-accent-soft text-accent text-xs font-semibold px-3 py-1.5 rounded-xl border border-accent/5"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

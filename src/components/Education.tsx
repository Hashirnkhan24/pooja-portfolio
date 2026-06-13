"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Award, BookOpen, GraduationCap, X, CheckCircle } from "lucide-react";

interface EduItem {
  year: string;
  course: string;
  institute: string;
  board: string;
  score: string;
  progress: number; // For progress bar
}

interface CertItem {
  title: string;
  issuer: string;
  date: string;
  id: string;
  skills: string[];
}

export default function Education() {
  const [activeCert, setActiveCert] = useState<CertItem | null>(null);

  const education: EduItem[] = [
    {
      year: "2025 – 2027",
      course: "MMS (Human Resources)",
      institute: "Chetana's R.K. Institute of Management & Research",
      board: "Mumbai University",
      score: "Ongoing (Graduation in 2027)",
      progress: 50,
    },
    {
      year: "2021 – 2024",
      course: "BSc (Forensic Science)",
      institute: "Institute of Forensic Science",
      board: "Mumbai University",
      score: "9.12 CGPA",
      progress: 100,
    },
    {
      year: "2021",
      course: "HSC (Higher Secondary Certificate)",
      institute: "B.K. Birla College of Arts, Science and Commerce",
      board: "Maharashtra State Board",
      score: "95.83%",
      progress: 100,
    },
    {
      year: "2019",
      course: "SSC (Secondary School Certificate)",
      institute: "Lok Kalyan Public School",
      board: "Maharashtra State Board",
      score: "87.40%",
      progress: 100,
    },
  ];

  const certifications: CertItem[] = [
    {
      title: "Introduction to MS Excel",
      issuer: "Authorized Course Provider",
      date: "April 2025",
      id: "CERT-EX-2025-04",
      skills: ["Data Entry & Formatting", "VLOOKUP & HLOOKUP", "Pivot Tables & Charts", "Logical Formulas (IF/AND/OR)"],
    },
    {
      title: "Introduction to Data Analytics",
      issuer: "Authorized Course Provider",
      date: "April 2025",
      id: "CERT-DA-2025-04",
      skills: ["Data Querying & SQL basics", "Data Visualization principles", "Metrics & KPI Tracking", "Statistical Summaries"],
    },
    {
      title: "Digital Marketing Fundamentals",
      issuer: "Authorized Course Provider",
      date: "May 2025",
      id: "CERT-DM-2025-05",
      skills: ["Search Engine Optimization (SEO)", "Social Media Marketing", "Content Strategy", "Email Campaigns & Analytics"],
    },
  ];

  return (
    <section id="education" className="py-16 md:py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="text-center md:text-left mb-16">
        <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight mb-2">
          Education & Certifications 🎓
        </h2>
        <div className="w-16 h-1 bg-accent mx-auto md:mx-0 rounded-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Education */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center gap-2 mb-2">
            <GraduationCap className="text-accent" size={24} />
            <h3 className="font-display font-bold text-xl">Academic Profile</h3>
          </div>

          <div className="space-y-6">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="glass p-5 sm:p-6 rounded-3xl border border-black/5 dark:border-white/5 relative overflow-hidden group shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex justify-between items-start gap-4 mb-3">
                  <div>
                    <span className="text-xs font-semibold text-accent bg-accent-soft px-2.5 py-1 rounded-full">
                      {edu.year}
                    </span>
                    <h4 className="font-display font-bold text-lg md:text-xl mt-2 group-hover:text-accent transition-colors">
                      {edu.course}
                    </h4>
                    <p className="text-sm font-medium mt-1">
                      {edu.institute}
                    </p>
                    <p className="text-xs text-text-muted">
                      {edu.board}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-extrabold text-accent bg-accent-soft px-3 py-1.5 rounded-2xl block md:inline-block">
                      {edu.score}
                    </span>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="w-full mt-4">
                  <div className="flex justify-between text-[10px] font-bold text-text-muted mb-1.5 uppercase tracking-wider">
                    <span>Completion Status</span>
                    <span>{edu.progress}%</span>
                  </div>
                  <div className="w-full h-2 bg-black/5 dark:bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-accent to-peach-300 rounded-full transition-all duration-1000"
                      style={{ width: `${edu.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Certifications */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="text-accent" size={22} />
            <h3 className="font-display font-bold text-xl">Additional Certifications</h3>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                onClick={() => setActiveCert(cert)}
                className="glass p-5 rounded-3xl border border-black/5 dark:border-white/5 hover:border-accent/40 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-accent-soft flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-300 shrink-0">
                  <Award size={24} />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-semibold text-text-muted uppercase tracking-wider">
                    {cert.date}
                  </span>
                  <h4 className="font-display font-bold text-base group-hover:text-accent transition-colors leading-tight">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-text-muted">
                    {cert.issuer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-5 rounded-3xl bg-accent-soft border border-accent/10 mt-6 text-center">
            <p className="text-xs text-text-muted leading-relaxed">
              <strong>Note:</strong> Certifications are focused on building analytical and technological depth in HR operations and marketing strategies.
            </p>
          </div>
        </div>
      </div>

      {/* Credential Modal */}
      <AnimatePresence>
        {activeCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setActiveCert(null)}
            />

            {/* Modal Body */}
            <div className="relative w-full max-w-lg glass bg-bg-base border border-black/10 dark:border-white/10 p-6 md:p-8 rounded-3xl shadow-2xl z-10 animate-fade-in">
              <button
                onClick={() => setActiveCert(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              {/* Certificate content */}
              <div className="text-center pb-6 border-b border-black/5 dark:border-white/5">
                <div className="w-16 h-16 rounded-full bg-accent-soft flex items-center justify-center text-accent mx-auto mb-4">
                  <Award size={36} />
                </div>
                <span className="text-xs font-bold text-accent uppercase tracking-widest">
                  Verified Credential
                </span>
                <h3 className="font-display font-extrabold text-2xl mt-2 leading-tight">
                  {activeCert.title}
                </h3>
                <p className="text-sm text-text-muted mt-1.5">
                  Issued by {activeCert.issuer} • {activeCert.date}
                </p>
              </div>

              {/* Skills Gained list */}
              <div className="py-6">
                <h4 className="font-display font-bold text-sm text-accent mb-4 uppercase tracking-wider">
                  Syllabus & Core Skills Verified
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeCert.skills.map((skill, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-text-muted">
                      <CheckCircle size={14} className="text-accent shrink-0" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Verified Badge seal */}
              <div className="flex items-center justify-between bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 p-4 rounded-2xl">
                <div className="space-y-0.5">
                  <p className="text-[10px] font-bold text-text-muted uppercase tracking-wider">
                    Credential ID
                  </p>
                  <p className="font-mono text-xs font-semibold">
                    {activeCert.id}
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span>Valid & Active</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

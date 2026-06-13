"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";

interface Trait {
  name: string;
  value: number; // Max 100
  angle: number; // In degrees
  anecdote: string;
  shortDesc: string;
}

export default function About() {
  const [activeTrait, setActiveTrait] = useState<string>("Empathy");

  // Personality traits mapping to SVG coordinates
  // Angles: 0 is up, clockwise: 72, 144, 216, 288 degrees
  const traits: Trait[] = [
    {
      name: "Empathy",
      value: 98,
      angle: 0,
      shortDesc: "People-first and highly supportive",
      anecdote: "As a Forensic Science graduate turned HR, Pooja prioritises active listening. She believes that understanding human behaviour and emotions is the bedrock of building safe, inclusive, and thriving workplace cultures.",
    },
    {
      name: "Communication",
      value: 95,
      angle: 72,
      shortDesc: "Articulate, engaging, and clear",
      anecdote: "Pooja possesses exceptional presentation skills. She proved this during her academic presentations on ML-EdTech projects and her live internship campaigns for Tata Motors' LXP learning programs.",
    },
    {
      name: "Adaptability",
      value: 92,
      angle: 144,
      shortDesc: "Thrives in new environments",
      anecdote: "From transitioning fields (Forensic Science to HR) to adjusting to corporate paces, Pooja adapts quickly. She maintained an outstanding 9.12 CGPA in BSc while actively participating in extracurriculars.",
    },
    {
      name: "Problem Solving",
      value: 90,
      angle: 216,
      shortDesc: "Analytical, logical, and creative",
      anecdote: "Pooja loves tackling challenges. She demonstrated this as the Runner-up in the HROpSys Kiosk Competition, where she engineered a circular economy kiosk proposal under tight deadlines.",
    },
    {
      name: "Leadership",
      value: 88,
      angle: 288,
      shortDesc: "Empowering and collaborative",
      anecdote: "Leads with enthusiasm and collaboration. She has guided students while running coaching classes, and coordinated team dynamics during her OJT at Shoppers Stop.",
    },
  ];

  // Helper to map radius and angle to SVG coordinate (center is 100, 100)
  const getCoordinates = (value: number, angleDegrees: number) => {
    const radius = (value / 100) * 80; // Scale 100 to max 80px radius
    const angleRadians = ((angleDegrees - 90) * Math.PI) / 180; // Shift -90 so 0 is up
    const x = 100 + radius * Math.cos(angleRadians);
    const y = 100 + radius * Math.sin(angleRadians);
    return { x, y };
  };

  // Generate radar polygon paths
  const radarPoints = traits
    .map((t) => {
      const { x, y } = getCoordinates(t.value, t.angle);
      return `${x},${y}`;
    })
    .join(" ");

  // Grid rings (25%, 50%, 75%, 100%)
  const gridRings = [25, 50, 75, 100];

  const currentTrait = traits.find((t) => t.name === activeTrait) || traits[0];

  return (
    <section id="about" className="py-16 md:py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="text-center md:text-left mb-16">
        <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight mb-2">
          The Person Behind the Profile 👤
        </h2>
        <div className="w-16 h-1 bg-accent mx-auto md:mx-0 rounded-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Narrative */}
        <div className="lg:col-span-6 space-y-6">
          <h3 className="font-display font-bold text-2xl text-accent">
            {"Hi, I'm a people person!"}
          </h3>
          <p className="text-text-muted leading-relaxed">
            I am an aspiring HR professional currently pursuing my <strong>MMS in HR</strong> at Chetana&apos;s R.K. Institute of Management & Research (class of 2027). My background is unique: I graduated with a <strong>BSc in Forensic Science</strong> (CGPA 9.12), which trained my analytical thinking, observation, and detail-orientation.
          </p>
          <p className="text-text-muted leading-relaxed">
            I realized my true passion lies in understanding human behaviour and fostering positive environments. This transition led me to HR, where I focus on employee engagement, Learning & Development, and team dynamics. I bring energy, structured analysis, and empathy to build workspaces where employees thrive.
          </p>
          <div className="p-4 rounded-2xl bg-accent-soft border border-accent/10 flex items-start gap-3">
            <Sparkles className="text-accent shrink-0 mt-1" size={18} />
            <p className="text-sm font-medium">
              <strong>Fun Fact:</strong> When I&apos;m not studying organizational structures, I&apos;m choreographing dance steps! Dance is my happy place and creative outlet.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            {["Empathetic", "Analytical", "Adaptable", "Culture Builder"].map((trait) => (
              <span
                key={trait}
                className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 px-4 py-1.5 rounded-full text-xs font-semibold"
              >
                • {trait}
              </span>
            ))}
          </div>
        </div>

        {/* Right Column: Radar Chart */}
        <div className="lg:col-span-6 flex flex-col items-center">
          <div className="w-full max-w-[420px] glass p-6 rounded-3xl shadow-xl relative overflow-hidden flex flex-col items-center">
            <h4 className="font-display font-bold text-center text-sm uppercase tracking-wider text-text-muted mb-4">
              Personality Radar Chart
            </h4>

            {/* SVG Radar */}
            <div className="w-64 h-64 md:w-72 md:h-72 relative">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                {/* Grid Rings */}
                {gridRings.map((r) => {
                  const points = traits
                    .map((t) => {
                      const { x, y } = getCoordinates(r, t.angle);
                      return `${x},${y}`;
                    })
                    .join(" ");
                  return (
                    <polygon
                      key={r}
                      points={points}
                      fill="none"
                      stroke="var(--color-text-muted)"
                      strokeWidth="0.5"
                      strokeDasharray="2,2"
                      opacity="0.3"
                    />
                  );
                })}

                {/* Axis Lines */}
                {traits.map((t) => {
                  const outerPoint = getCoordinates(100, t.angle);
                  return (
                    <line
                      key={t.name}
                      x1="100"
                      y1="100"
                      x2={outerPoint.x}
                      y2={outerPoint.y}
                      stroke="var(--color-text-muted)"
                      strokeWidth="0.5"
                      opacity="0.3"
                    />
                  );
                })}

                {/* Radar Shape Area */}
                <polygon
                  points={radarPoints}
                  fill="var(--color-accent-soft)"
                  stroke="var(--color-accent)"
                  strokeWidth="2"
                  className="transition-all duration-500"
                />

                {/* Interactive Node Circles */}
                {traits.map((t) => {
                  const { x, y } = getCoordinates(t.value, t.angle);
                  const isActive = activeTrait === t.name;

                  return (
                    <g
                      key={t.name}
                      className="cursor-pointer"
                      onClick={() => setActiveTrait(t.name)}
                      onMouseEnter={() => setActiveTrait(t.name)}
                    >
                      <circle
                        cx={x}
                        cy={y}
                        r={isActive ? "7" : "5"}
                        fill={isActive ? "var(--color-accent)" : "var(--color-accent-light)"}
                        stroke="var(--color-accent)"
                        strokeWidth="1.5"
                        className="transition-all duration-300 hover:scale-125"
                      />
                      {/* Label text */}
                      {/* Position adjustment based on angle */}
                      {(() => {
                        const labelRadius = 118; // Push label past node
                        const labelPos = getCoordinates(labelRadius, t.angle);
                        const isTop = t.angle === 0;
                        const isBottom = t.angle === 144 || t.angle === 216;
                        const textAnchor = isTop ? "middle" : t.angle > 180 ? "end" : "start";
                        const dy = isTop ? "-4" : isBottom ? "12" : "4";

                        return (
                          <text
                            x={labelPos.x}
                            y={labelPos.y}
                            dy={dy}
                            textAnchor={textAnchor}
                            fontSize="8.5"
                            fontWeight={isActive ? "bold" : "medium"}
                            fill={isActive ? "var(--color-accent)" : "var(--color-text-base)"}
                            className="transition-all duration-300"
                          >
                            {t.name}
                          </text>
                        );
                      })()}
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Interactive Detail Card */}
            <div className="w-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-2xl p-4 mt-4 transition-all duration-300 min-h-[120px] flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2.5 h-2.5 rounded-full bg-accent animate-ping" />
                <h5 className="font-display font-bold text-sm text-accent">
                  {currentTrait.name}
                </h5>
                <span className="text-xs text-text-muted">
                  — {currentTrait.shortDesc}
                </span>
              </div>
              <p className="text-xs text-text-muted leading-relaxed">
                {currentTrait.anecdote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

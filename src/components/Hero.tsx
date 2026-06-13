"use client";

import { useEffect, useState } from "react";
import { Mail, Phone, ChevronDown, ArrowRight, Download } from "lucide-react";
import { Linkedin } from "./icons";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const fullText = "An aspiring HR Professional who believes in people, culture & growth.";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
      }
    }, 45);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-16 px-6 overflow-hidden bg-bg-base transition-colors duration-500">
      {/* Morphing Blob Backgrounds */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Blob 1 */}
        <div className="absolute top-[15%] left-[5%] w-[35vw] h-[35vw] min-w-[300px] min-h-[300px] rounded-full bg-radial from-coral-200/40 to-transparent blur-3xl animate-float" />
        {/* Blob 2 */}
        <div className="absolute bottom-[10%] right-[10%] w-[40vw] h-[40vw] min-w-[350px] min-h-[350px] rounded-full bg-radial from-peach-200/40 to-transparent blur-3xl animate-float" style={{ animationDelay: "-2s" }} />
      </div>

      <div className="max-w-4xl mx-auto text-center z-10 flex flex-col items-center">
        {/* Profile Avatar Frame */}
        <div className="relative mb-8 group">
          {/* Animated Background Rings */}
          <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-accent to-peach-300 opacity-75 blur-sm animate-spin-slow" />
          <div className="absolute -inset-3 rounded-full bg-gradient-to-bl from-sunny to-accent opacity-30 blur-md animate-pulse-slow" />
          
          {/* Profile Photo */}
          <div className="relative w-44 h-44 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-bg-base shadow-xl bg-coral-100 flex items-center justify-center animate-float">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/74.jpg"
              alt="Pooja Bhanushali"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Hello Text */}
        <span className="bg-accent-soft text-accent px-4 py-1.5 rounded-full text-sm font-semibold tracking-wider uppercase mb-4 shadow-sm animate-pulse-slow">
          Aspiring HR Leader 🌸
        </span>

        <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight leading-none mb-6">
          {"Hello, I'm "} <span className="text-accent">Pooja</span>
        </h1>

        {/* Typewriter text */}
        <div className="min-h-[4rem] sm:min-h-[3rem] max-w-2xl px-4 mb-8">
          <p className="text-lg sm:text-xl font-medium text-text-muted leading-relaxed text-center">
            {typedText}
            <span className="inline-block w-1 h-5 bg-accent ml-1 animate-ping" />
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
          <a
            href="#contact"
            className="group flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-8 py-3.5 rounded-full text-base font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
          >
            <span>{"Let's Connect"}</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="/Pooja_Bhanushali_Resume.pdf"
            download="Pooja_Bhanushali_Resume.pdf"
            className="flex items-center gap-2 bg-bg-base hover:bg-accent-soft text-text-base hover:text-accent border-2 border-accent/25 hover:border-accent px-8 py-3.5 rounded-full text-base font-semibold shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
          >
            <Download size={18} />
            <span>Download Resume</span>
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-6">
          <a
            href="mailto:poojabhanushali1401@gmail.com"
            className="p-3 rounded-full bg-black/5 dark:bg-white/5 hover:bg-accent-soft text-text-muted hover:text-accent transition-all duration-300"
            title="Email Pooja"
          >
            <Mail size={20} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-black/5 dark:bg-white/5 hover:bg-accent-soft text-text-muted hover:text-accent transition-all duration-300"
            title="LinkedIn Profile"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="tel:+919372601570"
            className="p-3 rounded-full bg-black/5 dark:bg-white/5 hover:bg-accent-soft text-text-muted hover:text-accent transition-all duration-300"
            title="Call Pooja"
          >
            <Phone size={20} />
          </a>
        </div>
      </div>

      {/* Down arrow scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce opacity-50 hidden sm:block">
        <a href="#about" className="text-text-muted hover:text-accent transition-colors">
          <ChevronDown size={28} />
        </a>
      </div>
    </section>
  );
}

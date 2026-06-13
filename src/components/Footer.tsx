"use client";

import { useEffect, useState } from "react";
import { ArrowUp, Mail, Phone } from "lucide-react";
import { Linkedin } from "./icons";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-black/5 dark:bg-white/5 border-t border-black/5 dark:border-white/5 py-12 px-6 mt-auto transition-colors duration-300 relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Branding & Quote */}
        <div className="text-center md:text-left">
          <h3 className="font-display font-bold text-xl tracking-tight text-accent mb-2">
            Pooja Bhanushali
          </h3>
          <p className="text-sm text-text-muted max-w-sm">
            Aspiring HR Professional • People Operations • Learning & Development.
            Believer in culture, collaboration, and continuous growth.
          </p>
        </div>

        {/* Quick Contacts */}
        <div className="flex flex-col sm:flex-row items-center gap-6 text-sm font-medium">
          <a
            href="mailto:poojabhanushali1401@gmail.com"
            className="flex items-center gap-2 hover:text-accent transition-colors duration-300"
          >
            <Mail size={16} className="text-accent" />
            <span>poojabhanushali1401@gmail.com</span>
          </a>
          <a
            href="tel:+919372601570"
            className="flex items-center gap-2 hover:text-accent transition-colors duration-300"
          >
            <Phone size={16} className="text-accent" />
            <span>+91 9372 601 570</span>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-accent transition-colors duration-300"
          >
            <Linkedin size={16} className="text-accent" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto border-t border-black/5 dark:border-white/5 mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
        <p>
          &copy; {new Date().getFullYear()} Pooja Bhanushali. All rights reserved.
        </p>
        <p className="flex items-center gap-1">
          Made with <span className="text-rose-500 animate-pulse">❤️</span> and lots of ☕ | Keep dancing!{" "}
          <span className="inline-block animate-bounce text-sm origin-bottom">💃</span>
        </p>
      </div>

      {/* Back to Top Floating Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-40 p-3 rounded-full bg-accent hover:bg-accent-hover text-white shadow-lg transition-all duration-300 cursor-pointer ${
          showScrollTop
            ? "translate-y-0 opacity-100 scale-100"
            : "translate-y-10 opacity-0 scale-75 pointer-events-none"
        }`}
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
}

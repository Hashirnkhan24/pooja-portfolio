"use client";

import Link from "next/link";
import { ArrowLeft, Download, Eye, FileText, Share2 } from "lucide-react";
import { useState } from "react";

export default function ResumePage() {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    const url = window.location.origin + "/Pooja_Bhanushali_Resume.pdf";
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-bg-base text-text-base flex flex-col p-4 md:p-8 transition-colors duration-500">
      {/* Top action bar */}
      <div className="max-w-6xl w-full mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-semibold hover:text-accent transition-colors self-start cursor-pointer"
        >
          <ArrowLeft size={16} />
          <span>Back to Portfolio</span>
        </Link>

        {/* Action buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleShare}
            className="flex items-center gap-2 bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 px-4 py-2 rounded-xl text-xs font-bold hover:bg-accent-soft hover:text-accent transition-all cursor-pointer"
          >
            <Share2 size={14} />
            <span>{copied ? "Copied PDF Link!" : "Copy Link"}</span>
          </button>
          <a
            href="/Pooja_Bhanushali_Resume.pdf"
            download="Pooja_Bhanushali_Resume.pdf"
            className="flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-md hover:shadow-lg transition-all"
          >
            <Download size={14} />
            <span>Download PDF</span>
          </a>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-6xl w-full mx-auto flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-4">
        {/* Info card (Left) */}
        <div className="lg:col-span-4 glass p-6 md:p-8 rounded-3xl border border-black/5 dark:border-white/5 flex flex-col justify-between shadow-sm">
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-accent">
              <FileText size={32} />
              <h1 className="font-display font-extrabold text-2xl tracking-tight text-text-base">
                Curriculum Vitae
              </h1>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-display font-bold text-base">Pooja Bhanushali</h3>
                <p className="text-xs text-text-muted mt-1 leading-relaxed">
                  MMS Human Resources Student (Chetana&apos;s R.K. Institute of Management & Research)
                </p>
              </div>

              <div className="border-t border-black/5 dark:border-white/5 pt-4 space-y-2.5 text-xs text-text-muted">
                <p><strong>Experience:</strong> HR Intern at Tata Motors Limited, Retail OJT at Shoppers Stop</p>
                <p><strong>Education:</strong> BSc Forensic Science (9.12 CGPA), Chetana MMS HR</p>
                <p><strong>Certifications:</strong> MS Excel, Data Analytics, Digital Marketing</p>
                <p><strong>Key Skills:</strong> Recruitment, L&D, Employee Engagement, Communication</p>
              </div>
            </div>
          </div>

          <div className="border-t border-black/5 dark:border-white/5 pt-6 mt-6">
            <div className="flex items-center gap-2.5 text-xs text-text-muted bg-accent-soft p-3.5 rounded-xl border border-accent/5">
              <Eye size={16} className="text-accent shrink-0" />
              <span>Use the interactive PDF reader to zoom, search, or print her resume.</span>
            </div>
          </div>
        </div>

        {/* PDF Iframe Viewer (Right) */}
        <div className="lg:col-span-8 glass rounded-3xl border border-black/5 dark:border-white/5 overflow-hidden shadow-md flex flex-col min-h-[500px]">
          <iframe
            src="/Pooja_Bhanushali_Resume.pdf#toolbar=0"
            className="w-full flex-1 border-none bg-white rounded-3xl"
            title="Pooja Bhanushali Resume PDF"
          />
        </div>
      </div>
    </main>
  );
}

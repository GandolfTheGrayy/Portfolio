"use client";

import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-8 border-t border-slate-800/50 mt-16 flex flex-col sm:flex-row items-center justify-between text-slate-500 text-sm">
      <p>&copy; 2026 Pletka Labs. All rights reserved.</p>
      
      <button 
        onClick={scrollToTop}
        className="mt-4 sm:mt-0 flex items-center gap-2 hover:text-indigo-400 transition-colors group"
      >
        <span>Back to Top</span>
        <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
      </button>
    </footer>
  );
}

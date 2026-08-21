"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export function Education() {
  return (
    <section id="education" className="py-16 border-t border-slate-800/50 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SectionHeading title="Education" icon={GraduationCap} />

        <div className="flex gap-4 sm:gap-6 group">
          <div className="flex items-center justify-center w-10 h-10 shrink-0 rounded-full border border-slate-800 bg-slate-950 text-slate-400 group-hover:border-indigo-500 group-hover:text-indigo-400 transition-colors">
            <GraduationCap className="w-4 h-4" />
          </div>

          <div className="flex-1 min-w-0 p-5 sm:p-6 rounded-xl bg-slate-900/50 border border-slate-800/50 hover:border-slate-700 transition-colors">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <h3 className="font-bold text-slate-100 text-lg">Arizona State University</h3>
              <span className="text-sm text-slate-500 shrink-0">Tempe, AZ</span>
            </div>
            <div className="mt-1 text-slate-300 font-medium">
              Bachelor of Science in Computer Science
            </div>
            <ul className="mt-4">
              <li className="flex gap-3 text-sm text-slate-400 leading-relaxed">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-indigo-500/80" />
                <span>
                  Specialization in Artificial Intelligence and Advanced Software Engineering
                  Architecture.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

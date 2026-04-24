"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Database, GitMerge, Terminal, Code2 } from "lucide-react";

const competencies = [
  { name: "LLM Orchestration", icon: BrainCircuit },
  { name: "RAG Systems", icon: Database },
  { name: "Agentic Workflows", icon: GitMerge },
  { name: "Python", icon: Terminal },
  { name: "Next.js", icon: Code2 },
];

export function CoreCompetencies() {
  return (
    <section className="py-16 border-t border-slate-800/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold text-slate-200 mb-8">Core Tech & Competencies</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {competencies.map((comp, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 rounded-xl bg-slate-900/50 border border-slate-800/50 hover:border-indigo-500/50 transition-colors group"
            >
              <comp.icon className="w-8 h-8 text-slate-400 group-hover:text-indigo-400 transition-colors mb-3" />
              <span className="text-sm font-medium text-slate-300 text-center">
                {comp.name}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import {
  Cpu,
  BrainCircuit,
  Database,
  Layout,
  Cloud,
  Code2,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const skillGroups: { category: string; icon: LucideIcon; skills: string[] }[] = [
  {
    category: "Languages",
    icon: Code2,
    skills: ["Python", "TypeScript", "JavaScript", "Java", "SQL", "PostgreSQL", "C", "C++", "C#"],
  },
  {
    category: "AI & Agentic",
    icon: BrainCircuit,
    skills: [
      "Agentic Systems",
      "Multi-Agent Orchestration",
      "Model Context Protocol",
      "LangChain",
      "LangGraph",
      "RAG",
      "Vector Databases",
      "Evaluation Harnesses",
      "Guardrail and Policy Engines",
      "Prompt & Context Engineering",
      "Chain of Thought",
      "Token Optimization",
      "LLM APIs",
      "Claude",
      "OpenAI",
      "Gemini",
    ],
  },
  {
    category: "Backend & Data",
    icon: Database,
    skills: [
      "Next.js",
      "Node.js",
      "Java Spring Boot",
      "REST API Design",
      "Prisma",
      "PostgreSQL",
      "NextAuth",
      "Stripe",
      "Zod",
      "Data Modeling",
    ],
  },
  {
    category: "Frontend",
    icon: Layout,
    skills: ["React", "TypeScript", "Tailwind CSS", "Radix", "shadcn/ui"],
  },
  {
    category: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      "AWS",
      "S3",
      "EC2",
      "Google Cloud",
      "Vercel",
      "Docker",
      "Git",
      "GitHub Actions CI/CD",
      "Vitest",
      "Playwright",
      "Selenium",
    ],
  },
];

export function TechnicalSkills() {
  return (
    <section id="skills" className="py-16 border-t border-slate-800/50 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SectionHeading title="Technical Skills" icon={Cpu} />

        <div className="space-y-5">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="grid grid-cols-1 sm:grid-cols-[13rem_1fr] gap-3 sm:gap-6 p-5 rounded-xl bg-slate-900/50 border border-slate-800/50 hover:border-indigo-500/40 transition-colors"
            >
              <div className="flex items-center gap-3">
                <group.icon className="w-5 h-5 text-indigo-400 shrink-0" />
                <h3 className="font-semibold text-slate-200">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={`${group.category}-${skill}`}
                    className="px-3 py-1 text-xs font-medium bg-slate-950 text-slate-300 rounded-full border border-slate-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

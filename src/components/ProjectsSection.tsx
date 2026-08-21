"use client";

import { motion } from "framer-motion";
import { FolderGit2 } from "lucide-react";
import { ProjectCard, type ProjectCardProps } from "./ProjectCard";
import { SectionHeading } from "./SectionHeading";

const projects: ProjectCardProps[] = [
  {
    title: "Gauntlet Development Harness",
    role: "Open Source Contributor",
    link: "https://github.com/johnpletka/gauntlet",
    linkLabel: "github.com/johnpletka/gauntlet",
    imageUrl: "/images/gauntlet.svg",
    bullets: [
      "AI software development harness for spec-driven development.",
      "Multi-agent orchestration engine that breaks complex PRDs into context-aware phases, with automatic adversarial review and correction cycles at every stage.",
    ],
    tags: ["Multi-Agent Orchestration", "Spec-Driven Development", "Open Source"],
  },
  {
    title: "Sentinel Alpha",
    role: "Creator & Developer",
    link: "https://sentinel.pletkalabs.dev",
    linkLabel: "sentinel.pletkalabs.dev",
    imageUrl: "/images/sentinel-alpha.svg",
    bullets: [
      "Autonomous research system hunting for sentiment arbitrage through a multi-agent pipeline.",
      "Scrapes raw financial data, uses Claude for sentiment analysis on corporate language, and queries a RAG index for historical market precedents.",
    ],
    tags: ["Agentic Workflows", "RAG", "Claude"],
  },
  {
    title: "Linear Algebra Hub",
    role: "Creator & Developer",
    link: "https://basis.pletkalabs.dev/",
    linkLabel: "basis.pletkalabs.dev",
    imageUrl: "/images/linear-algebra.png",
    bullets: [
      "Built an interactive linear algebra learning platform in React, TypeScript, Vite, and Tailwind spanning a full course from systems of equations through vector spaces and linear independence.",
      "Integrated the Gemini API for generated explanations, rendered rich LaTeX math with KaTeX, added interactive graphing with Mafs, and supported PDF course-material ingestion.",
    ],
    tags: ["React", "Gemini API", "KaTeX"],
  },
  {
    title: "Green on Demand",
    role: "Lead AI Developer",
    link: "https://www.greenondemand.ai/",
    linkLabel: "greenondemand.ai",
    imageUrl: "/images/green-on-demand.jpg",
    bullets: [
      "Collected and validated renewable energy-system datasets supporting reliability, compliance checks, and early fault detection.",
      "Built analysis scripts and dashboards to track load behavior and support power-study evaluations for multi-industry projects.",
      "Mapped system performance to rebate and incentive compliance requirements and prepared technical summaries of equipment performance, deviations, and corrective actions.",
    ],
    tags: ["Data Analysis", "Python", "Dashboards"],
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 border-t border-slate-800/50 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SectionHeading title="Technical Projects" icon={FolderGit2} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

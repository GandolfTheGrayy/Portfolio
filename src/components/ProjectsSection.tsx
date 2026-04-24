"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "VantageBid",
    description: "Leading development of an AI platform that automates construction bidding via autonomous quote-analysis workflows. Implementing semantic search and vector-database algorithms to match contractors with relevant project bids.",
    link: "https://www.vantagebid.ai/",
    tags: ["LLMs", "Vector Databases", "Next.js"],
    imageUrl: "/images/vantagebid.jpg",
  },
  {
    title: "Green on Demand",
    description: "Sustainability tech platform. Collected and validated renewable energy-system datasets. Built analysis scripts and dashboards to track load behavior and support power-study evaluations for multi-industry projects.",
    link: "https://www.greenondemand.ai/",
    tags: ["RAG", "Data Analysis", "Python"],
    imageUrl: "/images/green-on-demand.jpg",
  },
  {
    title: "TheOfficial.ai",
    description: "Contributing to a generative AI platform specializing in digital avatars and autonomous reasoning agents. Engineered a Chain of Thought (CoT) module using LangChain and Gemini API for AI agent workflows.",
    link: "https://www.theofficial.ai/",
    tags: ["Agentic Workflows", "Chain-of-Thought", "LangChain"],
    imageUrl: "/images/official-ai.jpg",
  },
  {
    title: "Linear Algebra Learning Hub",
    description: "An interactive educational platform designed to simplify complex linear algebra concepts. Features dynamic visualizer tools and step-by-step problem-solving modules.",
    link: "https://basis.pletkalabs.dev/",
    tags: ["Education Tech", "React", "Interactive Visualizations"],
    imageUrl: "/images/linear-algebra.png",
  },
];

export function ProjectsSection() {
  return (
    <section className="py-16 border-t border-slate-800/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold text-slate-200 mb-8">Selected Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
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

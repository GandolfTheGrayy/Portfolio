"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const timeline = [
  {
    type: "experience",
    title: "Software Engineering Intern",
    organization: "Nagra Kudelski",
    date: "May 2019 - May 2020",
    icon: Briefcase,
    description: "Assisted a global leader in digital security in developing the myCinema content distribution network for theaters. Engineered Java-based crawlers to automate data collection from 200+ theater websites.",
  },
  {
    type: "experience",
    title: "Software Engineering Intern",
    organization: "Abraxis Networks",
    date: "May 2022 - Aug. 2023",
    icon: Briefcase,
    description: "Built a Java automation engine to parse PDF data and synchronize financial entries with QuickBooks for multi-location clients. Designed and implemented UI/UX solutions for batch-processing digitized datasets.",
  },
  {
    type: "experience",
    title: "Software Engineer",
    organization: "Official.ai",
    date: "May 2024 - Present",
    icon: Briefcase,
    description: "Contributing to a generative AI platform specializing in digital avatars and autonomous reasoning agents. Engineered a Chain of Thought (CoT) module using LangChain and Gemini API for AI agent workflows. Optimized back-end REST services using Java Spring Boot.",
  },
  {
    type: "education",
    title: "B.S. Computer Science",
    organization: "Arizona State University",
    date: "Expected May 2026",
    icon: GraduationCap,
    description: "Specialization: Artificial Intelligence and Advanced Software Engineering Architecture.",
  },
];

export function Experience() {
  return (
    <section className="py-16 border-t border-slate-800/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold text-slate-200 mb-8">Experience & Education</h2>
        
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-800 before:to-transparent">
          {timeline.map((item, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-800 bg-slate-950 text-slate-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm relative z-10 group-hover:border-indigo-500 group-hover:text-indigo-400 transition-colors">
                <item.icon className="w-5 h-5" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl bg-slate-900/50 border border-slate-800/50 hover:border-slate-700 transition-colors">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-2">
                  <h3 className="font-bold text-slate-200 text-lg">{item.title}</h3>
                  <span className="text-sm font-medium text-indigo-400 mt-1 sm:mt-0">{item.date}</span>
                </div>
                <div className="text-slate-300 font-medium mb-3">{item.organization}</div>
                <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const subHeadlineText = "Focusing on LLM orchestration, agentic workflows, and RAG.";

export function Hero() {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let currentIndex = 0;

    const typeChar = () => {
      if (currentIndex < subHeadlineText.length) {
        setTypedText(subHeadlineText.slice(0, currentIndex + 1));
        currentIndex++;
        timeout = setTimeout(typeChar, 40);
      }
    };

    timeout = setTimeout(typeChar, 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="py-20 lg:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-100">
          William Pletka
        </h1>
        <h2 className="mt-4 text-xl sm:text-2xl font-medium text-indigo-400">
          AI Automation Engineer | Computer Science @ ASU
        </h2>
        
        <div className="mt-6 max-w-2xl text-lg text-slate-400 leading-relaxed font-mono min-h-[3rem]">
          <span className="text-indigo-500 mr-2">{">"}</span>
          {typedText}
          <span className="animate-pulse inline-block w-2 h-5 bg-indigo-500 ml-1 align-middle"></span>
        </div>
        
        <p className="mt-4 max-w-2xl text-lg text-slate-400 leading-relaxed">
          I build systems that bridge the gap between complex data and actionable AI automation.
        </p>

        <div className="mt-8 flex flex-wrap gap-4 sm:gap-6">
          <div className="flex items-center gap-2 text-slate-400">
            <Phone className="w-5 h-5 text-indigo-400" />
            <span className="text-sm">(623) 208-0733</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <MapPin className="w-5 h-5 text-indigo-400" />
            <span className="text-sm">Tempe, AZ</span>
          </div>
          <a
            href="mailto:will@pletka.com"
            className="flex items-center gap-2 text-slate-400 hover:text-indigo-400 transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span className="text-sm">will@pletka.com</span>
          </a>
          <a
            href="https://linkedin.com/in/will-pletka"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-400 hover:text-indigo-400 transition-colors"
          >
            <FaLinkedin className="w-5 h-5" />
            <span className="text-sm">LinkedIn</span>
          </a>
          <a
            href="https://github.com/GandolfTheGrayy"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-400 hover:text-indigo-400 transition-colors"
          >
            <FaGithub className="w-5 h-5" />
            <span className="text-sm">GitHub</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}

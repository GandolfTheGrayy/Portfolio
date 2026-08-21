"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Globe, FileText } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const subHeadlineText =
  "Production agentic systems, LLM orchestration, and RAG — built end to end.";

const contactLinks = [
  {
    label: "will@pletka.com",
    href: "mailto:will@pletka.com",
    icon: Mail,
  },
  {
    label: "pletkalabs.dev",
    href: "https://pletkalabs.dev",
    icon: Globe,
  },
  {
    label: "GitHub",
    href: "https://github.com/GandolfTheGrayy",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/will-pletka",
    icon: FaLinkedin,
  },
  {
    label: "Résumé (PDF)",
    href: "/will-pletka-resume.pdf",
    icon: FileText,
  },
];

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
    <section className="pt-20 pb-12 lg:pt-32 lg:pb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-100">
          Will Pletka
        </h1>
        <h2 className="mt-4 text-xl sm:text-2xl font-medium text-indigo-400">
          AI-Focused Software Engineer
        </h2>

        <div className="mt-6 max-w-2xl text-lg text-slate-400 leading-relaxed font-mono min-h-[3.5rem]">
          <span className="text-indigo-500 mr-2">{">"}</span>
          {typedText}
          <span className="animate-pulse inline-block w-2 h-5 bg-indigo-500 ml-1 align-middle"></span>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-indigo-400" />
            <span>(623) 208-0733</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-indigo-400" />
            <span>Tempe, AZ</span>
          </div>
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-indigo-400 transition-colors"
            >
              <link.icon className="w-4 h-4" />
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

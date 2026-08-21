"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export function Summary() {
  return (
    <section id="summary" className="py-16 border-t border-slate-800/50 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SectionHeading title="Summary" icon={User} />
        <p className="max-w-3xl text-slate-400 leading-relaxed">
          AI-focused software engineer who has built production agentic systems end to end.
          Direct hands-on experience creating complex business workflows, LLM orchestration
          processes, RAG systems, REST APIs, and React user interfaces. Comfortable both
          architecting a multi-tenant SaaS platform and engineering the guardrails, evaluation
          harnesses, and agent tooling that keep AI reliable in production.
        </p>
      </motion.div>
    </section>
  );
}

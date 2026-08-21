"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

// Reverse-chronological: most recent role first.
const timeline = [
  {
    title: "Senior Engineer",
    organization: "VantageBid",
    organizationUrl: "https://www.vantagebid.ai/",
    date: "Feb. 2026 - Present",
    location: "Tempe, AZ",
    current: true,
    bullets: [
      "Architected and built VantageBid from the ground up and shipped it to paying customers: a multi-tenant SaaS platform for residential general contractors spanning AI estimating, subcontractor RFQs, budgets, AP/AR invoicing and payments, and margin reporting.",
      "Created an autonomous multi-step workflow to generate accurate construction estimates, using AI to analyze blueprints, send RFQs to vendors for their portion of the project, automatically handle communications, and collect and parse quote PDFs to build a budget, saving the average general contractor over 30 hours of labor per project estimate.",
      "Designed and built the AI estimating engine, using LLM-driven quote analysis and takeoffs with regional material-pricing enrichment to automate contractor bidding and estimation.",
      "Set the platform's technical standards, architecture, and requirements, modeling a 90+ table relational schema with hard financial invariants such as AP/AR separation, tenant isolation, and immutable ledger document numbers enforced across the service layer and test suite.",
      "Engineered the production backend and infrastructure, including secure server actions and APIs, NextAuth with role-based access control and multi-tenancy, Stripe billing, AWS S3 document storage with OCR, and Dockerized deployments on Vercel.",
    ],
  },
  {
    title: "Software Engineer, Generative AI Platform",
    organization: "Official AI",
    organizationUrl: "https://www.theofficial.ai/",
    date: "April 2024 - April 2026",
    location: "Seattle, WA",
    bullets: [
      "Contributed to a generative AI platform specializing in digital avatars and autonomous reasoning agents.",
      "Engineered a Chain of Thought module using LangChain and the Gemini API for AI agent workflows.",
      "Developed Python pipelines for digital avatars and architected interactive AI agent interfaces.",
      "Optimized back-end REST services using Java Spring Boot and PostgreSQL for a production ReactJS application.",
      "Containerized services with Docker for deployment on AWS, GCP, and Replicate GPU platforms.",
      "Integrated Playwright automated testing into GitHub CI/CD workflows to monitor front-end stability.",
    ],
  },
  {
    title: "Software Engineer, Workflow Automation",
    organization: "Abraxis Networks",
    date: "Feb. 2022 - April 2024",
    location: "Phoenix, AZ",
    bullets: [
      "Supported a managed services firm focused on streamlining business logistics and financial workflows for the hospitality sector.",
      "Built a Java automation engine to parse PDF data and synchronize financial entries with QuickBooks for multi-location clients.",
      "Designed and implemented UI/UX solutions for batch-processing digitized datasets to improve efficiency.",
      "Authored and managed QA test suites using Selenium to validate stability across SaaS-based business tools.",
    ],
  },
  {
    title: "Software Engineering Intern, Digital Security & Media",
    organization: "Nagra Kudelski",
    date: "May 2019 - May 2020",
    location: "Phoenix, AZ",
    bullets: [
      "Assisted a global leader in digital security in developing the myCinema content distribution network for theaters.",
      "Engineered Java-based crawlers to automate data collection from 200+ theater websites.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-16 border-t border-slate-800/50 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SectionHeading title="Professional Experience" icon={Briefcase} />

        <div className="relative space-y-8 before:absolute before:top-2 before:bottom-2 before:left-5 before:w-px before:bg-gradient-to-b before:from-indigo-500/40 before:via-slate-800 before:to-transparent">
          {timeline.map((item) => (
            <div key={`${item.organization}-${item.date}`} className="relative flex gap-4 sm:gap-6 group">
              <div className="relative z-10 flex items-center justify-center w-10 h-10 shrink-0 rounded-full border border-slate-800 bg-slate-950 text-slate-400 group-hover:border-indigo-500 group-hover:text-indigo-400 transition-colors">
                <Briefcase className="w-4 h-4" />
                {item.current && (
                  <span className="absolute inset-0 rounded-full border border-indigo-500/60 animate-pulse" />
                )}
              </div>

              <div className="flex-1 min-w-0 p-5 sm:p-6 rounded-xl bg-slate-900/50 border border-slate-800/50 hover:border-slate-700 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <h3 className="font-bold text-slate-100 text-lg">{item.title}</h3>
                  <span className="text-sm font-medium text-indigo-400 shrink-0">
                    {item.date}
                  </span>
                </div>

                <div className="mt-1 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  {item.organizationUrl ? (
                    <a
                      href={item.organizationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-300 font-medium hover:text-indigo-400 transition-colors w-fit"
                    >
                      {item.organization}
                    </a>
                  ) : (
                    <span className="text-slate-300 font-medium">{item.organization}</span>
                  )}
                  <span className="text-sm text-slate-500 shrink-0">{item.location}</span>
                </div>

                <ul className="mt-4 space-y-2.5">
                  {item.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex gap-3 text-sm text-slate-400 leading-relaxed">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-indigo-500/80" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

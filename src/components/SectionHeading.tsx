"use client";

import type { LucideIcon } from "lucide-react";

interface SectionHeadingProps {
  title: string;
  icon: LucideIcon;
  meta?: string;
}

export function SectionHeading({ title, icon: Icon, meta }: SectionHeadingProps) {
  return (
    <div className="mb-8">
      <div className="flex items-baseline justify-between gap-4">
        <h2 className="flex items-center gap-3 text-2xl font-bold tracking-tight text-slate-100">
          <Icon className="w-5 h-5 text-indigo-400 shrink-0 translate-y-[1px]" />
          {title}
        </h2>
        {meta && (
          <span className="text-sm font-medium text-slate-500 shrink-0">{meta}</span>
        )}
      </div>
      <div className="mt-3 h-px w-full bg-gradient-to-r from-indigo-500/60 via-slate-800 to-transparent" />
    </div>
  );
}

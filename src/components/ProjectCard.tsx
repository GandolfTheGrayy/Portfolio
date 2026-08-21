"use client";

import { ExternalLink } from "lucide-react";
import Image from "next/image";

export interface ProjectCardProps {
  title: string;
  role: string;
  link?: string;
  linkLabel?: string;
  bullets: string[];
  tags?: string[];
  imageUrl?: string;
}

export function ProjectCard({
  title,
  role,
  link,
  linkLabel,
  bullets,
  tags,
  imageUrl,
}: ProjectCardProps) {
  return (
    <div className="group relative h-full rounded-2xl bg-slate-900 p-[1px] overflow-hidden">
      {/* Animated gradient border on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Card Content */}
      <div className="relative h-full bg-slate-950 rounded-2xl p-6 sm:p-7 flex flex-col justify-between overflow-hidden">
        <div>
          <div className="flex justify-between items-start gap-4 mb-4">
            <div className="flex items-center gap-4 min-w-0">
              {imageUrl && (
                <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-slate-800 shrink-0">
                  <Image src={imageUrl} alt={`${title} logo`} fill className="object-cover" />
                </div>
              )}
              <div className="min-w-0">
                <h3 className="text-xl font-bold text-slate-100 group-hover:text-indigo-400 transition-colors">
                  {title}
                </h3>
                <p className="mt-0.5 text-sm font-medium text-slate-500">{role}</p>
              </div>
            </div>
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-indigo-400 transition-colors shrink-0"
                aria-label={`Visit ${title}`}
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>

          <ul className="space-y-2.5">
            {bullets.map((bullet, idx) => (
              <li key={idx} className="flex gap-3 text-sm text-slate-400 leading-relaxed">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-indigo-500/80" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 space-y-4">
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium bg-slate-900 text-indigo-300 rounded-full border border-slate-800"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {link && linkLabel && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-500 hover:text-indigo-400 transition-colors"
            >
              {linkLabel}
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

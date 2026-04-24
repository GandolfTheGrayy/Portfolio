"use client";

import { ExternalLink } from "lucide-react";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  link?: string;
  tags?: string[];
  imageUrl?: string;
}

export function ProjectCard({ title, description, link, tags, imageUrl }: ProjectCardProps) {
  return (
    <div className="group relative rounded-2xl bg-slate-900 p-[1px] overflow-hidden">
      {/* Animated gradient border on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Card Content */}
      <div className="relative h-full bg-slate-950 rounded-2xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden">
        <div>
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-4">
              {imageUrl && (
                <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-slate-800 shrink-0">
                  <Image src={imageUrl} alt={`${title} logo`} fill className="object-cover" />
                </div>
              )}
              <h3 className="text-xl font-bold text-slate-200 group-hover:text-indigo-400 transition-colors">
                {title}
              </h3>
            </div>
            {link && (
              <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-indigo-400 transition-colors shrink-0 ml-4"
                aria-label={`Visit ${title}`}
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
          <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
            {description}
          </p>
        </div>
        
        {tags && tags.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {tags.map((tag, idx) => (
              <span 
                key={idx} 
                className="px-3 py-1 text-xs font-medium bg-slate-900 text-indigo-300 rounded-full border border-slate-800"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

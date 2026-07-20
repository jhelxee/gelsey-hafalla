import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Lock, Code } from 'lucide-react'
import { projects, projectCategories } from '../data/portfolio'
import { techIcon } from '../lib/techIcons'
import FadeIn from './FadeIn'
import RevealText from './RevealText'

const PAGE_SIZE = 6

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<'All' | (typeof projectCategories)[number]>('All')
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)

  const filtered = useMemo(
    () => (activeCategory === 'All' ? projects : projects.filter((p) => p.category === activeCategory)),
    [activeCategory]
  )

  function selectCategory(category: 'All' | (typeof projectCategories)[number]) {
    setActiveCategory(category)
    setVisibleCount(PAGE_SIZE)
  }

  return (
    <section id="projects" className="py-24 px-6 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <p className="text-[#00b4a0] text-xs font-semibold tracking-[0.2em] uppercase mb-2">What I've built</p>
        </FadeIn>
        <RevealText className="text-3xl md:text-4xl font-black text-white mb-4">Projects</RevealText>

        {/* NDA notice */}
        <FadeIn>
          <div className="flex items-center gap-2 mb-8 text-gray-500 text-sm">
            <Lock size={14} className="text-[#00b4a0] shrink-0" />
            <span>Most projects below were built under a <span className="text-gray-400 font-medium">Non-Disclosure Agreement</span>. Details shared are limited to scope and impact only.</span>
          </div>
        </FadeIn>

        {/* Category filter chips */}
        <FadeIn>
          <div className="flex flex-wrap gap-2 mb-12">
            {(['All', ...projectCategories] as const).map((category) => (
              <button
                key={category}
                onClick={() => selectCategory(category)}
                className={`text-xs font-semibold px-4 py-2 rounded-full border transition-colors ${
                  activeCategory === category
                    ? 'bg-[#00b4a0] border-[#00b4a0] text-white'
                    : 'border-white/15 text-gray-400 hover:border-[#00b4a0]/50 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.slice(0, visibleCount).map((project, i) => (
            <FadeIn key={project.title} delay={(i % PAGE_SIZE) * 0.06} variant="zoom">
              <motion.div
                className="bg-white/5 rounded-xl border border-white/10 hover:border-[#00b4a0]/40 hover:shadow-lg hover:shadow-[#00b4a0]/5 p-6 flex flex-col gap-3 h-full transition-all duration-300"
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                {project.image && project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block rounded-lg overflow-hidden h-40"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-sm font-medium">
                      <ExternalLink size={16} />
                      View Live
                    </div>
                  </a>
                ) : (
                  <div className="h-40 rounded-lg border border-white/10 bg-white/5 flex flex-col items-center justify-center gap-2">
                    <Lock size={20} className="text-[#00b4a0]" />
                    <span className="text-xs text-gray-500 uppercase tracking-wide font-medium">Private</span>
                  </div>
                )}
                <p className="text-[#00b4a0]/70 text-[11px] font-semibold uppercase tracking-widest">{project.category}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => {
                    const TagIcon = techIcon(tag) ?? Code
                    return (
                      <span key={tag} className="inline-flex items-center gap-1.5 text-xs text-[#00b4a0] bg-[#00b4a0]/10 border border-[#00b4a0]/20 px-2 py-1 rounded-full font-medium">
                        <TagIcon size={12} className="shrink-0" />
                        {tag}
                      </span>
                    )
                  })}
                </div>
                <h3 className="text-white font-bold text-lg leading-snug">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed flex-1">{project.description}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* Show more */}
        {visibleCount < filtered.length && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
              className="border border-white/20 text-white font-semibold px-6 py-2.5 rounded-full hover:bg-white/10 transition-colors text-sm"
            >
              Show More ({filtered.length - visibleCount} remaining)
            </button>
          </div>
        )}

        <p className="text-center text-gray-600 text-xs mt-6">
          Showing {Math.min(visibleCount, filtered.length)} of {filtered.length} projects
        </p>
      </div>
    </section>
  )
}

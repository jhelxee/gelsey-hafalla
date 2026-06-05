import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Lock } from 'lucide-react'
import { projects } from '../data/portfolio'
import FadeIn from './FadeIn'
import RevealText from './RevealText'

const AUTOPLAY_INTERVAL = 4000
const VISIBLE = 3

export default function Projects() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const total = projects.length

  function next() {
    setDirection(1)
    setCurrent((c) => (c + 1) % total)
  }

  function prev() {
    setDirection(-1)
    setCurrent((c) => (c - 1 + total) % total)
  }

  function goTo(i: number) {
    setDirection(i > current ? 1 : -1)
    setCurrent(i)
  }

  useEffect(() => {
    timerRef.current = setTimeout(next, AUTOPLAY_INTERVAL)
    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  }, [current])

  // Build the 3 visible indices: prev, current, next
  const indices = Array.from({ length: VISIBLE }, (_, i) => (current - 1 + i + total) % total)

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 80 : -80, opacity: 0, scale: 0.95 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (d: number) => ({ x: d > 0 ? -80 : 80, opacity: 0, scale: 0.95 }),
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
          <div className="flex items-center gap-2 mb-12 text-gray-500 text-sm">
            <Lock size={14} className="text-[#00b4a0] shrink-0" />
            <span>All projects listed were created under a <span className="text-gray-400 font-medium">Non-Disclosure Agreement</span>. Details shared are limited to scope and impact only.</span>
          </div>
        </FadeIn>

        {/* Carousel */}
        <div className="relative">
          <AnimatePresence mode="popLayout" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="grid sm:grid-cols-3 gap-6"
            >
              {indices.map((idx, pos) => {
                const project = projects[idx]
                const isCenter = pos === 1
                return (
                  <motion.div
                    key={project.title}
                    className={`bg-white/5 rounded-xl border p-6 flex flex-col gap-3 transition-all duration-300 ${
                      isCenter
                        ? 'border-[#00b4a0]/40 shadow-lg shadow-[#00b4a0]/10 scale-100'
                        : 'border-white/10 opacity-60 scale-95'
                    }`}
                  >
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs text-[#00b4a0] bg-[#00b4a0]/10 border border-[#00b4a0]/20 px-2 py-1 rounded-full font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-white font-bold text-lg leading-snug">{project.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed flex-1">{project.description}</p>
                  </motion.div>
                )
              })}
            </motion.div>
          </AnimatePresence>

          {/* Prev / Next buttons */}
          <button
            onClick={prev}
            className="absolute -left-5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-[#00b4a0]/50 hover:bg-[#00b4a0]/10 flex items-center justify-center transition-all"
            aria-label="Previous project"
          >
            <ChevronLeft size={18} className="text-white" />
          </button>
          <button
            onClick={next}
            className="absolute -right-5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-[#00b4a0]/50 hover:bg-[#00b4a0]/10 flex items-center justify-center transition-all"
            aria-label="Next project"
          >
            <ChevronRight size={18} className="text-white" />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-1.5 mt-8 flex-wrap">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to project ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === current ? 'w-5 h-1.5 bg-[#00b4a0]' : 'w-1.5 h-1.5 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>

        {/* Counter */}
        <p className="text-center text-gray-600 text-xs mt-3">{current + 1} / {total}</p>
      </div>
    </section>
  )
}

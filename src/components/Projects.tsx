import { motion } from 'framer-motion'
import { projects } from '../data/portfolio'
import FadeIn from './FadeIn'
import RevealText from './RevealText'

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <p className="text-[#00b4a0] text-xs font-semibold tracking-[0.2em] uppercase mb-2">What I've built</p>
        </FadeIn>
        <RevealText className="text-3xl md:text-4xl font-black text-white mb-16">Projects</RevealText>

        <div className="grid sm:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <FadeIn key={project.title} delay={i * 0.1} variant="zoom">
              <motion.div
                className="bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-[#00b4a0]/40 hover:shadow-lg transition-all group h-full"
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
              >
                <div className="overflow-hidden h-52">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs text-[#00b4a0] bg-[#00b4a0]/10 border border-[#00b4a0]/20 px-2 py-1 rounded-full font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

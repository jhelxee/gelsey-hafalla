import { Code, Monitor, Briefcase, Star } from 'lucide-react'
import { motion } from 'framer-motion'
import { skills } from '../data/portfolio'
import FadeIn from './FadeIn'
import RevealText from './RevealText'

const iconMap: Record<string, React.ElementType> = { Code, Monitor, Briefcase, Star }

const allSkills = skills.flatMap((g) => g.items)
const half = Math.ceil(allSkills.length / 2)
const row1 = allSkills.slice(0, half)
const row2 = allSkills.slice(half)

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#111]">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <p className="text-[#00b4a0] text-xs font-semibold tracking-[0.2em] uppercase mb-2">What I bring</p>
        </FadeIn>
        <RevealText className="text-3xl md:text-4xl font-black text-white mb-16">Skills</RevealText>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skills.map((skillGroup, i) => {
            const Icon = iconMap[skillGroup.icon] ?? Code
            return (
              <FadeIn key={skillGroup.category} delay={i * 0.1} variant="zoom">
                <motion.div
                  className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-[#00b4a0]/50 hover:shadow-md transition-all group h-full"
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                >
                  <div className="w-10 h-10 rounded-lg bg-[#00b4a0]/10 flex items-center justify-center mb-4 group-hover:bg-[#00b4a0]/20 transition-colors">
                    <Icon size={20} className="text-[#00b4a0]" />
                  </div>
                  <h3 className="text-white font-semibold mb-4">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((item) => (
                      <span key={item} className="text-xs text-gray-400 bg-white/5 border border-white/10 px-2 py-1 rounded-md">
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </FadeIn>
            )
          })}
        </div>
      </div>

      <FadeIn>
        <div className="space-y-3 overflow-hidden">
          <div className="marquee-track flex overflow-hidden">
            <div className="animate-marquee-left flex gap-3 flex-shrink-0">
              {[...row1, ...row1].map((skill, i) => (
                <span key={i} className="whitespace-nowrap text-sm text-gray-300 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="marquee-track flex overflow-hidden">
            <div className="animate-marquee-right flex gap-3 flex-shrink-0">
              {[...row2, ...row2].map((skill, i) => (
                <span key={i} className="whitespace-nowrap text-sm text-[#00b4a0] bg-[#00b4a0]/10 border border-[#00b4a0]/20 px-4 py-2 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}

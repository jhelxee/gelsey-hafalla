import { Code2, Users, Headset, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import { services } from '../data/portfolio'
import FadeIn from './FadeIn'
import RevealText from './RevealText'

const iconMap: Record<string, React.ElementType> = { Code2, Users, Headset, Sparkles }

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <p className="text-[#00b4a0] text-xs font-semibold tracking-[0.2em] uppercase mb-2">Why work with me</p>
        </FadeIn>
        <RevealText className="text-3xl md:text-4xl font-black text-white mb-4">What I Bring to Your Team</RevealText>
        <FadeIn>
          <p className="text-gray-400 mb-16 max-w-2xl">
            Nearly two decades of shipping software and leading people — not just one or the other.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Code2
            return (
              <FadeIn key={service.title} delay={i * 0.1} variant="zoom">
                <motion.div
                  className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-[#00b4a0]/50 hover:shadow-md transition-all group h-full"
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                >
                  <div className="w-10 h-10 rounded-lg bg-[#00b4a0]/10 flex items-center justify-center mb-4 group-hover:bg-[#00b4a0]/20 transition-colors">
                    <Icon size={20} className="text-[#00b4a0]" />
                  </div>
                  <h3 className="text-white font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                </motion.div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}

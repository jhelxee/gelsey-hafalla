import { Mail, Phone, MapPin, Globe } from 'lucide-react'
import { motion } from 'framer-motion'
import { personalInfo, aboutMe } from '../data/portfolio'
import FadeIn from './FadeIn'
import RevealText from './RevealText'

const contactItems = [
  { icon: Mail, label: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { icon: Phone, label: personalInfo.phone, href: `tel:${personalInfo.phone}` },
  { icon: MapPin, label: personalInfo.address, href: '#' },
  { icon: Globe, label: 'LinkedIn', href: personalInfo.linkedin },
  { icon: Globe, label: 'GitHub', href: personalInfo.github },
  { icon: Globe, label: 'Portfolio', href: personalInfo.portfolio },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-[#111]">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <p className="text-[#00b4a0] text-xs font-semibold tracking-[0.2em] uppercase mb-2">Get to know me</p>
        </FadeIn>
        <RevealText className="text-3xl md:text-4xl font-black text-white mb-16">About Me</RevealText>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <FadeIn direction="left">
            <motion.div
              className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-white/10 shadow-lg"
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            >
              <img src={personalInfo.photo} alt="Gelsey T. Hafalla" className="w-full h-full object-cover" />
            </motion.div>
          </FadeIn>

          <FadeIn direction="right" delay={0.1}>
            <div>
              <div className="space-y-4 mb-10">
                {aboutMe.split('\n\n').map((para, i) => (
                  <p key={i} className="text-gray-400 leading-relaxed">{para}</p>
                ))}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {contactItems.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-3 text-gray-400 hover:text-[#00b4a0] transition-colors text-sm group"
                  >
                    <span className="w-8 h-8 rounded-md bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#00b4a0]/10 transition-colors flex-shrink-0">
                      <Icon size={15} className="text-[#00b4a0]" />
                    </span>
                    <span className="truncate">{label}</span>
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

import { Mail, Phone, MapPin, Globe } from 'lucide-react'
import { motion } from 'framer-motion'
import { personalInfo, aboutMe, experiences } from '../data/portfolio'
import { roleIcon } from '../lib/roleIcons'
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

const careerHighlights = experiences[0].roles.map((role) => ({
  title: role.title,
  period: role.period,
  Icon: roleIcon(role.title),
}))

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-[#111]">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <p className="text-[#00b4a0] text-xs font-semibold tracking-[0.2em] uppercase mb-2">Get to know me</p>
        </FadeIn>
        <RevealText className="text-3xl md:text-4xl font-black text-white mb-16">About Me</RevealText>

        <div className="grid md:grid-cols-2 gap-16 items-start mb-16">
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

        {/* At a Glance snapshot */}
        <div className="border-t border-white/10 pt-12">
          <FadeIn><h3 className="text-[#00b4a0] font-semibold text-sm uppercase tracking-widest mb-6">Career Highlights</h3></FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {careerHighlights.map(({ title, period, Icon }, i) => (
              <FadeIn key={title} delay={i * 0.06} variant="zoom">
                <motion.div
                  className="bg-white/5 rounded-xl border border-white/10 hover:border-[#00b4a0]/50 hover:shadow-md transition-all p-5 h-full"
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                >
                  <span className="w-10 h-10 rounded-lg bg-[#00b4a0]/10 border border-[#00b4a0]/20 flex items-center justify-center mb-4">
                    <Icon size={18} className="text-[#00b4a0]" />
                  </span>
                  <p className="text-white font-semibold text-sm">{title}</p>
                  <p className="text-gray-500 text-xs mt-1">{period}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

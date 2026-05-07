import { Mail, Phone, MapPin, Globe } from 'lucide-react'
import { personalInfo } from '../data/portfolio'
import FadeIn from './FadeIn'
import RevealText from './RevealText'

const contactItems = [
  { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { icon: Phone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
  { icon: MapPin, label: 'Location', value: personalInfo.address, href: '#' },
  { icon: Globe, label: 'LinkedIn', value: 'gelsey-hafalla', href: personalInfo.linkedin },
  { icon: Globe, label: 'GitHub', value: 'gelseyhafalla', href: personalInfo.github },
  { icon: Globe, label: 'Portfolio', value: 'gelsey-hafalla-profilev2.vercel.app', href: personalInfo.portfolio },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <p className="text-[#00b4a0] text-xs font-semibold tracking-[0.2em] uppercase mb-2">Get in touch</p>
        </FadeIn>
        <RevealText className="text-3xl md:text-4xl font-black text-white mb-4">Contact</RevealText>
        <FadeIn>
          <p className="text-gray-400 mb-16 max-w-xl">
            Open to new opportunities. Feel free to reach out through any of the channels below.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
          {contactItems.map(({ icon: Icon, label, value, href }, i) => (
            <FadeIn key={label} delay={i * 0.07}>
              <a
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="bg-white/5 rounded-xl p-5 border border-white/10 hover:border-[#00b4a0]/50 hover:shadow-md transition-all flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#00b4a0]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#00b4a0]/20 transition-colors">
                  <Icon size={18} className="text-[#00b4a0]" />
                </div>
                <div className="min-w-0">
                  <p className="text-gray-500 text-xs mb-0.5">{label}</p>
                  <p className="text-white text-sm font-medium truncate">{value}</p>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Gelsey T. Hafalla. All rights reserved.</p>
            <p>Built with React + TypeScript</p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

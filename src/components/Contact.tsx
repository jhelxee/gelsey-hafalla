import { Mail, Phone, MapPin, Globe } from 'lucide-react'
import { personalInfo } from '../data/portfolio'
import FadeIn from './FadeIn'
import RevealText from './RevealText'

const contactItems = [
  { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { icon: Phone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
  { icon: MapPin, label: 'Location', value: personalInfo.address, href: '#' },
  { icon: Globe, label: 'LinkedIn', value: 'gelsey-hafalla', href: personalInfo.linkedin },
  { icon: Globe, label: 'GitHub', value: 'jhelxee', href: personalInfo.github },
  { icon: Globe, label: 'Portfolio', value: 'gelsey-hafalla.vercel.app', href: personalInfo.portfolio },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <p className="text-[#00b4a0] text-xs font-semibold tracking-[0.2em] uppercase mb-2">Get in touch</p>
        </FadeIn>
        <RevealText className="text-3xl md:text-4xl font-black text-white mb-16">Contact</RevealText>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          {/* Left — photo + CTA */}
          <FadeIn direction="left">
            <div className="relative w-fit mx-auto md:mx-0">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-[#00b4a0]/30 via-[#00b4a0]/10 to-transparent blur-2xl" />
              <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                <img src={personalInfo.photo} alt="Gelsey T. Hafalla" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 bg-[#111] border border-white/10 rounded-full px-4 py-1.5 shadow-lg whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                <span className="text-xs text-gray-300 font-medium">Open to Full-Time &amp; Freelance Work</span>
              </div>
            </div>
          </FadeIn>

          {/* Right — CTA copy + links */}
          <FadeIn direction="right" delay={0.1}>
            <div>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-4">Let's build something reliable together.</h3>
              <p className="text-gray-400 mb-8 max-w-xl leading-relaxed">
                Whether you need a full-stack developer, a team lead who ships on schedule, or dependable technical support — I'm open to new opportunities. Reach out through any channel below, or grab my resume.
              </p>
              <a
                href={personalInfo.resume}
                download
                className="inline-block bg-[#00b4a0] text-white font-semibold px-6 py-2.5 rounded-full hover:bg-[#009e8c] transition-colors text-sm mb-10"
              >
                ↓ Download CV
              </a>

              <div className="grid sm:grid-cols-2 gap-3">
                {contactItems.map(({ icon: Icon, label, value, href }, i) => (
                  <FadeIn key={label} delay={i * 0.06}>
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-[#00b4a0]/50 hover:shadow-md transition-all flex items-center gap-3 group"
                    >
                      <div className="w-9 h-9 rounded-lg bg-[#00b4a0]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#00b4a0]/20 transition-colors">
                        <Icon size={16} className="text-[#00b4a0]" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-gray-500 text-xs mb-0.5">{label}</p>
                        <p className="text-white text-sm font-medium truncate">{value}</p>
                      </div>
                    </a>
                  </FadeIn>
                ))}
              </div>
            </div>
          </FadeIn>
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

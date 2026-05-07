import { Briefcase } from 'lucide-react'
import { experiences } from '../data/portfolio'
import FadeIn from './FadeIn'
import RevealText from './RevealText'

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <p className="text-[#00b4a0] text-xs font-semibold tracking-[0.2em] uppercase mb-2">Career journey</p>
        </FadeIn>
        <RevealText className="text-3xl md:text-4xl font-black text-white mb-16">Work Experience</RevealText>

        {experiences.map((exp) => (
          <div key={exp.company} className="mb-12">
            <FadeIn>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-[#00b4a0]/10 border border-[#00b4a0]/20 flex items-center justify-center flex-shrink-0">
                  <Briefcase size={18} className="text-[#00b4a0]" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">{exp.company}</h3>
                  <p className="text-gray-500 text-sm">{exp.period}</p>
                </div>
              </div>
            </FadeIn>

            <div className="ml-5 border-l-2 border-[#00b4a0]/20 pl-8 space-y-10">
              {exp.roles.map((role, i) => (
                <FadeIn key={role.title} delay={i * 0.08}>
                  <div className="relative">
                    <div className="absolute -left-[2.65rem] top-1 w-3 h-3 rounded-full bg-[#00b4a0] border-2 border-[#0d0d0d]" />
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                      <h4 className="text-white font-semibold">{role.title}</h4>
                      <span className="text-xs text-[#00b4a0] bg-[#00b4a0]/10 border border-[#00b4a0]/20 px-3 py-1 rounded-full font-medium w-fit">
                        {role.period}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {role.bullets.map((bullet, j) => (
                        <li key={j} className="text-gray-400 text-sm flex gap-2">
                          <span className="text-[#00b4a0] mt-1 flex-shrink-0">›</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

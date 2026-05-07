import { GraduationCap, BookOpen } from 'lucide-react'
import { education, trainings } from '../data/portfolio'
import FadeIn from './FadeIn'
import RevealText from './RevealText'

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 bg-[#111]">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <p className="text-[#00b4a0] text-xs font-semibold tracking-[0.2em] uppercase mb-2">Background</p>
        </FadeIn>
        <RevealText className="text-3xl md:text-4xl font-black text-white mb-16">Education & Training</RevealText>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <FadeIn><h3 className="text-[#00b4a0] font-semibold text-sm uppercase tracking-widest mb-6">Education</h3></FadeIn>
            <div className="space-y-4">
              {education.map((edu, i) => (
                <FadeIn key={edu.school} delay={i * 0.1}>
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10 flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-lg bg-[#00b4a0]/10 flex items-center justify-center flex-shrink-0">
                      <GraduationCap size={20} className="text-[#00b4a0]" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{edu.school}</h4>
                      <p className="text-gray-400 text-sm mt-1">{edu.degree}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          <div>
            <FadeIn delay={0.05}><h3 className="text-[#00b4a0] font-semibold text-sm uppercase tracking-widest mb-6">Seminars & Training</h3></FadeIn>
            <div className="space-y-4">
              {trainings.map((training, i) => (
                <FadeIn key={training.institution} delay={i * 0.1 + 0.05}>
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10 flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-lg bg-[#00b4a0]/10 flex items-center justify-center flex-shrink-0">
                      <BookOpen size={20} className="text-[#00b4a0]" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{training.institution}</h4>
                      <p className="text-gray-400 text-sm mt-1">{training.course}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

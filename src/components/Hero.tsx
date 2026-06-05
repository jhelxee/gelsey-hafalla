import { useEffect, useRef, useState } from 'react'
import { CheckCircle2, Phone, Mail } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { personalInfo, aboutMe } from '../data/portfolio'
import { Vortex } from './ui/vortex'
import { CardContainer, CardBody, CardItem } from './ui/3d-card'

const valueProps = [
  'Team Leadership',
  'Full Stack Development',
  'Technical Support',
]

function CountUp({ target }: { target: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 1500
    const step = Math.ceil(duration / target)
    const timer = setInterval(() => {
      start += 1
      setCount(start)
      if (start >= target) clearInterval(timer)
    }, step)
    return () => clearInterval(timer)
  }, [inView, target])

  return <span ref={ref}>{count}</span>
}

export default function Hero() {
  const bio = aboutMe.split('\n\n')[0]

  return (
    <section id="hero" className="min-h-screen w-full overflow-hidden">
      <Vortex
        backgroundColor="#0d0d0d"
        baseHue={180}
        particleCount={300}
        baseSpeed={0.0}
        rangeSpeed={0.4}
        baseRadius={0.5}
        rangeRadius={1.5}
        containerClassName="min-h-screen w-full"
        className="flex items-center justify-center"
      >
        <div className="w-full max-w-7xl mx-auto px-8 py-32 flex flex-col md:flex-row items-center gap-16">

          {/* ── Left — text ── */}
          <motion.div
            className="flex-1 min-w-0"
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } } }}
          >
            {/* Available badge */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              className="inline-flex items-center gap-2 border border-white/20 bg-white/5 rounded-full px-4 py-1.5 mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              <span className="text-xs tracking-[0.2em] text-gray-300 uppercase font-medium">Available for Opportunities</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
              className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-4 text-white"
            >
              Gelsey T.{' '}
              <span className="text-[#00b4a0]">Hafalla</span>
            </motion.h1>

            {/* Title */}
            <motion.h2
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              className="text-2xl md:text-3xl font-bold text-gray-300 mb-6"
            >
              Full Stack{' '}
              <span
                className="text-[#00b4a0]"
                style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic' }}
              >
                Web Developer
              </span>
              <span className="cursor-blink text-[#00b4a0] ml-1">|</span>
            </motion.h2>

            {/* Value props */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              className="flex flex-wrap gap-4 mb-6"
            >
              {valueProps.map((prop) => (
                <div key={prop} className="flex items-center gap-2 text-gray-400 text-sm font-medium">
                  <CheckCircle2 size={15} className="text-[#00b4a0] flex-shrink-0" />
                  {prop}
                </div>
              ))}
            </motion.div>

            {/* Bio */}
            <motion.p
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              className="text-gray-400 leading-relaxed mb-8 max-w-lg"
            >
              {bio}
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              className="flex items-center gap-8 mb-10"
            >
              <div>
                <div className="text-3xl font-black text-white"><CountUp target={19} />+</div>
                <div className="text-xs text-gray-500 tracking-widest uppercase mt-1">Years Exp.</div>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div>
                <div className="text-3xl font-black text-white">5+</div>
                <div className="text-xs text-gray-500 tracking-widest uppercase mt-1">Projects</div>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div>
                <div className="text-3xl font-black text-white">12+</div>
                <div className="text-xs text-gray-500 tracking-widest uppercase mt-1">Team Led</div>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <a href="#projects" className="bg-[#00b4a0] text-white font-semibold px-6 py-2.5 rounded-full hover:bg-[#009e8c] transition-colors text-sm">
                View Projects
              </a>
              <a href="#about" className="border border-white/20 text-white font-semibold px-6 py-2.5 rounded-full hover:bg-white/10 transition-colors text-sm">
                About Me
              </a>
              <a href={personalInfo.resume} download className="border border-white/20 text-white font-semibold px-6 py-2.5 rounded-full hover:bg-white/10 transition-colors text-sm">
                ↓ Download CV
              </a>
            </motion.div>

            {/* Contact row */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              className="flex flex-wrap gap-6 text-gray-500 text-sm"
            >
              <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-2 hover:text-[#00b4a0] transition-colors">
                <Phone size={14} />{personalInfo.phone}
              </a>
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 hover:text-[#00b4a0] transition-colors">
                <Mail size={14} />{personalInfo.email}
              </a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#00b4a0] transition-colors">
                github.com/gelseyhafalla
              </a>
            </motion.div>
          </motion.div>

          {/* ── Right — 3D Profile card ── */}
          <motion.div
            className="hidden md:flex flex-shrink-0"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
          >
            <CardContainer containerClassName="py-0">
              <CardBody className="relative w-72 h-80 lg:w-80 lg:h-96 rounded-2xl border border-white/10 bg-white/5 overflow-hidden group/card">
                {/* Photo */}
                <CardItem translateZ={50} className="w-full h-full absolute inset-0">
                  <img
                    src={personalInfo.photo}
                    alt="Gelsey T. Hafalla"
                    className="w-full h-full object-cover object-top"
                  />
                </CardItem>

                {/* Bottom overlay */}
                <CardItem
                  translateZ={80}
                  className="absolute bottom-0 left-0 right-0 px-5 py-4 bg-gradient-to-t from-black/80 to-transparent"
                >
                  <p className="text-white font-bold text-sm">Gelsey T. Hafalla</p>
                  <p className="text-[#00b4a0] text-xs mt-0.5">Full Stack Web Developer</p>
                </CardItem>

                {/* Skill tags */}
                <CardItem
                  translateZ={100}
                  className="absolute top-4 left-4 flex flex-wrap gap-1"
                >
                  {['Vue.js', 'Node.js', 'PHP'].map((tag) => (
                    <span key={tag} className="text-xs text-white bg-black/50 border border-white/20 px-2 py-0.5 rounded-full backdrop-blur-sm">
                      {tag}
                    </span>
                  ))}
                </CardItem>
              </CardBody>
            </CardContainer>
          </motion.div>

        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600 z-10">
          <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
          <motion.div
            className="w-px h-8 bg-gray-600"
            animate={{ scaleY: [1, 0.3, 1], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </Vortex>
    </section>
  )
}

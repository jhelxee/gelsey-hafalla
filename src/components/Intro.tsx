import { useEffect } from 'react'
import { motion } from 'framer-motion'

interface IntroProps {
  onComplete: () => void
}

export default function Intro({ onComplete }: IntroProps) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 3000)
    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0d0d0d]"
      initial={{ opacity: 1 }}
      exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
        className="mb-6"
      >
        <div className="w-20 h-20 rounded-2xl bg-[#00b4a0] flex items-center justify-center shadow-lg">
          <span className="text-white font-black text-2xl tracking-tight">GH</span>
        </div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-3xl font-black text-white tracking-tight"
      >
        Gelsey <span className="text-[#00b4a0]">Hafalla</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-gray-500 text-sm mt-2 tracking-[0.15em] uppercase"
      >
        Full Stack Web Developer
      </motion.p>

      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 h-[2px] bg-[#00b4a0] rounded-full"
        initial={{ width: 0 }}
        animate={{ width: 160 }}
        transition={{ delay: 0.8, duration: 2, ease: 'linear' }}
      />
    </motion.div>
  )
}

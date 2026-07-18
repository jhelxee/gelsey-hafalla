import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { personalInfo } from '../data/portfolio'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0d0d0d]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#00b4a0] flex items-center justify-center">
            <span className="text-white font-black text-xs tracking-tight">GH</span>
          </div>
          <span className="text-white font-bold text-sm">
            Gelsey <span className="text-[#00b4a0]">Hafalla</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors font-medium">
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href={personalInfo.resume} download className="text-sm bg-[#00b4a0] text-white font-semibold px-5 py-2 rounded-full hover:bg-[#009e8c] transition-colors">
              Download CV
            </a>
          </li>
        </ul>

        <button className="md:hidden text-gray-400" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#111] border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-gray-300 hover:text-white text-sm font-medium" onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href={personalInfo.resume} download className="text-sm bg-[#00b4a0] text-white font-semibold px-5 py-2 rounded-full text-center hover:bg-[#009e8c] transition-colors">
            Download CV
          </a>
        </div>
      )}
    </nav>
  )
}

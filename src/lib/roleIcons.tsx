import { Code2, Headset, Briefcase, type LucideIcon } from 'lucide-react'

export function roleIcon(title: string): LucideIcon {
  if (title.includes('Developer')) return Code2
  if (title.includes('Technical Support') || title.includes('Customer Service')) return Headset
  return Briefcase
}

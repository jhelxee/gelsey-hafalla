import { Users, Code2, Headset, MessageCircle, Briefcase, type LucideIcon } from 'lucide-react'

export function roleIcon(title: string): LucideIcon {
  if (title.includes('Team Leader')) return Users
  if (title.includes('Developer')) return Code2
  if (title.includes('Chat Moderator')) return MessageCircle
  if (title.includes('Technical Support') || title.includes('Customer Service')) return Headset
  return Briefcase
}

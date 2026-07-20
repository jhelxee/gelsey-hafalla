import type { IconType } from 'react-icons'
import {
  SiJavascript,
  SiJquery,
  SiHtml5,
  SiCss,
  SiBootstrap,
  SiVuedotjs,
  SiVuetify,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiPhp,
  SiSocketdotio,
  SiPython,
  SiMysql,
  SiGithub,
  SiGitlab,
  SiNpm,
  SiYarn,
  SiTailwindcss,
  SiVite,
} from 'react-icons/si'

const techIconMap: Record<string, IconType> = {
  JavaScript: SiJavascript,
  jQuery: SiJquery,
  HTML: SiHtml5,
  CSS: SiCss,
  Bootstrap: SiBootstrap,
  'Vue.js': SiVuedotjs,
  Vuetify: SiVuetify,
  React: SiReact,
  'Node.js': SiNodedotjs,
  'Express.js': SiExpress,
  PHP: SiPhp,
  'Socket.io': SiSocketdotio,
  Python: SiPython,
  MySQL: SiMysql,
  GitHub: SiGithub,
  GitLab: SiGitlab,
  NPM: SiNpm,
  Yarn: SiYarn,
  'Tailwind CSS': SiTailwindcss,
  Vite: SiVite,
}

export function techIcon(name: string): IconType | undefined {
  return techIconMap[name]
}

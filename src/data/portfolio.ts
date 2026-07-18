export const personalInfo = {
  name: 'Gelsey T. Hafalla',
  title: 'Full Stack Web Developer | Team Leader | Technical Support | Customer Support | Virtual Assistant | Chat Moderator',
  email: 'jhelxee028@gmail.com',
  phone: '+639192253040',
  address: '0101 Purok 7 Bacao II, General Trias City, Cavite',
  linkedin: 'https://www.linkedin.com/in/gelsey-hafalla',
  github: 'https://github.com/jhelxee',
  portfolio: 'https://gelsey-hafalla.vercel.app/',
  photo: '/assets/profile.png',
  resume: '/assets/resume.pdf',
}

export const valueProposition =
  'I turn operational chaos into automated systems — 24+ internal platforms shipped, teams of up to 12 led, and on-time delivery every cycle.'

export const stats = {
  years: 19,
  projects: 25,
  teamLed: 12,
  systems: 24,
}

export const aboutMe = `Full Stack Web Developer with proven experience in web application development, team leadership, technical support, and customer service. Skilled in both frontend and backend technologies, I build robust solutions while leading cross-functional teams to deliver projects on time.

With a background in chat moderation and technical support, I excel at maintaining positive user experiences, resolving complex issues, and delivering clear, client-focused communication. I am driven to leverage my diverse skill set in innovative projects while continuously growing in the fast-paced tech industry.`

export const experiences = [
  {
    company: 'HRD Singapore PTE LTD',
    period: 'July 2007 – Present',
    roles: [
      {
        title: 'Team Leader',
        period: '2023 – Current',
        bullets: [
          'Led a team of 12 full-stack developers, delivering projects on schedule and reducing workflow bottlenecks by implementing structured task monitoring.',
          'Monitored development progress across a 12-member team, ensuring on-time project delivery and rapid resolution of blockers.',
          "Managed administration-related issues, including addressing programmers' concerns that require immediate action to ensure a smooth workflow on the developer side.",
          'Team Leader while also serving as a full-time web developer.',
        ],
      },
      {
        title: 'Full Stack Web Developer',
        period: '2015 – 2023',
        bullets: [
          'Developed and maintained 25+ enterprise web applications using PHP, Node.js, Vue.js, and Express.js — supporting daily operations across multiple departments.',
          'Handle the system maintenance and modification request.',
          'Select programming languages, tools, database and platform.',
          'Develop and document style guidelines for website content.',
          'Recommend and implement performance and process improvements.',
          'Handle the checking of system errors, including troubleshooting problems.',
          'Maintain MySQL Database.',
        ],
      },
      {
        title: 'Technical Support',
        period: '2012 – 2015',
        bullets: [
          'Manage sending and receiving of confirmation with KSK Japan side for effective communication.',
          'Handle detection of system errors and implement necessary modification for smooth operation.',
          'Completed intensive training to develop expertise in BMOS, Walk-in Home, Architrend and Architrend Zero Software.',
        ],
      },
      {
        title: 'Customer Service',
        period: '2007 – 2012',
        bullets: [
          'Manage sending and receiving of confirmations with the Japan side via email for accurate and timely communication.',
          'Manage both receiving and making confirmation calls to ensure clear communication and accurate updates.',
          'Oversee confirmation verification and provide timely feedback on status updates.',
          'Manage error detection and coordinate necessary corrections to maintain accuracy and quality.',
          'Monitor confirmation status, conduct follow-ups and provide continuous feedback to ensure timely resolution.',
        ],
      },
      {
        title: 'Chat Moderator',
        period: 'January 2025 – October 2025',
        bullets: [
          'Actively observe chat conversations to ensure compliance with community standards and guidelines.',
          'Implement and uphold community rules and policies to maintain a respectful and engaging environment.',
          'Foster a positive atmosphere by engaging with users, answering questions, and encouraging constructive discussions.',
        ],
      },
    ],
  },
]

export type Service = {
  icon: string
  title: string
  description: string
}

export const services: Service[] = [
  {
    icon: 'Code2',
    title: 'Full-Stack Web Development',
    description:
      'End-to-end builds with Vue.js, PHP, Node.js, Express.js and MySQL — from database design to a production-ready UI, with 25+ enterprise applications shipped.',
  },
  {
    icon: 'Users',
    title: 'Team Leadership & Delivery',
    description:
      'Led a 12-person development team using structured task monitoring that keeps projects on schedule and blockers resolved fast.',
  },
  {
    icon: 'Headset',
    title: 'Technical & Customer Support',
    description:
      '18+ years across technical support, customer service, and chat moderation — resolving issues clearly and keeping users and stakeholders confident.',
  },
  {
    icon: 'Sparkles',
    title: 'AI-Assisted Development',
    description:
      'Uses Claude and Perplexity daily to accelerate debugging, code review, and documentation — shipping reliable systems faster without cutting corners.',
  },
]

export const skills = [
  {
    category: 'Programming',
    icon: 'Code',
    items: [
      'CSS', 'HTML', 'JavaScript', 'jQuery',
      'Vue.js', 'Vuetify',
      'Node.js', 'Express.js', 'Socket.io', 'PHP', 'Laravel',
      'MySQL', 'MSSQL', 'CouchDB',
      'Git', 'GitHub', 'GitLab',
      'Nulab (Backlog)', 'Visual Studio Code', 'Notepad++', 'REST API',
    ],
  },
  {
    category: 'Virtual Assistant',
    icon: 'Monitor',
    items: [
      'Virtual Assistance', 'Executive Assistant',
      'Basic Graphic Design', 'Graphic Design & Branding',
      'Video Editing (Capcut & Canva)',
      'Lead Generation', 'Email Marketing',
      'Facebook Ads Marketing', 'Social Media Management',
    ],
  },
  {
    category: 'Administration',
    icon: 'Briefcase',
    items: [
      'MS Word', 'MS Excel', 'MS PowerPoint',
      'MS Teams', 'Microsoft 365', 'Photoshop', 'Vectorworks',
    ],
  },
  {
    category: 'Additional Skills',
    icon: 'Star',
    items: [
      'Katakana & Hiragana reading',
      'Basic Kanji reading',
      'Autocad', 'Architrend', 'Architrend Zero',
      'DraftSight', 'BMOS', 'Walk-in Home',
    ],
  },
  {
    category: 'AI-Assisted Development',
    icon: 'Sparkles',
    items: [
      'Claude', 'Perplexity',
      'Prompt Engineering',
      'AI Code Review & Debugging',
    ],
  },
]

export type ProjectCategory = 'Centralized Systems' | 'Automation & Monitoring' | 'Data & Reporting' | 'Public'

export const projectCategories: ProjectCategory[] = [
  'Centralized Systems',
  'Automation & Monitoring',
  'Data & Reporting',
  'Public',
]

type Project = {
  title: string
  category: ProjectCategory
  tags: string[]
  description: string
  image?: string
  link?: string
}

export const projects: Project[] = [
  {
    title: 'BeshyBakes',
    category: 'Public',
    tags: ['React', 'Tailwind CSS', 'Vite'],
    description:
      'Created a customer-focused bakery website that highlights specialty baked goods and simplifies online ordering for cookies, cupcakes, and loaf cakes.',
    image: '/assets/projects/beshybakes-main.png',
    link: 'https://beshybakes.vercel.app/',
  },
  {
    title: 'BeshyBakes Twist and Treats',
    category: 'Public',
    tags: ['React', 'Tailwind CSS', 'Vite'],
    description:
      'Developed a responsive bakery/cafe website with online ordering, crafted to showcase baked products, balloon designing, and catering services while delivering a smooth and user-friendly customer experience.',
    image: '/assets/projects/beshybakes.png',
    link: 'https://beshy-bakes.vercel.app/',
  },
  {
    title: 'Centralized System',
    category: 'Centralized Systems',
    tags: ['Web App', 'Automation', 'Full Stack'],
    description:
      'Built a centralized web system that automatically captures employee performance on every login, automates checklist collection, and integrates directly with existing systems — eliminating dependency on multiple tools and giving teams a single platform to manage and track everything in real time.',
  },
  {
    title: 'Centralized Master',
    category: 'Centralized Systems',
    tags: ['Management', 'Real-time', 'Full Stack'],
    description:
      'Built an integrated management system that automates masterlist maintenance and provides real-time tracking of employee violations, transfers, PRF requisitions, and computer asset information — eliminating manual updates and improving data accuracy across departments.',
  },
  {
    title: 'Bundenban Shiyousho',
    category: 'Data & Reporting',
    tags: ['Automation', 'Data Processing', 'Backend'],
    description:
      'Built a system that automatically aggregates all required data sources to enable accurate and automated generation of Bundenban serial indicators — eliminating manual lookups and reducing processing time.',
  },
  {
    title: 'Data Gathering',
    category: 'Data & Reporting',
    tags: ['Data Export', 'CSV', 'Multi-DB'],
    description:
      'Built a system that extracts and consolidates required data from multiple databases into a structured CSV export — streamlining data collection, reducing manual effort, and enabling accurate cross-system reporting.',
  },
  {
    title: 'Kansen Form',
    category: 'Automation & Monitoring',
    tags: ['Automation', 'Form Builder', 'Multi-DB'],
    description:
      'Engineered an end-to-end proposal automation system that dynamically pulls and validates data from multiple databases to auto-populate kansen proposal forms — delivering fully prepared, error-free submissions to the Japan side and eliminating the manual coordination that previously slowed the entire proposal pipeline.',
  },
  {
    title: 'Rechecking',
    category: 'Automation & Monitoring',
    tags: ['Monitoring', 'Data Processing', 'Workflow'],
    description:
      'Built a dedicated monitoring and dispatch system for plan production rechecks — tracking all items flagged for review, consolidating the required data, and ensuring it reaches the right teams without delay, reducing production hold-ups caused by missing or late rechecking information.',
  },
  {
    title: 'Floor Holing',
    category: 'Centralized Systems',
    tags: ['Centralized', 'Multi-Department', 'Workflow'],
    description:
      'Built a cross-departmental centralized confirmation system that unifies floor holing records from all teams into a single, always-current list — replacing scattered, department-specific tracking with one shared platform that keeps every stakeholder aligned in real time.',
  },
  {
    title: 'Computer Information',
    category: 'Automation & Monitoring',
    tags: ['Asset Management', 'Automation', 'Email Alerts'],
    description:
      'Built a comprehensive IT asset registry that documents each user\'s computer specifications and software licenses — with an automated conflict detection engine that sends immediate email alerts whenever a discrepancy is found between individual records and the master database, keeping IT assets audit-ready at all times.',
  },
  {
    title: 'Initial Bar',
    category: 'Automation & Monitoring',
    tags: ['Scheduling', 'Monitoring', 'Planning'],
    description:
      'Built a production scheduling dashboard that provides process-level visibility into plan timelines — displaying the scheduling status of every plan per production stage so teams can instantly identify bottlenecks, reprioritize work, and keep the entire production schedule on track.',
  },
  {
    title: 'Pending Plans',
    category: 'Centralized Systems',
    tags: ['Automation', 'Email Alerts', 'Centralized'],
    description:
      'Built a multi-team centralized monitoring hub for plans awaiting confirmation, featuring automated email dispatch and scheduled follow-up reminders — ensuring no pending plan falls through the cracks and significantly reducing the manual coordination burden on every team that relies on confirmation-dependent workflows.',
  },
  {
    title: 'Shitaji Unit',
    category: 'Automation & Monitoring',
    tags: ['Monitoring', 'Supply Chain', 'Tracking'],
    description:
      'Built a supplier plan tracking system that monitors the receipt and real-time status of every plan arriving from external suppliers — giving production teams immediate visibility into incoming plan readiness and enabling proactive response to delays before they impact the production schedule.',
  },
  {
    title: 'Stop Plan',
    category: 'Automation & Monitoring',
    tags: ['Automation', 'Quality Control', 'Validation'],
    description:
      'Built an automated plan validation engine that evaluates each plan against a configurable set of item-specific qualification rules — immediately identifying and flagging non-conforming plans before they enter production, preventing quality escapes, reducing rework, and enforcing consistent standards across all plan types.',
  },
  {
    title: 'Kansen Checklist',
    category: 'Data & Reporting',
    tags: ['Automation', 'Price Management', 'Multi-DB'],
    description:
      'Built a pricing intelligence system that monitors price brackets by type and automatically compiles categorized price lists based on bracket rules — with live database indicators that keep pricing data consistent across all records and eliminate the manual cross-referencing that previously caused pricing discrepancies.',
  },
  {
    title: 'ICAD Feedback',
    category: 'Data & Reporting',
    tags: ['Data Collection', 'Feedback System', 'Reporting'],
    description:
      'Built a structured feedback aggregation system that captures, categorizes, and centralizes every issue raised by plan production against ICAD software — transforming scattered informal problem reports into a searchable, trackable log that drives accountability and informs targeted software improvement decisions.',
  },
  {
    title: 'Wiring Design',
    category: 'Automation & Monitoring',
    tags: ['Automation', 'Checklist', 'Plan Monitoring'],
    description:
      'Built a plan intake and processing system for wiring design that monitors incoming received plans and automatically compiles the full checklist and all required item data upon receipt — removing the manual documentation step entirely and ensuring every plan arrives at production fully prepared and verified.',
  },
  {
    title: 'PS5 Denki',
    category: 'Automation & Monitoring',
    tags: ['Automation', 'Checklist', 'Plan Monitoring'],
    description:
      'Built a dedicated monitoring system for PS5 Denki plans that automatically generates complete checklists and all required item-specific data the moment a plan is received — standardizing the documentation process, eliminating manual preparation, and ensuring each plan is production-ready from arrival.',
  },
  {
    title: 'PS5 Denki Coverpage',
    category: 'Data & Reporting',
    tags: ['Automation', 'PDF Export', 'Multi-DB'],
    description:
      'Built a document generation system that pulls structured data from multiple source databases to automatically produce and serve downloadable PDF cover pages — turning a multi-step manual export process into an on-demand, one-click operation with database-accurate output every time.',
  },
  {
    title: 'Electrical 1',
    category: 'Centralized Systems',
    tags: ['Centralized', 'Automation', 'Multi-Team'],
    description:
      'Built an enterprise-scale centralized platform deployed across 10 teams that automates checklist aggregation and serves as the unified command center for electrical plan monitoring — consolidating what were previously 10 separate workflows into one synchronized, always-current view of plan status across all teams.',
  },
  {
    title: 'Electrical 2',
    category: 'Centralized Systems',
    tags: ['Centralized', 'Automation', 'Multi-Team'],
    description:
      'Built a high-capacity centralized system serving 12 teams simultaneously, combining automated checklist collection with comprehensive plan monitoring — providing organization-wide visibility into electrical plan progress while eliminating duplicate tracking efforts and ensuring all teams operate from the same live data.',
  },
  {
    title: 'Wire Route Jiku',
    category: 'Automation & Monitoring',
    tags: ['Automation', 'Checklist', 'Plan Monitoring'],
    description:
      'Built a specialized plan monitoring system for wire route plans that automatically generates detailed checklists and compiles all required item-level data upon receipt — ensuring every wire route plan is fully documented and production-ready without any manual checklist preparation.',
  },
  {
    title: 'PS5 Denki Wall',
    category: 'Centralized Systems',
    tags: ['Centralized', 'Automation', 'Multi-Team'],
    description:
      'Built a centralized wall plan monitoring system shared across 4 teams that automates checklist generation and tracks plan status in real time — replacing per-team manual tracking with a single collaborative platform that gives all teams consistent, up-to-date visibility into every wall plan.',
  },
  {
    title: 'PS5 Denki Ceiling',
    category: 'Centralized Systems',
    tags: ['Centralized', 'Automation', 'Multi-Team'],
    description:
      'Built a centralized ceiling plan monitoring system shared across 4 teams that automates checklist collection and provides unified plan status tracking — eliminating redundant per-team documentation and ensuring all teams work from a single authoritative source of ceiling plan data.',
  },
  {
    title: 'Sales and Implementation',
    category: 'Centralized Systems',
    tags: ['Centralized', 'Automation', 'Multi-Team'],
    description:
      'Built a centralized monitoring platform used across 8 teams that automates checklist gathering and tracks the full lifecycle of sales and implementation plans — unifying team visibility, reducing coordination overhead, and ensuring every plan progresses through each stage with complete, automatically collected documentation.',
  },
  {
    title: 'Work Guide',
    category: 'Data & Reporting',
    tags: ['Training', 'Documentation', 'Onboarding'],
    description:
      'Built a structured digital training reference system that centralizes all manuals, procedures, and tools needed to onboard newly hired staff — giving new team members a single organized resource throughout training and reducing the time and effort required to bring new developers fully up to speed.',
  },
  {
    title: 'Main Database',
    category: 'Centralized Systems',
    tags: ['Core System', 'Automation', 'Multi-System'],
    description:
      'Built the master data infrastructure that serves as the operational core for the entire plan production ecosystem — centralizing all information consumed by every connected system, automatically supplying checklist data, pushing live status updates to plan production, triggering email alerts when database records conflict with floor plans, and dispatching automated reminders for urgent and overdue plans. Every system in plan production depends on this database, making it the single most critical component in the production technology stack.',
  },
]

export const education = [
  {
    school: 'Montessori Professional College (Imus Campus)',
    degree: 'Degree of Science in Computer Science',
    icon: 'GraduationCap',
  },
]

export const trainings = [
  {
    institution: 'Virtual Assist Online',
    course: 'Virtual Assistant Courses',
  },
  {
    institution: 'Clairvoyance E-learning Academy',
    course: 'Bookkeeping and Accountant Seminar',
  },
]

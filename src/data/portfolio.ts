export const personalInfo = {
  name: 'Gelsey T. Hafalla',
  title: 'Full Stack Web Developer | Team Leader | Technical Support | Customer Support | Virtual Assistant',
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
  'I turn operational chaos into automated systems — 25+ internal platforms shipped, teams of up to 12 led, and on-time delivery every cycle.'

export const stats = {
  years: 18,
  projects: 27,
  teamLed: 12,
  systems: 25,
}

export const aboutMe = `Full Stack Web Developer with 18+ years of experience spanning web application development, team leadership, technical support, and customer service. Skilled in both frontend and backend technologies, I build robust solutions while leading cross-functional teams to deliver projects on time.

With a background in technical support and customer service, I bring clear, client-focused communication and strong problem-solving skills to every project, including comfort working with modern AI-assisted development tools in my daily workflow.`

export const experiences = [
  {
    company: 'HRD Singapore PTE LTD',
    period: 'July 2007 – Present',
    roles: [
      {
        title: 'Team Leader',
        period: '2023 – Current',
        bullets: [
          'Lead a team of 12 full-stack developers, delivering projects on schedule and reducing workflow bottlenecks by implementing structured task monitoring.',
          'Monitor development progress across the 12-member team, ensuring on-time project delivery and rapid resolution of blockers.',
          "Manage administration-related issues, including addressing programmer's concerns that require immediate action to ensure a smooth developer workflow.",
          'Serve as Team Leader while also continuing as a full-time web developer.',
        ],
      },
      {
        title: 'Full Stack Web Developer',
        period: '2015 – 2023',
        bullets: [
          'Developed and maintained 25+ enterprise web applications using PHP, Node.js, Vue.js, and Express.js, supporting daily operations across multiple departments.',
          'Handled system maintenance and modification requests.',
          'Selected programming languages, tools, databases, and platforms for projects.',
          'Developed and documented style guidelines for website content.',
          'Recommended and implemented performance and process improvements.',
          'Checked and troubleshoot system errors to resolve issues efficiently.',
          'Maintained MySQL databases.',
        ],
      },
      {
        title: 'Technical Support',
        period: '2012 – 2015',
        bullets: [
          'Managed sending and receiving confirmations with the KSK Japan team for effective communication.',
          'Handled detection of system errors and implemented necessary modifications for smooth operation.',
          'Completed intensive training to develop expertise in BMOS, Walk-in Home, Architrend, and Architrend Zero software.',
        ],
      },
      {
        title: 'Customer Service',
        period: '2007 – 2012',
        bullets: [
          'Managed sending and receiving confirmations with the Japan side via email for accurate, timely communication.',
          'Managed receiving and making confirmation calls to ensure clear communication and accurate updates.',
          'Oversaw confirmation verification and provided timely feedback on status updates.',
          'Managed error detection and coordinated necessary corrections to maintain accuracy and quality.',
          'Monitored confirmation status, conducted follow-ups, and provided continuous feedback to ensure timely resolution.',
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
      '18+ years across technical support and customer service — resolving issues clearly and keeping users and stakeholders confident.',
  },
  {
    icon: 'Sparkles',
    title: 'AI-Assisted Development',
    description:
      'Uses Claude and Perplexity daily to accelerate debugging, code review, and documentation — shipping reliable systems faster without cutting corners.',
  },
]

export type SkillSubgroup = { label: string; items: string[] }
export type SkillGroup = {
  category: string
  icon: string
  items?: string[]
  subgroups?: SkillSubgroup[]
}

export const skills: SkillGroup[] = [
  {
    category: 'Programming',
    icon: 'Code',
    subgroups: [
      {
        label: 'Front End',
        items: ['JavaScript', 'jQuery', 'HTML', 'CSS', 'Bootstrap', 'Vue.js', 'Vuetify', 'React'],
      },
      {
        label: 'Back End',
        items: ['Node.js', 'Express.js', 'PHP', 'Socket.io', 'Python'],
      },
      {
        label: 'Database',
        items: ['MySQL', 'MSSQL', 'NoSQL'],
      },
      {
        label: 'Dev Tools',
        items: ['GitHub', 'GitLab', 'NPM', 'Yarn', 'REST API', 'Nulab (Backlog)'],
      },
    ],
  },
  {
    category: 'Virtual Assistant',
    icon: 'Monitor',
    subgroups: [
      {
        label: 'Marketing',
        items: ['Lead Generation', 'Email Marketing', 'Facebook Ads Marketing', 'Social Media Management'],
      },
      {
        label: 'Design',
        items: ['Basic Graphic Design & Branding', 'Video Editing (CapCut & Canva)'],
      },
      {
        label: 'Administrative Support',
        items: ['Virtual Assistance', 'Executive Assistant'],
      },
    ],
  },
  {
    category: 'Administration',
    icon: 'Briefcase',
    items: [
      'MS Word', 'MS Excel', 'MS PowerPoint',
      'MS Teams', 'Microsoft 365', 'Photoshop', 'Vectorworks', 'Canva',
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

export type ProjectCategory =
  | 'Web Applications'
  | 'Admin Dashboards'
  | 'Email Automation'
  | 'API Integrations'
  | 'Monitoring Tools'

export const projectCategories: ProjectCategory[] = [
  'Web Applications',
  'Admin Dashboards',
  'Email Automation',
  'API Integrations',
  'Monitoring Tools',
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
    category: 'Web Applications',
    tags: ['React', 'Tailwind CSS', 'Vite'],
    description:
      'Created a customer-focused bakery website that highlights specialty baked goods and simplifies online ordering for cookies, cupcakes, and loaf cakes.',
    image: '/assets/projects/beshybakes-main.png',
    link: 'https://beshybakes.vercel.app/',
  },
  {
    title: 'Twist and Treats by BeshyBakes',
    category: 'Web Applications',
    tags: ['React', 'Tailwind CSS', 'Vite'],
    description:
      'Developed a responsive bakery/cafe website with online ordering, crafted to showcase baked products, balloon designing, and catering services while delivering a smooth and user-friendly customer experience.',
    image: '/assets/projects/twistAndTreats.png',
    link: 'https://twist-and-treats.vercel.app/',
  },
  {
    title: 'Centralized System',
    category: 'Admin Dashboards',
    tags: ['Vue.js', 'Node.js', 'MySQL'],
    description:
      'Built a centralized web system that automatically captures employee performance on every login, automates checklist collection, and integrates directly with existing systems — eliminating dependency on multiple tools and giving teams a single platform to manage and track everything in real time.',
  },
  {
    title: 'Centralized Master',
    category: 'Admin Dashboards',
    tags: ['Vue.js', 'Express.js', 'MySQL'],
    description:
      'Built an integrated management system that automates masterlist maintenance and provides real-time tracking of employee violations, transfers, PRF requisitions, and computer asset information — eliminating manual updates and improving data accuracy across departments.',
  },
  {
    title: 'Bundenban Shiyousho',
    category: 'API Integrations',
    tags: ['PHP', 'MySQL', 'MSSQL'],
    description:
      'Built a system that automatically aggregates all required data sources to enable accurate and automated generation of Bundenban serial indicators — eliminating manual lookups and reducing processing time.',
  },
  {
    title: 'Data Gathering',
    category: 'API Integrations',
    tags: ['PHP', 'MySQL', 'MSSQL'],
    description:
      'Built a system that extracts and consolidates required data from multiple databases into a structured CSV export — streamlining data collection, reducing manual effort, and enabling accurate cross-system reporting.',
  },
  {
    title: 'Kansen Form',
    category: 'API Integrations',
    tags: ['Vue.js', 'Node.js', 'MySQL'],
    description:
      'Engineered an end-to-end proposal automation system that dynamically pulls and validates data from multiple databases to auto-populate kansen proposal forms — delivering fully prepared, error-free submissions to the Japan side and eliminating the manual coordination that previously slowed the entire proposal pipeline.',
  },
  {
    title: 'Rechecking',
    category: 'Monitoring Tools',
    tags: ['Vue.js', 'PHP', 'MySQL'],
    description:
      'Built a dedicated monitoring and dispatch system for plan production rechecks — tracking all items flagged for review, consolidating the required data, and ensuring it reaches the right teams without delay, reducing production hold-ups caused by missing or late rechecking information.',
  },
  {
    title: 'Floor Holing',
    category: 'Admin Dashboards',
    tags: ['Vue.js', 'Express.js', 'MySQL'],
    description:
      'Built a cross-departmental centralized confirmation system that unifies floor holing records from all teams into a single, always-current list — replacing scattered, department-specific tracking with one shared platform that keeps every stakeholder aligned in real time.',
  },
  {
    title: 'Computer Information',
    category: 'Email Automation',
    tags: ['Node.js', 'Express.js', 'MySQL'],
    description:
      'Built a comprehensive IT asset registry that documents each user\'s computer specifications and software licenses — with an automated conflict detection engine that sends immediate email alerts whenever a discrepancy is found between individual records and the master database, keeping IT assets audit-ready at all times.',
  },
  {
    title: 'Initial Bar',
    category: 'Admin Dashboards',
    tags: ['Vue.js', 'PHP', 'MySQL'],
    description:
      'Built a production scheduling dashboard that provides process-level visibility into plan timelines — displaying the scheduling status of every plan per production stage so teams can instantly identify bottlenecks, reprioritize work, and keep the entire production schedule on track.',
  },
  {
    title: 'Pending Plans',
    category: 'Email Automation',
    tags: ['Node.js', 'Express.js', 'MySQL'],
    description:
      'Built a multi-team centralized monitoring hub for plans awaiting confirmation, featuring automated email dispatch and scheduled follow-up reminders — ensuring no pending plan falls through the cracks and significantly reducing the manual coordination burden on every team that relies on confirmation-dependent workflows.',
  },
  {
    title: 'Shitaji Unit',
    category: 'Monitoring Tools',
    tags: ['PHP', 'MySQL', 'MSSQL'],
    description:
      'Built a supplier plan tracking system that monitors the receipt and real-time status of every plan arriving from external suppliers — giving production teams immediate visibility into incoming plan readiness and enabling proactive response to delays before they impact the production schedule.',
  },
  {
    title: 'Stop Plan',
    category: 'Monitoring Tools',
    tags: ['Vue.js', 'PHP', 'MySQL'],
    description:
      'Built an automated plan validation engine that evaluates each plan against a configurable set of item-specific qualification rules — immediately identifying and flagging non-conforming plans before they enter production, preventing quality escapes, reducing rework, and enforcing consistent standards across all plan types.',
  },
  {
    title: 'Kansen Checklist',
    category: 'Monitoring Tools',
    tags: ['PHP', 'MySQL', 'MSSQL'],
    description:
      'Built a pricing intelligence system that monitors price brackets by type and automatically compiles categorized price lists based on bracket rules — with live database indicators that keep pricing data consistent across all records and eliminate the manual cross-referencing that previously caused pricing discrepancies.',
  },
  {
    title: 'ICAD Feedback',
    category: 'Admin Dashboards',
    tags: ['Vue.js', 'PHP', 'MySQL'],
    description:
      'Built a structured feedback aggregation system that captures, categorizes, and centralizes every issue raised by plan production against ICAD software — transforming scattered informal problem reports into a searchable, trackable log that drives accountability and informs targeted software improvement decisions.',
  },
  {
    title: 'Wiring Design',
    category: 'Monitoring Tools',
    tags: ['Vue.js', 'PHP', 'MySQL'],
    description:
      'Built a plan intake and processing system for wiring design that monitors incoming received plans and automatically compiles the full checklist and all required item data upon receipt — removing the manual documentation step entirely and ensuring every plan arrives at production fully prepared and verified.',
  },
  {
    title: 'PS5 Denki',
    category: 'Monitoring Tools',
    tags: ['Vue.js', 'PHP', 'MySQL'],
    description:
      'Built a dedicated monitoring system for PS5 Denki plans that automatically generates complete checklists and all required item-specific data the moment a plan is received — standardizing the documentation process, eliminating manual preparation, and ensuring each plan is production-ready from arrival.',
  },
  {
    title: 'PS5 Denki Coverpage',
    category: 'API Integrations',
    tags: ['PHP', 'MySQL', 'MSSQL'],
    description:
      'Built a document generation system that pulls structured data from multiple source databases to automatically produce and serve downloadable PDF cover pages — turning a multi-step manual export process into an on-demand, one-click operation with database-accurate output every time.',
  },
  {
    title: 'Electrical 1',
    category: 'Admin Dashboards',
    tags: ['Vue.js', 'Node.js', 'MySQL'],
    description:
      'Built an enterprise-scale centralized platform deployed across 10 teams that automates checklist aggregation and serves as the unified command center for electrical plan monitoring — consolidating what were previously 10 separate workflows into one synchronized, always-current view of plan status across all teams.',
  },
  {
    title: 'Electrical 2',
    category: 'Admin Dashboards',
    tags: ['Vue.js', 'Express.js', 'MySQL'],
    description:
      'Built a high-capacity centralized system serving 12 teams simultaneously, combining automated checklist collection with comprehensive plan monitoring — providing organization-wide visibility into electrical plan progress while eliminating duplicate tracking efforts and ensuring all teams operate from the same live data.',
  },
  {
    title: 'Wire Route Jiku',
    category: 'Monitoring Tools',
    tags: ['Vue.js', 'PHP', 'MySQL'],
    description:
      'Built a specialized plan monitoring system for wire route plans that automatically generates detailed checklists and compiles all required item-level data upon receipt — ensuring every wire route plan is fully documented and production-ready without any manual checklist preparation.',
  },
  {
    title: 'PS5 Denki Wall',
    category: 'Admin Dashboards',
    tags: ['Vue.js', 'PHP', 'MySQL'],
    description:
      'Built a centralized wall plan monitoring system shared across 4 teams that automates checklist generation and tracks plan status in real time — replacing per-team manual tracking with a single collaborative platform that gives all teams consistent, up-to-date visibility into every wall plan.',
  },
  {
    title: 'PS5 Denki Ceiling',
    category: 'Admin Dashboards',
    tags: ['Vue.js', 'PHP', 'MySQL'],
    description:
      'Built a centralized ceiling plan monitoring system shared across 4 teams that automates checklist collection and provides unified plan status tracking — eliminating redundant per-team documentation and ensuring all teams work from a single authoritative source of ceiling plan data.',
  },
  {
    title: 'Sales and Implementation',
    category: 'Admin Dashboards',
    tags: ['Vue.js', 'Express.js', 'MySQL'],
    description:
      'Built a centralized monitoring platform used across 8 teams that automates checklist gathering and tracks the full lifecycle of sales and implementation plans — unifying team visibility, reducing coordination overhead, and ensuring every plan progresses through each stage with complete, automatically collected documentation.',
  },
  {
    title: 'Work Guide',
    category: 'Admin Dashboards',
    tags: ['Vue.js', 'PHP', 'MySQL'],
    description:
      'Built a structured digital training reference system that centralizes all manuals, procedures, and tools needed to onboard newly hired staff — giving new team members a single organized resource throughout training and reducing the time and effort required to bring new developers fully up to speed.',
  },
  {
    title: 'Main Database',
    category: 'API Integrations',
    tags: ['Node.js', 'MySQL', 'MSSQL'],
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

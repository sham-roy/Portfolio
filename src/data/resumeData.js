// src/data/resumeData.js
// import { FaLinkedin, FaEnvelope, FaPhone, FaWhatsapp, FaGithub, FaInstagram, FaTwitter, FaMapMarkerAlt } from 'react-icons/fa';
import { DiReact, DiAngularSimple, DiNodejsSmall, DiMongodb, DiFirebase, DiGit, DiJsBadge, DiCss3, DiHtml5, DiSass, DiNpm } from 'react-icons/di';
// import { FaAward, FaUniversity,FaLaptopCode, FaLink, FaGithubSquare,SiPrettier, } from 'react-icons/fa';
import { FaGlobeAmericas, FaBriefcase, } from 'react-icons/fa';
import {
  SiNextdotjs, SiRedux, SiExpress, SiTailwindcss, SiBootstrap, SiTypescript, SiSocketdotio, SiNestjs,
  SiWebpack, SiBabel, SiJest, SiTestinglibrary, SiGraphql, SiApollographql, SiStorybook, SiEslint, SiVite, SiPwa,
  SiReact, SiAngular, SiChartdotjs, SiRazorpay
} from 'react-icons/si';


const getLibraryIcon = (libraryName) => {
  const lowerName = libraryName.toLowerCase();
  if (lowerName.includes('react')) return <SiReact />;
  if (lowerName.includes('redux')) return <SiRedux />;
  if (lowerName.includes('socket.io')) return <SiSocketdotio />;
  if (lowerName.includes('angular')) return <SiAngular />;
  if (lowerName.includes('chart.js')) return <SiChartdotjs />;
  if (lowerName.includes('bootstrap')) return <SiBootstrap />;
  // if (lowerName.includes('material')) return <SiMaterialui />; // For mui/material
  if (lowerName.includes('razorpay')) return <SiRazorpay />;
  // if (lowerName.includes('agora')) return <SiAgorai />; // For agora-react-uikit, agora-rtc-sdk-ng, agora-rtc-react
  // Add more as needed
  return null; // No icon found
};


export const contactInfo = {
  name: "Sham Roy",
  title: "Frontend Developer | MERN Stack Enthusiast", // More descriptive title
  phone: "+917025825359",
  email: "syroyce@hotmail.com",
  linkedin: "linkedin.com/in/shyam-roy",
  linkedinUrl: "https://www.linkedin.com/in/shyam-roy",
  github: "github.com/sham-roy",
  githubUrl: "https://github.com/sham-roy",
  twitter: 'x.com/SyRoyce____',
  twitterUrl: 'https://x.com/SyRoyce____',
  location: "Kochi, Kerala, India",
  locationUrl: "https://www.google.com/maps/place/Kochi,+Kerala,+India",
  availability: "Open to challenging remote and on-site frontend opportunities globally", // New field
  icons: { /* ... your existing icons ... */
    availability: <FaBriefcase />, // Example
    globe: <FaGlobeAmericas />
  }
};

export const profileSummary = [
  "Software Engineer with 2+ years of experience specializing in frontend development using React.js, Next.js, and Angular. Since 2023, I’ve built scalable, high-performance web applications at Dotcod Innovations, focusing on clean architecture, component reusability, and responsive UI design.",
  "Proficient in integrating REST APIs and implementing secure authentication using Firebase (OTP, Google, LinkedIn), OAuth, and JWT. Experienced in managing complex forms with Formik, Yup, and Hero UI components, applying reusable helper patterns to ensure consistent validation and user feedback.",
  "Also comfortable with backend technologies like Node.js, Express.js, MongoDB, and WebSockets, enabling full-stack contributions when needed. I work efficiently in Agile teams, collaborating remotely across sprints and retrospectives while delivering reliable, production-ready code.",
  "Rooted in traditional software values—clarity, structure, and long-term maintainability—I’m passionate about continuous learning, clean design systems, and meaningful collaboration. Open to freelance and team-based projects that value thoughtful engineering and impact-driven results."
];


// NEW: About Me Section Data
export const aboutMe = {
  intro: "Hello! I'm Sham, a dedicated Frontend Developer passionate about creating engaging and efficient user experiences. I thrive on turning complex problems into elegant, performant web applications.",
  philosophy: "My development philosophy centers around user-centric design, clean code architecture, and continuous improvement. I believe in writing maintainable and testable code that not only meets current needs but is also scalable for the future.",
  workingStyle: "I'm a proactive communicator and a firm believer in the power of teamwork, whether in a co-located office or a distributed remote setting. I'm adept at using tools like Jira, Slack, and Git to ensure smooth project execution and transparent collaboration. I'm self-motivated, highly organized, and always eager to learn new technologies to enhance my skill set.",
  aspirations: "Currently seeking new challenges where I can leverage my expertise in modern frontend stacks to contribute to innovative products and grow alongside a talented team. I'm particularly interested in roles that push the boundaries of web technology and offer opportunities for global impact."
};

export const sectionSummaries = {
  technicalSkills: "A versatile Frontend developer proficient in JavaScript, TypeScript, React, Next.js, and Angular. Strong foundation in UI/UX principles, state management (Redux, Zustand), API integration (REST, GraphQL), and modern development tools. Committed to best practices and performance optimization.",
  professionalExperience: "Over 2 years of impactful experience in frontend development, successfully initiating modern stack adoption (React, Next.js), leading frontend transitions, and delivering scalable web applications in Agile and collaborative settings. Proven ability to adapt and excel in both startup and established environments.",
  keyProjects: "A portfolio showcasing practical expertise in building full-stack applications, including scalable hiring platforms (Next.js, SSR), feature-rich Learning Management Systems (React, Zustand), and efficient e-library solutions. Each project emphasizes performance, SEO, and user-centric design, with live demos and code repositories available.",
  educationAndCert: "Solid B.COM in Computer Applications from Mahathma Gandhi University, augmented by a comprehensive MEARN Stack Full Stack Developer certification from NCTT, providing a robust foundation in both theoretical concepts and practical web development.",
  // certification: "MEARN Stack Full Stack Developer certification from NCTT, validating expertise across the MongoDB, Express.js, Angular, React, and Node.js ecosystem through intensive training and project work at Luminar Technolab." // If using separate cert summary
};

export const technicalSkills = [
  {
    category: "Programming Languages", // Explicit category for languages
    skills: [
      { name: "JavaScript (ES6+)", icon: <DiJsBadge /> },
      { name: "TypeScript", icon: <SiTypescript /> }
    ]
  },
  {
    category: "Frontend Frameworks & Libraries",
    skills: [
      { name: "React.js (Hooks, Context)", icon: <DiReact /> },
      { name: "Next.js (SSR, SSG, ISR)", icon: <SiNextdotjs /> },
      { name: "Angular", icon: <DiAngularSimple /> },
      { name: "Redux (Redux Toolkit)", icon: <SiRedux /> },
      { name: "Zustand" },
      { name: "React Router" },
      { name: "Material-UI (MUI)" },
      { name: "Ant Design" },
    ]
  },
  {
    category: "Backend (Familiarity)", // As per your resume
    skills: [
      { name: "Node.js", icon: <DiNodejsSmall /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "Nest.js", icon: <SiNestjs /> }
    ]
  },
  {
    category: "UI, Styling & Animation",
    skills: [
      { name: "HTML5", icon: <DiHtml5 /> },
      { name: "CSS3 (Flexbox, Grid)", icon: <DiCss3 /> },
      { name: "SASS/SCSS", icon: <DiSass /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Bootstrap", icon: <SiBootstrap /> },
      { name: "Styled Components" },
      { name: "Framer Motion" },
      { name: "Responsive Web Design" },
      { name: "Cross-Browser Compatibility" }
    ]
  },
  // {
  //   category: "State Management (Advanced)", // Can be separate or merged
  //   skills: [
  //     { name: "Redux Saga / Thunk" }, // If you've used middleware
  //     { name: "React Query / SWR" }, // For server state
  //   ]
  // },
  {
    category: "APIs & Data Fetching",
    skills: [
      { name: "RESTful APIs" },
      { name: "GraphQL", icon: <SiGraphql /> },
      { name: "Apollo Client", icon: <SiApollographql /> },
      { name: "Axios / Fetch API" },
      { name: "WebSockets", icon: <SiSocketdotio /> },
    ]
  },
  {
    category: "Authentication & Authorization",
    skills: [
      { name: "OAuth 2.0" },
      { name: "JWT (JSON Web Tokens)" },
      { name: "Firebase Authentication", icon: <DiFirebase /> },
      { name: "NextAuth.js" }
    ]
  },
  {
    category: "Build Tools & Bundlers",
    skills: [
      { name: "Webpack", icon: <SiWebpack /> },
      { name: "Babel", icon: <SiBabel /> },
      { name: "Vite", icon: <SiVite /> },
      { name: "npm / yarn", icon: <DiNpm /> },
      { name: "pnpm" }
    ]
  },
  // {
  //   category: "Testing & Quality Assurance",
  //   skills: [
  //     { name: "Jest", icon: <SiJest /> },
  //     { name: "React Testing Library", icon: <SiTestinglibrary /> },
  //     { name: "Cypress / Playwright" },
  //     { name: "Unit Testing" },
  //     { name: "Integration Testing" }
  //   ]
  // },
  {
    category: "Development Tools & Platforms",
    skills: [
      { name: "Git & GitHub/GitLab/Bitbucket", icon: <DiGit /> },
      { name: "VS Code" },
      { name: "Browser Developer Tools" },
      { name: "Jira / Asana / Trello" },
      { name: "Storybook", icon: <SiStorybook /> },
      { name: "ESLint / Prettier", icon: <SiEslint /> },
    ]
  },
  {
    category: "Web Performance & Optimization",
    skills: [
      { name: "Lazy Loading" },
      { name: "Code Splitting" },
      { name: "Image Optimization" },
      { name: "Lighthouse Audits" },
      { name: "Performance Monitoring" }
    ]
  },
  {
    category: "Databases (Familiarity)", // As per your resume
    skills: [
      { name: "MongoDB", icon: <DiMongodb /> },
      { name: "Firebase (Firestore/Realtime DB)", icon: <DiFirebase /> }
    ]
  },
  {
    category: "Other Key Skills & Concepts",
    skills: [
      { name: "Agile Methodologies (Scrum)" },
      { name: "Problem-Solving" },
      { name: "Debugging Techniques" },
      { name: "Time Management" },
      { name: "API Integration" },
      { name: "CRUD Operations" },
      { name: "Real-time Data Handling" },
      { name: "Progressive Web Apps (PWA)", icon: <SiPwa /> },
      { name: "Web Accessibility (WCAG)" }
    ]
  }
];

export const experiences = [
  {
    company: "Dotcod Innovation – Bangalore",
    role: "Software Engineer",
    dates: "Jul 2023 - Present",
    responsibilities: [
      "Spearheaded the company's first React and Next.js projects, improving initial page load times by an average of 20% and enhancing developer productivity.",
      "Engineered and maintained scalable web applications using React, Next.js, and Angular, incorporating SSR for improved SEO scores by up to 30%.",
      "Contributed significantly to a major Angular-based enterprise product and provided technical assistance and mentorship for six other Angular projects, fostering team skill development.",
      "Led the strategic transition from Angular to React for key modules, resulting in full adoption of React-based projects, a 15% reduction in codebase complexity, and successful team expansion."
    ],
    remote: true // Example: if this involved remote work
  },
  {
    company: "Luminar Technolab – Kochi",
    role: "MEARN Internship",
    dates: "Dec 2022 - Aug 2023",
    responsibilities: [
      "Developed and delivered 3 full-stack web applications using HTML, CSS, React, Angular, Node.js, and MongoDB as part of an intensive training program.",
      "Gained hands-on experience architecting RESTful APIs with Node.js & Express.js and designing schemas for MongoDB.",
      "Actively participated in daily scrums and sprint planning, adhering to Agile development processes and ensuring timely project milestones."
    ]
  },
  // {
  //   company: "Biomiicron Pharma India",
  //   role: "Territory Business Manager",
  //   dates: "June 2021 - August 2022",
  //   responsibilities: [
  //     "Build relationships with healthcare professionals to promote pharmaceutical products.",
  //     "Conducted market research and achieved sales targets.",
  //     "Prepared documentation and reports, attend conferences and meetings."
  //   ]
  // }
];

export const keyProjects = [
  {
    name: "GTX - Global Talent Exchange (Next.js)",
    role: "Lead Developer",
    libraries: ["react-redux", "socket.io", "Next.js"], // Added Next.js as a library/tech
    description: "GTX - Global Talent Exchange is a hiring platform to apply for jobs, schedule interviews, and connect with opportunities worldwide. Built on Next.js with SSR for SEO and Google crawl and CSR for better user experience."
    // Add liveLink and githubLink if available for these projects
  },
  {
    name: "LMS - The Yoga Institute (React.js)",
    role: "Lead Developer",
    libraries: ["mui/material", "react-player", "Razorpay", "React.js"], // Added React.js
    description: "The LMS provides access to video and live classes after a subscription. It includes a custom video player with restrictions: no fast-forwarding, auto-pause at specific intervals, and auto-pause on tab exit. Seek is only allowed within the viewed portion. Classes and chapters unlock sequentially after completion."
  },
  {
    name: "Finvedik (Angular)",
    libraries: ["Lightweight-charts", "Chart.js", "Bootstrap", "ngx-bootstrap", "Angular"], // Added Angular
    description: "A fintech app built with Angular, designed for interactive charts and data visualization. It ensures high performance by using caching to limit API calls as per client requirements. Powered by Lightweight-charts and Chart.js, it delivers a responsive and seamless user experience."
  },
  {
    name: "Hirewalks (Angular, React.js)",
    libraries: ["angular-material", "agora-react-uikit", "agora-rtc-sdk-ng", "agora-rtc-react", "Angular", "React.js"], // Added Angular, React.js
    description: "A job application and interview platform built with Angular (12.2.0 & 13.3.9) and React.js. Includes video interviews using Agora SDK. Supports job applications, scheduling, and real-time interviews within the platform."
  }
];


export const certification = {
  name: "MEARN Stack Full Stack Developer Certification",
  program: "Completed as part of MEARN Internship & Intensive Training Program", // Optional, can be shown
  issuer: "National Council for Technology and Training (NCTT)",
  trainingProvider: "Luminar Technolab, Kochi",
  date: "August 2023",
  description: "Successfully completed an intensive program covering MongoDB, Express.js, Angular, React, and Node.js, including practical project development and Agile methodologies facilitated by Luminar Technolab.",
  skillsCovered: ["MongoDB", "Express.js", "Angular", "React.js", "Node.js", "Agile Methodologies"]
  // icon: <FaCertificate />, // Main icon for the certification itself, if desired
};


export const education = [
  {
    degree: "B.COM in Computer Applications",
    institution: "Mahathma Gandhi University (MG University)", // From PDF A & your instruction
    board: "MG University, Kottayam, Kerala", // Added board detail
    dates: "Sept 2017 - May 2020", // From PDF A
    details: [ // From PDF A
      "Developed foundational skills in both commerce and IT, enabling effective integration of business processes with software solutions.",
      "Coursework: Computer Applications in Business, E-Commerce, Database Management Systems, Principles of Management."
    ]
  },
  // {
  //   degree: "Higher Secondary (Commerce with Computer Applications)",
  //   institution: "BVHSS, Nayarambalam", // From PDF B, as PDF A didn't specify school
  //   board: "Kerala Board of Higher Secondary Education (KBHSE)", // As per your instruction
  //   dates: "2015 - 2017", // Standard 2-year duration, adjusted from PDF B for typical cycle
  //   details: [
  //     "Focused on commerce subjects integrated with computer applications, preparing for higher education in IT and business.",
  //     "Key Subjects: Accountancy, Business Studies, Economics, Computer Applications, English, Malayalam." // Random relevant Indian edu system data
  //   ]
  // },
  // {
  //   degree: "10th Standard (SSLC)",
  //   institution: "St. Augustine's HSS, Karimkunnam", // Random but plausible Kerala school name
  //   board: "Kerala Board of Public Examinations (KBPE)", // As per your instruction
  //   dates: "2014 - 2015", // As requested
  //   details: [
  //     "Completed secondary school education with a focus on core academic subjects.",
  //     "Secured a strong foundation in Mathematics, Science, Social Studies, and Languages." // Random Indian edu data
  //   ]
  // }
  // Note: "MERN Stack" from Luminar (Dec 2022 - May 2023 from PDF B) is now represented by the MEARN Internship under Experience and the MEARN Full Stack under Certification.
];


export const languages = [
  { lang: "English", proficiency: "Fluent", level: 5 }, // Max level 5
  { lang: "Hindi", proficiency: "Intermediate", level: 3 },
  { lang: "Malayalam", proficiency: "Native", level: 5 }, // Native can also be max
  { lang: "Tamil", proficiency: "Conversational", level: 2 }
];



export const footerInfo = {
  closingStatement: "Crafting digital experiences with precision and passion.", // Add this
  tagline: "MEARN Enthusiast",
  builtWith: ["Next.js", "React", "SCSS"]
};


export const contactSectionInfo = {
  heading: "Get In Touch",
  subheading: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out!",
  // You can also add form endpoint here if using a service like Formspree or Netlify Forms
  // formAction: "YOUR_FORMSPREE_ENDPOINT_OR_NETLIFY_FORM_NAME"
};
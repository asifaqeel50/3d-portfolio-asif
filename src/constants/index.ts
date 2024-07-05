// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  user1,
  user2,
  user3,
  youtube,
  linkedin,
  twitter,
  github,
  icr,
  ngs,
  softvilla,
  kfueitgpt,
  retroviper,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "work",
    title: "Work",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
  // {
  //   id: "source-code",
  //   title: "Source Code",
  //   link: "http://www.github.com/asifaqeel/3d-portfolio-asif/",
  // },
] as const;

// Services
export const SERVICES = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
] as const;

// Technologies
export const TECHNOLOGIES = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "React.js Developer",
    company_name: "SoftVilla Business Solutions & Services Pvt Ltd.",
    icon: softvilla,
    iconBg: "#383E56",
    date: "01/2024 - Present",
    points: [
      "Developed a corporate web application tool used by companies for streamlining internal processes, enhancing operational efficiency.",
      "Worked closely with a cross-functional team of experienced professionals and experts, contributing to the successful completion of complex projects.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Successfully integrated advanced features such as real-time data processing and dynamic content updates, significantly enhancing the functionality of client websites."
    ],
  },
  {
    title: "React Native Developer",
    company_name: "NGS Technologies",
    icon: ngs,
    iconBg: "#383E56",
    date: "11/2022 - 11/2023",
    points: [
      "Spearheaded multiple high-profile projects, including the development of complex websites and mobile applications, ensuring timely delivery and client satisfactio",
      "Redesigned user interfaces for various applications, improving user experience and increasing user engagement by 25%",
      "Code Optimization: Conducted thorough code reviews and optimization, reducing codebase complexity and improving application performance and maintainability.",
    ],
  },
  {
    title: "React Native Intern",
    company_name: "ICR",
    icon: icr,
    iconBg: "#383E56",
    date: "06/2022 - 09/2022",
    points: [
      "Developed a robust blood donation app using React Native, featuring real-time donor registration, location-based donor matching, and push notifications for urgent blood needs.",
      "Designed and implemented a weather app that utilized APIs to provide accurate weather forecasts, integrated with geolocation for localized weather updates and interactive UI elements for intuitive user experience.",
      "Leveraged Redux for state management in React Native applications, optimizing data flow and maintaining application state across multiple screens.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
] as const;

// Testimonials
export const TESTIMONIALS = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: user1,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: user2,
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: user3,
  },
] as const;

// Projects
export const PROJECTS = [
  {
    name: "KFUEIT GPT",
    description:
      "An advanced question answering system. Powered by the Allmini LLM L6 v2 language model.It delivers precise and contextual responses to students queries",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "flask",
        color: "green-text-gradient",
      },
      {
        name: "llm",
        color: "pink-text-gradient",
      },
    ],
    image: kfueitgpt,
    source_code_link: "https://github.com/asifaqeel50/KFUEIT-GPT",
    live_site_link: "https://www.youtube.com/watch?v=-0fVRyFUCPw&ab_channel=sudorm-rf%2F",
  },
  {
    name: "Retro Viper",
    description:
      "Developed the classic Nokia Snake game clone but with randomized obstacles to deepen my proficiency in React hooks and state management.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "green-text-gradient",
      },
      {
        name: "gamedev",
        color: "pink-text-gradient",
      },
    ],
    image: retroviper,
    source_code_link: "https://github.com/asifaqeel50/Retro-Viper",
    live_site_link: "https://retro-viper.netlify.app",
  },
  // {
  //   name: "Shoppy",
  //   description:
  //     "The most personalised admin dashboard web application that allows enables users to choose customized themes and dark mode with different pages and variety of charts.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "syncfusion",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "scss",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: project3,
  //   source_code_link: "https://github.com/sanidhyy/admin-dashboard",
  //   live_site_link: "https://shoppy-dashboard-react.netlify.app/",
  // },
  // {
  //   name: "TikTok Clone",
  //   description:
  //     "A Next JS Web Application that enables users to upload videos of any length and size, create accounts and connect with other people just like any other social media.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "nodejs",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwindcss",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: project4,
  //   source_code_link: "https://github.com/sanidhyy/tiktok-clone",
  //   live_site_link: "https://tiktok-clone-react.vercel.app/",
  // },
  // {
  //   name: "Cryptoverse",
  //   description:
  //     "Best Cryptocurrency web application that allows users to view price, market cap and daily change in realtime for almost every cryptocurrency in the world.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "rapidapi",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: project5,
  //   source_code_link: "https://github.com/sanidhyy/crypto-app",
  //   live_site_link: "https://reactjscryptoapp.netlify.app/",
  // },
  // {
  //   name: "Travel Advisor",
  //   description:
  //     "Web application that enables you to view your nearby restaurants, hotels and attractions which can be sorted by ratings, price and much more.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "rapidapi",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "material-ui",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: project6,
  //   source_code_link: "https://github.com/sanidhyy/travel-advisor",
  //   live_site_link: "https://travel-advisor-reactjs.netlify.app/",
  // },
] as const;

export const SOCIALS = [
  // {
  //   name: "YouTube",
  //   icon: youtube,
  //   link: "https://www.youtube.com/@OPGAMER.",
  // },
  {
    name: "Linkedin",
    icon: linkedin,
    link: "www.linkedin.com/in/",
  },
  // {
  //   name: "Twitter",
  //   icon: twitter,
  //   link: "https://twitter.com/TechnicalShubam",
  // },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/asifaqeel50",
  },
] as const;
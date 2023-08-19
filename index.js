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
  carrent,
  jobit,
  tripguide,
  
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Python,Java,C,PHP",
    icon: web,
  },
  {
    title: "HTML,CSS,Js,ReactJs",
    icon: mobile,
  },
  {
    title: "Data Structures & Algorithms",
    icon: backend,
  },
  {
    title: "DBMS(sql)",
    icon: creator,
  },
];

const technologies = [
  {
    name: "html",
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
    name: "Tailwind CSS",
    icon: tailwind,
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
];

const experiences = [
  {
    title: "Project 1",
    company_name: "SENTIMENTAL ANALYSIS",
    icon: starbucks,
    iconBg: "#383E56",
    date: "(3 MONTHS)",
    points: [
     " This project aims to create a college website to help students choose the companies in a particular domain. ","We used NLP,Full Stack, and ML techniques,to bulid this project including sentiment analysis."," The aim is to provide students with valuable information to make informed decisions about which companies they want to Apply."
    ],
  },
  {
    title: "Project 2",
    company_name: "PHOTOGRAPHY WEBSITE",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: " (1 MONTH)",
    points: [
      " Website created about restaurant by using HTML, CSS, JS in detail."," It is used to make offline business into online."," Technical view of an offline restaurant. To publish the restaurant we created this website very Effectively"],
  },
  {
    title: "Project 3",
    company_name: "3D-PORTFOLIO on APJ Abdul Kalam",
    icon: shopify,
    iconBg: "#383E56",
    date: "(1 MONTH)",
    points: [
      "We used TAILWINDCSS,THREE.JS,REACT.THREE-FIBER and framer motion to bulid this 3d animated portfolio.","We designed the web page with detailed information about the APJ Abdul Kalam.","By using these kind of technologies,we can that this web page was effective and responsive."
    ],
  },
  // {
  //   title: "President",
  //   company_name: "president",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "(2002-2007)",
  //   points: [
  //     "In a historic transition, Kalam assumed the role of the 11th President of India. His presidency was marked by a commitment to youth empowerment, education, and societal progress. ","Through his eloquent speeches and interactions, he continued to inspire generations, fostering a culture of innovation and aspiration.",
  //   ],
  // },
  // {
  //   title: "After his presidency ",
  //   company_name: "president",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: " (2007-2015)",
  //   points: [
  //     " Following his term as President, APJ Abdul Kalam continued to be an influential figure, engaging in various educational and social initiatives."," He remained an advocate for scientific research, education, and youth empowerment, inspiring people with his wisdom and vision.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
    "I Like to be in a team and being with all and making chit chat. I can say that this was a high strength to me to gain knowledge and at the same time-refreshment ",
    name: "Team Work",
    designation: "To Aquire Knowledge",
    
  },
  {
    testimonial:
      "I have Clear and effective communication and ability to convey information to all.By listening actively all the time i can easily collaborate and communicate with colleagues.",
      name: "Communication Skills ",
      designation: "To Be a Part in Every thing",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Iam intresented in doing the work with i like most.as it was a late night or its is a Early morning i never tied of doing the work which i had",
      name: "Workaholic ",
      designation: "Intrested to learn new things",
    //image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "DataStructures&C++",
    description:
      "Certified by the devtown on the Accomplishment of DataStructures&C++.It is an online platform by SHAURYA SINHA who is collabirated with the META companies",
      tags: [
        {
          name: "Useful",
          color: "blue-text-gradient",
        },
        {
          name: "Logical Thinking",
          color: "green-text-gradient",
        },
        {
          name: "Acqurate",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
  },
  {
    name: "React Basics",
    description:
      "I got Certified by the cousera on complition of React basics.Iam very glad to share this to you.Here it is a way to share my certifications",
    tags: [
      {
        name: "Intresting",
        color: "blue-text-gradient",
      },
      {
        name: "Extrodinary",
        color: "green-text-gradient",
      },
      {
        name: "Features",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "PYTHON",
    description:
      "I got certified by the GreatLearing.It is a online platform to learn.we all know that python is one of the leading programming language to be learned by every Engineering",
    tags: [
      // {
      //   name: "Great",
      //   color: "blue-text-gradient",
      // },
      {
        name: "MultiProgramming Features",
        color: "green-text-gradient",
      },
      {
        name: "Simple",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };

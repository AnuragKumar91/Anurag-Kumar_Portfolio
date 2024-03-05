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
  threejs,
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
    title: "Web Developer",
    icon: web,
  },
 
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Component Developer",
    icon: css,
  },
];

const technologies = [
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
    name: "git",
    icon: git,
  },
 
 
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Solar-Secure Solutions",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Jan 2023 - April 2023",
    points: [
      "Developing an ecoomerce website with the help of Node js ",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Greenmen Consulting Private Limited",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "May 2023 - Feb 2024",
    points: [
      "Annotated and validated various components, including accordion, sidebar, button, and pagination, in a React application using Bootstrap, Material-UI, and custom CSS to ensure functionality and compliance with client requirements",
      "Scrap 200+ Website like Ecommerce ,App Ui etc",
      "Collaborated with the development team to identify and rectify any issues or bugs in the components before delivering the application to the client",
      
    ],
  },
 
];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects = [
  {
    name: "Employee Database Management System",
    description:
      "Technologies Used: ReactJS,React Router,React Hooks,Node js,Express,MongoDb.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
    ],
    
    source_code_link: "https://github.com/AnuragKumar91/Employee_database_Management_app",
  },
  {
    name: "React CRUD app",
    description:
    "Technologies Used: ReactJS,PHP,SQl,Rest API and Implemented a PHP-based server to handle CRUD operations on a SQL database, enabling data managemen ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "SQL",
        color: "grey-text-gradient",
      },
    ],
   
    source_code_link: "https://github.com/AnuragKumar91/React-crud-app-with-php-and-mySQL",
  },
  {
    name: "Infinite Scroll  using React ",
    description:
      "Technologies Used:React,JavaScript/ES6,Axios for API fetching",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Axios",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    
    source_code_link: "https://github.com/AnuragKumar91/Infinte-Scroll-using-React",
  },
];

export { services, technologies, experiences,  projects };

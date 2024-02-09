import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IProject, Service, Skill } from "./types";

import { BsCircleFill } from "react-icons/bs";

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "Hands-on experience in frontend development, specializing in crafting visually stunning and intuitive user interfaces. ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "Full experience in backend development, working with a variety of programming languages such as Python, Java, or Node.js. I am well-versed in designing and implementing robust backend architectures, RESTful APIs, and database integration.",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "In API development, working with a variety of technologies and frameworks such as Node.js, Express, Django, or Flask. I am well-versed in designing, developing, and deploying RESTful APIs that adhere to industry best practices and standards.",
  },
  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about:
      "Deep understanding of algorithms, data structures, and various programming paradigms. I can efficiently analyze problems and devise optimal solutions, taking into account time and space complexity.",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX designer",
    about:
      "Crafting intuitive and engaging user experiences that captivate audiences and drive business success",
  },
  {
    Icon: RiComputerLine,
    title: "Blockchain Development",
    about:
      "Full experience in blockchain development, working with popular platforms and frameworks such as Ethereum, Hyperledger, or Corda.",
  },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "React/Next",
    level: "97",
  },
  {
    Icon: BsCircleFill,
    name: "Vue/Nuxt",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Angular",
    level: "84",
  },
  {
    Icon: BsCircleFill,
    name: "Node JS",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Nest JS",
    level: "86",
  },
  {
    Icon: BsCircleFill,
    name: "Golang",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Gin",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Redis",
    level: "82",
  },
  {
    Icon: BsCircleFill,
    name: "AWS",
    level: "86",
  },
  {
    Icon: BsCircleFill,
    name: "RabbitMQ",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "PyUnit",
    level: "84",
  },
  {
    Icon: BsCircleFill,
    name: "Mocha",
    level: "87",
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Jest",
    level: "88",
  },
  {
    Icon: BsCircleFill,
    name: "Scrum",
    level: "92",
  },
  {
    Icon: BsCircleFill,
    name: "Agile",
    level: "93",
  },
  {
    Icon: BsCircleFill,
    name: "GIT",
    level: "96",
  },
  {
    Icon: BsCircleFill,
    name: "Azure DevOps",
    level: "93",
  },
  {
    Icon: BsCircleFill,
    name: "Blockchain Technology",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "Cryptography",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "Consenus Algorithms",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "Smart Contracts",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "Distributed Systems",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "Data Structures",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "OOPs",
    level: "90",
  },
];

export const projects: IProject[] = [
  // {
  //   name: "COVID Tracker",
  //   description:
  //     "This app shows a statistical view about corona virus over the world",
  //   image_path: "/images/covid.jpg",
  //   deployed_url: "https://covid-19-tracker-by-sumit.web.app/",
  //   github_url: "https://github.com/Dey-Sumit/covid-19-tracker",
  //   category: ["react"],
  //   key_techs: ["React", "Chart.js", "Material UI"],
  // },
  {
    name: "Algorithm Visualizer",
    image_path: "/images/algoVisual.png",
    deployed_url: "https://visual-algorithm.web.app/",
    github_url: "https://github.com/over-light/algorithm-visualizer",
    category: ["backend"],
    description:
      "An web app which shows how an algorithm (path finding or sorting) works with cool animation",
    key_techs: ["React", "firebase", "Framer Motion"],
  },

  {
    name: "Dev Talks",
    image_path: "/images/dev.jpg",
    deployed_url: "https://dev-talks.herokuapp.com/",
    github_url: "https://github.com/over-light/Dev-talks",
    category: ["backend"],
    description:
      "Social Media app for developers who can share project,create posts,etc...",
    key_techs: [
      "React",
      "Redux",
      "Node",
      "Express",
      "Mongo",
      "REST API",
      "Bootstrap",
    ],
  },

  {
    name: "Realtime Chat App",
    image_path: "/images/chatapp.jpg",
    deployed_url: "https://sumit-chat.netlify.app/",
    github_url: "https://github.com/over-light/chat-app-socket.io-react-node",
    category: ["backend"],
    description:
      "Basic Realtime Chat App where one can create a room can talk to each other",
    key_techs: ["React", "Node", "Express", "Socket", "Bootstrap"],
  },

  {
    name: "Movies App - Information about your favorite movie",
    image_path:
      "/images/Movies App - Information about your favorite movie.png",
    deployed_url: "https://movies-app-orcin.vercel.app/",
    github_url: "https://github.com/over-light/movies-app-orcin",
    category: ["frontend"],
    description:
      "Implemented lazy load, search features with debouncing, client-side sorting and filtering. Optimized app performance and loading speed by using the Typescript and implementing SSR(server-side rendering). Integrated front-end with back-end API using Axios.",
    key_techs: ["HTML5", "CSS3", "TypeScript", "React", "NextJS", "Axios"],
  },

  {
    name: "G Mining Ventures - Saas Landing Page Website",
    image_path: "/images/robert-weather-9638.png",
    deployed_url: "https://robert-weather-9638.netlify.app/",
    github_url: "https://github.com/over-light/robert-weather-9638",
    category: ["frontend"],
    description:
      "Designed front-end using Vue/Vuex and Bootstrap 4. Utilized of client-side routing with Vue Router, and advanced state management patterns with Vuex. Implemented registration and authentication with Laravel Passport and MySQL. Integrated Payment Gateway using Stripe API.",
    key_techs: [
      "HTML5",
      "CSS3",
      "TypeScript",
      "Vue",
      "Vuex",
      "Bootstrap 4",
      "PHP/Laravel6.2",
      "Passport",
      "My SQL.",
    ],
  },

  {
    name: "Sushi E-Commerce Web Application",
    image_path: "/images/sushier.jpg",
    deployed_url: "https://www.sushier.app/",
    github_url:
      "https://github.com/over-light/Sushi E-Commerce Web Application",
    category: ["frontend"],
    description:
      "Developed with React and Next.js for a fast and interactive user experience. Used NextAuth for secure user authentication, with credential and Google providers. Integrated with Stripe to bring secure, in-app payment options to Sushier",
    key_techs: [
      "React.js",
      "Next.js",
      "NextAuth",
      "MongoDB Atlas",
      "Amazon S3",
      "Vercel",
    ],
  },
  {
    name: "Top-three-crypto",
    image_path: "/images/Top3 crypto currencies.png",
    deployed_url: "https://www.finalproject.in/",
    github_url: "https://github.com/over-light/Top-three-crypto",
    category: ["blockchain"],
    description:
      "Web application developed using latest technologies that shows the top three cryptocurencies. ",
    key_techs: [""],
  },

  {
    name: "Fake-Product-Identification-Using-Blockchain",
    image_path: "/images/www.finalproject.png",
    deployed_url: "https://www.finalproject.in/",
    github_url: "https://github.com/over-light/www.finalproject",
    category: ["blockchain"],
    description:
      "The manufacturing as well as marketing of counterfeit or duplicate products and goods leads to consequential financial, health and safety threat to end users. It also has adverse effect on the economic growth of original manufacturers and businesses through revenue loss, product defamation, downtime, replacement expenses, forcing many brands to spend money on fighting counterfeits, trust among business partners can also be at risk, stealing sales etc. ",
    key_techs: [""],
  },
  {
    name: "Source Token",
    image_path: "/images/www.sourceprotocol.io.png",
    deployed_url: "https://www.sourceprotocol.io/",
    github_url: "https://github.com/over-light/www.sourceprotocol",
    category: ["blockchain"],
    description:
      "Participated in developing Source token contract as a blockchain developer.",
    key_techs: [""],
  },
  {
    name: "Blue Move",
    image_path: "/images/dex.bluemove.png",
    deployed_url: "https://dex.bluemove.net/",
    github_url: "https://github.com/over-light/dex.bluemove",
    category: ["blockchain"],
    description:
      "Participated in developing swap contract for AMM DEX on BlockChain.",
    key_techs: [""],
  },
  {
    name: "pathDAO",
    image_path: "/images/www.pathdao.png",
    deployed_url: "https://www.pathdao.io/",
    github_url: "https://github.com/over-light/www.pathdao",
    category: ["blockchain"],
    description: "Created pathDAO token contract from scratch.",
    key_techs: [""],
  },
];

//   {
//     name: "Tweeter Clone",
//     image_path: "/images/tweetme.jpg",
//     deployed_url: "http://sumaxtweetme.pythonanywhere.com/",
//     github_url: "https://github.com/Dey-Sumit/tweetme",
//     category: ["django", "react"],
//     description:
//       "First Django Project :) | Typical Social Media App where one can post,like ,comment etc",
//     key_techs: ["React", "Django", "Django REST API"],
//   },

//   {
//     name: "Color Classification using tf.js",
//     image_path: "/images/color.jpg",
//     deployed_url: "!#",
//     github_url: "https://github.com/Dey-Sumit/color-classification",
//     category: ["express"],
//     description:
//       "Tried ML with JS :) | this app classifies a color using CNN algorithm in browser",
//     key_techs: ["Express", "TensorFlow.js", "Vanilla js"],
//   },
//   {
//     name: "YouTube using YouTube ",
//     image_path: "/images/youtubeClone.png",
//     deployed_url: "https://not-utube.web.app/",
//     github_url: "https://github.com/Dey-Sumit/youtube-clone-tutorial-up",
//     category: ["express"],
//     description:
//       'Full(almost) Functional YouTube replica where one can login with his/her youtube account to enjoy "not-YouTube".User can like a video,comment on a video & Much More ',
//     key_techs: [
//       "React",
//       "Redux",
//       "Firebase Auth",
//       "YouTube API",
//       "Sass",
//       "Bootstrap",
//     ],
//   },
//   {
//     name: "Football App",
//     image_path: "/images/football.png",
//     deployed_url: "https://o-my-goal.web.app/",
//     github_url: "https://github.com/Dey-Sumit/football-app",
//     category: ["react"],
//     description:
//       "o my goal replica where an user can keep an eye on his favorite club.This app will keep providing \n all the statistics of that club.all the fans can also chat ",
//     key_techs: ["React", "Redux", "Firebase Auth", "API", "Sass", "Bootstrap"],
//   },
// ];

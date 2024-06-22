import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaFigma,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

// experience data for resume.
export const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "As a developer, I’ve built responsive web applications with Next.js, React, and Tailwind CSS, integrated APIs, managed MongoDB databases, and created dynamic dashboards, ensuring seamless functionality and exceptional user experiences.",
  items: [
    {
      company: "Smart iT Ventures",
      position: "NodeJs Intern",
      duration: "June-2022 - August-2022",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, aliquid? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa delectus laborum voluptate aliquam.",
    },
  ],
};

// education data for resume.
export const education = {
  icon: "src/assets/resume/cap.svg",
  title: "My education",
  description:
    "I completed my B.Tech in Computer Science Engineering from Chandigarh University (2020-2024), gaining a strong foundation in web development, database management, and modern technologies, preparing me for a successful tech career.",
  items: [
    {
      institution: "Chandigarh University",
      degree: "Bachelor's in CSE",
      duration: "August, 2020 - July, 2024",
      percentage: "80.3%",
    },
    {
      institution: "Shiwalik Public School",
      degree: "Senior Secondary School - 12th",
      duration: "March, 2019 - March, 2020",
      percentage: "76.6%",
    },
    {
      institution: "Shiwalik Public School",
      degree: "High School - 10th",
      duration: "March, 2017 - April, 2018 ",
      percentage: "79.2%",
    },
  ],
};

// skills for resume.
export const skills = {
  title: "My skills",
  description:
    "My skills include full-stack web development with Next.js, React, and Node.js, responsive design with Tailwind CSS, API integration, database management with MongoDB, and creating dynamic dashboards with Recharts.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS3",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <FaJs />,
      name: "Javascript",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
  ],
};

// data for the about section for resume.
export const about = {
  title: "About Me",
  description:
    "I’m Tushar Rathi, a dedicated web developer with a B.Tech in CSE. I specialize in creating responsive, user-friendly web applications and offer services in UI/UX design, logo designing, and SEO.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Tushar Rathi",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+91) 6283220270",
    },
    {
      fieldName: "Experience",
      fieldValue: "1 Year",
    },
    {
      fieldName: "Skype",
      fieldValue: "Tushar Rathi",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldName: "Email",
      fieldValue: "tushar.rathi.tech@gmail.com",
    },
    {
      fieldName: "FullStack Dev",
      fieldValue: "Available",
    },
    {
      fieldName: "Language",
      fieldValue: "English, Hindi",
    },
  ],
};

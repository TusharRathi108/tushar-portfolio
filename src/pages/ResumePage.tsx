import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaFigma,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

// data for the about section for resume.
const about = {
  title: "About Me",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit unde reiciendis inventore recusandae aliquam iusto reprehenderit facilis dolor consectetur autem!",
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

// experience data for resume.
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, aliquid? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa delectus laborum voluptate aliquam.",
  items: [
    {
      company: "Smart iT Ventures",
      position: "NodeJs Intern",
      duration: "June-2022 - August-2022",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, aliquid? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa delectus laborum voluptate aliquam.",
    },
    {
      company: "Smart iT Ventures",
      position: "NodeJs Intern",
      duration: "June-2022 - August-2022",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, aliquid? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa delectus laborum voluptate aliquam.",
    },
    {
      company: "Smart iT Ventures",
      position: "NodeJs Intern",
      duration: "June-2022 - August-2022",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, aliquid? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa delectus laborum voluptate aliquam.",
    },
    {
      company: "Smart iT Ventures",
      position: "NodeJs Intern",
      duration: "June-2022 - August-2022",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, aliquid? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa delectus laborum voluptate aliquam.",
    },
    {
      company: "Smart iT Ventures",
      position: "NodeJs Intern",
      duration: "June-2022 - August-2022",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, aliquid? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa delectus laborum voluptate aliquam.",
    },
    {
      company: "Smart iT Ventures",
      position: "NodeJs Intern",
      duration: "June-2022 - August-2022",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, aliquid? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa delectus laborum voluptate aliquam.",
    },
    {
      company: "Smart iT Ventures",
      position: "NodeJs Intern",
      duration: "June-2022 - August-2022",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, aliquid? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa delectus laborum voluptate aliquam.",
    },
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
const education = {
  icon: "src/assets/resume/cap.svg",
  title: "My education",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, aliquid? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa delectus laborum voluptate aliquam.",
  items: [
    {
      institution: "Chandigarh University",
      degree: "Bachelor's in Computer Science & Engineering",
      duration: "August, 2020 - July, 2024",
      percentage: "80.3%",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, aliquid? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa delectus laborum voluptate aliquam.",
    },
    {
      institution: "Shiwalik Public School",
      degree: "Senior Secondary School - 12th",
      duration: "March, 2019 - March, 2020",
      percentage: "76.6%",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, aliquid? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa delectus laborum voluptate aliquam.",
    },
    {
      institution: "Shiwalik Public School",
      degree: "High School - 10th",
      duration: "March, 2017 - April, 2018 ",
      percentage: "79.2%",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, aliquid? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa delectus laborum voluptate aliquam.",
    },
  ],
};

// skills for resume.
const skills = {
  title: "My skills",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit unde reiciendis inventore recusandae aliquam iusto reprehenderit facilis dolor consectetur autem!",
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

const ResumePage = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          delay: 1.5,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[617px] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience"> Experience </TabsTrigger>
            <TabsTrigger value="education"> Education </TabsTrigger>
            <TabsTrigger value="skills"> Skills </TabsTrigger>
            <TabsTrigger value="about-me"> About Me </TabsTrigger>
          </TabsList>
          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {" "}
                  {experience.description}{" "}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-orange-300 h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-orange-900 font-extra-bold">
                            {" "}
                            {item.duration}{" "}
                          </span>
                          <h3 className="text-xl text-orange-950/75 max-w-[260px] min-h-[40px] text-center lg:text-left">
                            {" "}
                            {item.position}{" "}
                          </h3>
                          <div className="flex items-center gap-3 ">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-orange-900"></span>
                            <p className="text-black"> {item.company} </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {" "}
                  {education.description}{" "}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-orange-300 h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-orange-900 font-extra-bold">
                            {" "}
                            {item.duration}{" "}
                          </span>
                          <h3 className="text-xl text-orange-950/75 max-w-[260px] min-h-[40px] text-center lg:text-left">
                            {" "}
                            {item.degree}{" "}
                          </h3>
                          <div className="flex items-center gap-3 ">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-orange-900"></span>
                            <p className="text-black"> {item.institution} </p>
                            <p className="text-black"> - {item.percentage} </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {" "}
                  {skills.description}{" "}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.skillList.map((skill, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-orange-300 rounded-xl flex justify-center items-center group ">
                                <div className="text-6xl text-orange-800 group-hover:text-slate-900 transition-all duration-300 ">
                                  {" "}
                                  {skill.icon}{" "}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize"> {skill.name} </p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* about-me */}
            <TabsContent
              value="about-me"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {" "}
                  {about.description}{" "}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                    {about.info.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="flex items-center justify-center xl:justify-start gap-4"
                        >
                          <span className="text-white/60">
                            {" "}
                            {item.fieldName}{" "}
                          </span>
                          <span className="text-xl"> {item.fieldValue} </span>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default ResumePage;

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { education, about, experience, skills } from "@/utils/resume-info";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ResumePage = () => {
  return (
    <motion.section
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          delay: 1,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex items-center justify-center py-6 xl:py-0"
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
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-justify">
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
                <h3 className="text-xl sm:text-4xl font-bold">
                  {education.title}
                </h3>
                <p className="max-w-[300] md:max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {" "}
                  {education.description}{" "}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-orange-300 h-[184px] py-1 px-5 sm:py-6 sm:px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-orange-900 font-extra-bold text-[15px] sm:text-xl py-0 md:py-2">
                            {" "}
                            {item.duration}{" "}
                          </span>
                          <h3 className="text-[15px] md:text-[17px] text-orange-950/75 max-w-[260px] md:max-w-[306px] min-h-[20px] md:min-h-[40px] text-center lg:text-left">
                            {" "}
                            {item.degree}{" "}
                          </h3>
                          <div className="flex items-center gap-3 ">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-orange-900"></span>
                            <p className="text-black"> {item.institution} </p>
                            <span>
                              <p className="text-black">
                                {" "}
                                - {item.percentage}{" "}
                              </p>
                            </span>
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
                <h3 className="text-2xl sm:text-4xl font-bold">
                  {about.title}
                </h3>
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
                          className="flex items-center justify-center xl:justify-start gap-2 sm:gap-4"
                        >
                          <span className="text-[14px] text-wrap sm:text-xl text-white/60">
                            {" "}
                            {item.fieldName}{" "}
                          </span>
                          <span className="text-[14px] text-wrap sm:text-xl">
                            {" "}
                            {item.fieldValue}{" "}
                          </span>
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
    </motion.section>
  );
};

export default ResumePage;

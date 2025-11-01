import { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { projects } from "@/utils/project-info";
import WorkSlideBtns from "@/components/WorkSlideBtns";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// CSS imports
import "swiper/css";

const WorkPage = () => {
  // state for the current project.
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: SwiperClass) => {
    // get current slide index.
    const currentIndex = swiper.activeIndex;

    // update praject state based on the current slide index.
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-6 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none text-wrap">
            <div className="flex flex-col text-justify text-wrap gap-[30px] h-[50%]">
              {/* Outline num */}
              <div className="text-8xl leading-none font-extra-bold text-transparent text-outline ">
                {" "}
                {project.num}{" "}
              </div>
              {/* Project title */}
              <h2 className="text-[42px] font-bold leading-none text-white capitalize">
                {project.title}
              </h2>
              {/* Project description */}
              <p className="text-white/60">
                {" "}
                <span className="text-orange-400">
                  (Category: {project.category})
                </span>{" "}
                {project.description}
              </p>
              {/* Tech-stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="text-[11px] xl:text-lg text-orange-300"
                    >
                      {item.name}
                      {/* Remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* Border */}
              <div className="border border-white/20"></div>
              {/* Buttons */}
              <div className="flex items-center gap-4">
                {/* Live project link */}
                <NavLink to={project.live}>
                  {" "}
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-orange-300" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="capitalize">Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>{" "}
                </NavLink>
                {/* Github repository link */}
                {project.github ?? (
                  <NavLink to={project.github}>
                    {" "}
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-orange-300" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="capitalize">Github Repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>{" "}
                  </NavLink>
                )}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full ">
                    <div className="h-[460px] relative group flex justify-center items-center">
                      {/* Overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10 rounded-md"></div>
                      {/* Image */}
                      <Avatar className="w-full h-full relative rounded-md border border-orange-300">
                        <AvatarImage
                          src={project.image}
                          className="object-cover"
                        />
                      </Avatar>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* Slider button */}
              <WorkSlideBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none px-2"
                btnStyles="bg-orange-300/70 xl:bg-orange-300 hover:bg-orange-100/70 text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all rounded-2xl "
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default WorkPage;

import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { Typewriter } from "react-simple-typewriter";

// typewriter words array.
const skills = [
  "Frontend: React, Next.js, Tailwind CSS, Radix UI, Chakra UI",
  "Backend: Node.js, Express, Prisma, Git HUB",
  "Database: MongoDB Atlas, MySQL",
  "Tools & Libraries: Shadcn/UI, Vite, TypeScript, Axios, Tanstack Query, React Router, Recharts",
];

const HomePage = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-[81px]">
          {/* Information about me */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-2xl block xl:inline">
              Full-Stack Developer
            </span>
            <h1 className="h1 mb-3">
              Hello I'm!
              <br />
              <span className="text-accent">Tushar Rathi</span>
            </h1>
            <p className="max-w-[500px] mx-auto xl:mx-0 mb-9 text-white/80">
              A passionate developer with a knack for crafting
              elegant digital experiences. Proficient in:{" "}
              <br/>
              <span className="text-accent">
                {"  "}
                <Typewriter
                  words={skills}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={200}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />{" "}
              </span>
            </p>
            {/* socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size={"lg"}
                className="uppercase flex items-center gap-2 transition delay-150 duration-300 ease-in-out"
              >
                <span>Download CV</span> <FiDownload className="text-xl" />
              </Button>
              <div className="mb-3 xl:mb-0">
                <Socials
                  containerStyles={"flex gap-6 "}
                  iconStyles={
                    "w-12 h-12 border border-accent rounded-full flex justify-center items-center text-accent hover:bg-accent hover:text-primary hover:transition-all duration-500"
                  }
                />
              </div>
            </div>
          </div>
          {/* Profile photo */}
          <div className="mb-5 order-1 xl:order-none">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;

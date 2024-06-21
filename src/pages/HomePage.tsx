import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import Socials from "@/components/Socials";
import { FiDownload } from "react-icons/fi";
import { skills } from "@/utils/skill-info";
import { Button } from "@/components/ui/button";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between pb-4 xl:pt-1 xl:pb-[80px]">
          {/* Information about me */}
          <div className="text-center xl:h-[425px] xl:text-left order-2 xl:order-none backdrop-blur-lg bg-black/40 shadow-slate-200/20 shadow-lg rounded-3xl px-7 py-4">
            <h1 className="text-4xl p-2 mb-3">
              <span className="text-orange-300">Hi, myself</span>
              <br />
              <span className="h1">Tushar Rathi</span>
            </h1>
            <span className="text-2xl mb-6">
              And I'm a{" "}
              <span className="text-orange-300">
                <Typewriter
                  words={["Fullstack Developer"]}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={50}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </span>
            </span>
            <p className="max-w-[600px] xl:mx-0 mb-9 text-white/80">
              A passionate developer with a knack for crafting elegant digital
              experiences. <br /> Proficient in: <br />
              <span className="text-orange-300">
                {"  "}
                <Typewriter
                  words={skills}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={20}
                  deleteSpeed={20}
                  delaySpeed={4000}
                />{" "}
              </span>
            </p>
            {/* DownLoad CV */}
            <div className="flex flex-col justify-center xl:flex-row items-center gap-8">
              <a
                href={"/assets/resume/SDE_Resume.pdf"}
                download="Tushar-Resume"
              >
                <Button
                  variant="outline"
                  size={"lg"}
                  className="uppercase border-orange-300 text-orange-400 hover:bg-orange-300 hover:text-slate-800 flex items-center gap-2 transition delay-150 duration-300 ease-in-out"
                >
                  <span>Download CV</span> <FiDownload className="text-xl" />
                </Button>
              </a>
              {/* Socials Buttons */}
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles={"flex gap-6 "}
                  iconStyles={
                    "w-12 h-12 border rounded-full flex justify-center items-center border-orange-300 text-orange-400 hover:text-slate-800 hover:bg-orange-300 hover:transition-all duration-500"
                  }
                />
              </div>
            </div>
          </div>
          {/* Profile photo */}
          <div className="mb-8 order-1 xl:order-none xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default HomePage;

import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const HomePage = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col md:flex-row items-center justify-between md:pt-8 md:pb-20">
          {/* Information about me */}
          <div className="text-center md:text-left mt-5 order-2 md:order-none">
            <span className="text-xl"> Software Developer </span>
            <h1 className="h3 md:h2 xl:h1 mt-8 mb-8 md:mb-9">
              {" "}
              Hello I'm <br />{" "}
              <span className="text-accent"> Tushar Rathi </span>{" "}
            </h1>
            <p className="hidden md:block max-w-[500px] mb-12 md:mb-9 text-white/80">
              {" "}
              I excel at crafting elegant digital experiences and I am
              proeficient in various programming languages and technologies.{" "}
            </p>
            {/* socials */}
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-9">
              <Button
                variant="outline"
                size={"lg"}
                className="flex items-center gap-2 transition delay-150 duration-300 ease-in-out"
              >
                {" "}
                <span>
                  {" "}
                  Download CV{" "}
                </span> <FiDownload className="text-xl" />{" "}
              </Button>
              <div className="mb-5 md:mb-0">
                {" "}
                <Socials
                  containerStyles={"flex gap-6 "}
                  iconStyles={
                    "w-12 h-12 border border-accent rounded-full flex justify-center items-center text-accent hover:bg-accent hover:text-primary hover:transition-all duration-500"
                  }
                />{" "}
              </div>
            </div>
          </div>
          {/* Profile photo */}
          <div className="mb-2 order-1 md:order-none">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;

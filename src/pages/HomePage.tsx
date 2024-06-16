import Socials from "@/components/Socials";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const HomePage = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col md:flex-row items-center justify-between md:pt-8 md:pb-24">
          {/* Information about me */}
          <div className="text-center md:text-left">
            <span className="text-xl"> Software Developer </span>
            <h1 className="h1 mb-6">
              {" "}
              Hello I'm <br />{" "}
              <span className="text-accent"> Tushar Rathi </span>{" "}
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              {" "}
              I excel at crafting elegant digital experiences and I am
              proeficient in various programming languages and technologies.{" "}
            </p>
            {/* socials */}
            <div className="flex flex-col md:flex-row items-center gap-8">
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
              <div className="mb-8 md:mb-0">
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
          <div>
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;

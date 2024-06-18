import MobileNav from "@/components/MobileNav";
import NavBar from "@/components/NavBar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between xl:justify-center items-center gap-8">
        {/* Logo */}
        <NavLink to={"/"}>
          {" "}
          <h1 className="text-4xl h-[80px] w-[80px] shadow-slate-500 shadow-inner font-semibold rounded-3xl from-slate-500 via-slate-700 to-black bg-gradient-to-r">
            <Avatar className="h-full w-full p-1">
              <AvatarImage src="src/assets/TR-Logo.png" alt="TR" />
              <AvatarFallback> TR </AvatarFallback>
            </Avatar>
          </h1>{" "}
        </NavLink>
        {/* Desktop navbar & hire me button */}
        <div className="hidden xl:flex items-center gap-8">
          <NavBar />
          <NavLink to={"/contact"}>
            <Button className="rounded-full bg-orange-300 shadow-orange-400 shadow-md text-black hover:shadow-slate-200 hover:bg-white transition delay-150 duration-300 ease-in-out">
              Hire Me
            </Button>{" "}
          </NavLink>
        </div>
        {/* Mobile nav bar. */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;

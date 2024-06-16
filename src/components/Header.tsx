import { NavLink } from "react-router-dom";
import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import MobileNav from "@/components/MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between">
        {/* Logo */}
        <NavLink to={"/"}>
          {" "}
          <h1 className="text-4xl h-[70px] w-[70px] shadow-slate-500 shadow-inner font-semibold rounded-3xl from-slate-500 via-slate-700 to-black bg-gradient-to-r">
            <Avatar className="h-full w-full p-1">
              <AvatarImage src="src/assets/TR-Logo.png" alt="TR" />
              <AvatarFallback> TR </AvatarFallback>
            </Avatar>
          </h1>{" "}
        </NavLink>
        {/* Desktop navbar & hire me button */}
        <div className="hidden md:flex items-center gap-8">
          <NavBar />
          <NavLink to={"/contact"}>
            <Button className="shadow-slate-600 shadow-inner` rounded-lg bg-slate-950/100 text-white hover:bg-white hover:text-black transition delay-150 duration-300 ease-in-out">
              Hire Me
            </Button>{" "}
          </NavLink>
        </div>
        {/* Mobile nav bar. */}
        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;

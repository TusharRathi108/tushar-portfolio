import { NavLink } from "react-router-dom";
import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between">
        {/* Logo */}
        <NavLink to={"/"}>
          {" "}
          <h1 className="text-4xl font-semibold">
            <Avatar className="h-[70px] w-[70px] rounded-md">
              <AvatarImage src="src/assets/TR-Logo.png" alt="TR" />
              <AvatarFallback> TR </AvatarFallback>
            </Avatar>
          </h1>{" "}
        </NavLink>
        {/* Desktop navbar & hire me button */}
        <div className="hidden md:flex items-center gap-8">
          <NavBar />
          <NavLink to={"/contact"}>
            <Button className="rounded-md p-2 bg-slate-950 hover:bg-slate-900">
              Hire Me
            </Button>{" "}
          </NavLink>
        </div>
        {/* Mobile nav bar. */}
        <div className="md:hidden">Mobile Nav</div>
      </div>
    </header>
  );
};

export default Header;

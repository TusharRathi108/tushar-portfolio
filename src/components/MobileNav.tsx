import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useLocation, NavLink } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// links for the mobile navigation.
const links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];

const MobileNav = () => {
  const { pathname } = useLocation();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-slate-200" />
      </SheetTrigger>
      <SheetContent className="text-black felx felx-col bg-[radial-gradient(circle_at_left,_var(--tw-gradient-stops))] from-slate-800 to-black">
        {/* Logo */}
        <NavLink to={"/"}>
          {" "}
          <div className="mt-[50px] flex flex-col gap-1 items-center text-center text-md">
            <Avatar className="h-[100px] w-[100px] rounded-3xl">
              <AvatarImage src="src/assets/images/TR-Logo.svg" alt="TR" />
              <AvatarFallback> TR </AvatarFallback>
            </Avatar>
            {/* name */}
            <div className="text-center text-slate-100 mb-10">
              {" "}
              Tushar Rathi{" "}
            </div>
          </div>
        </NavLink>
        {/* navigation links */}
          <nav className="flex flex-col justify-center items-center text-white gap-4">
            {links.map((link) => {
              return (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={`${
                    link.path === pathname &&
                    "text-orange-300 border-b-2 border-orange-300"
                  } 
              capitalize hover:text-orange-300 transition-all durantion-500 ease-in`}
                >
                  {link.name}
                </NavLink>
              );
            })}
          </nav>
          <div className="text-sm text-white text-center my-64 mb-1"> @Copyright Tushar Rathi </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;

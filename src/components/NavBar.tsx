import { NavLink, useLocation } from "react-router-dom";

// links array contains onjects with name and path for nav-bar links.
const links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];

const NavBar = () => {
  // getting the path.
  const { pathname } = useLocation();
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <NavLink
            key={index}
            to={link.path}
            className={`${
              link.path === pathname && "text-accent border-b-2 border-accent"
            } capitalize font-medium hover:text-accent transition-all `}
          >
            {link.name}
          </NavLink>
        );
      })}
    </nav>
  );
};

export default NavBar;

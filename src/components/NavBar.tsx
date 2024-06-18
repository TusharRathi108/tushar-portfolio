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
              link.path === pathname &&
              "text-orange-300 border-b-2  border-orange-300"
            } capitalize font-medium hover:text-orange-300 hover:transition duration-500`}
          >
            {link.name}
          </NavLink>
        );
      })}
    </nav>
  );
};

export default NavBar;

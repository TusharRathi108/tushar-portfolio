import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

// dunamic array of socials.
const socials = [
  {
    name: "github",
    path: "https://github.com/TusharRathi108",
    icon: <FaGithub />,
  },
  {
    name: "linkedin",
    path: "https://www.linkedin.com/in/tushar-rathi-2ab6b1230CSS,andJavaScript.Developeddynamicandresponsivewebsites",
    icon: <FaLinkedinIn />,
  },
  {
    name: "twitter",
    path: "https://x.com/tushar_rathi__",
    icon: <FaTwitter />,
  },
];

// props for socials
interface SocialsProps {
  containerStyles?: string;
  iconStyles?: string;
}

const Socials = ({ containerStyles, iconStyles }: SocialsProps) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <NavLink key={index} to={item.path} className={iconStyles}>
            {item.icon}
          </NavLink>
        );
      })}
    </div>
  );
};

export default Socials;

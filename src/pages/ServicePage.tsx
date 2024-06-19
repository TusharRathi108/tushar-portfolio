import { BsArrowDownRight } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

// services offered in the portfolio.
const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, minus.",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, minus.",
    href: "",
  },
  {
    num: "03",
    title: "Logo Designer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, minus.",
    href: "",
  },
  {
    num: "04",
    title: "SEO",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, minus.",
    href: "",
  },
];

const ServicePage = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-8 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 felx flex-col justify-center gap-6 group"
              >
                {/* Top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extra-bold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <NavLink
                    to={service.href}
                    className="w-[50px] h-[50px] rounded-full bg-white group-hover:bg-orange-300 transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-2xl" />
                  </NavLink>
                </div>
                {/* Title */}
                <h2 className="text-[42px] font-bold leading-none text-white py-2 group-hover:text-orange-300 transition-all duration-500">
                  {" "}
                  {service.title}{" "}
                </h2>
                {/* Description */}
                <p className="text-white/60"> {service.description} </p>
                {/* Border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicePage;

import { BsArrowDownRight } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore natus dicta amet? Ab harum, accusamus impedit fugiat dicta officiis totam provident, vitae doloremque nostrum qui.",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore natus dicta amet? Ab harum, accusamus impedit fugiat dicta officiis totam provident, vitae doloremque nostrum qui.",
    href: "",
  },
  {
    num: "03",
    title: "Logo Designer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore natus dicta amet? Ab harum, accusamus impedit fugiat dicta officiis totam provident, vitae doloremque nostrum qui.",
    href: "",
  },
  {
    num: "04",
    title: "SEO",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore natus dicta amet? Ab harum, accusamus impedit fugiat dicta officiis totam provident, vitae doloremque nostrum qui.",
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
                  <div className="text-5xl font-extra-bold">{service.num}</div>
                  <NavLink to={service.href}>
                    <BsArrowDownRight />
                  </NavLink>
                </div>
                {/* Title */}
                <h2> {service.title} </h2>
                {/* Description */}
                <p> {service.description} </p>
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

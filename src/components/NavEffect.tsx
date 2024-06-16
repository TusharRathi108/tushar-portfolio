import { AnimatePresence, motion } from "framer-motion";

const NavEffect = () => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="h-screen w-screen md:bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-slate-950 via-slate-500 to-black fixed top-0 pointer-events-none"
        initial={{ opacity: 1 }}
        animate={{
          opacity: 0,
          transition: {
            delay: 1,
            duration: 0.4,
          },
        }}
      />
    </AnimatePresence>
  );
};

export default NavEffect;

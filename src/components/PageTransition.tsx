import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";

export const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

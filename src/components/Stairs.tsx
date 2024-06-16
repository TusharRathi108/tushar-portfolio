// import { motion } from "framer-motion";

// // Variants
// const stairsAnimation = {
//   initial: {
//     top: "0%",
//   },
//   animate: {
//     top: "100%",
//   },
//   exit: {
//     top: "100%",
//   },
// };

// // Calculate the reverse index for staggered delay
// const reverseIndex = (index: number) => {
//   const totalSteps = 6;
//   return totalSteps - (index + 1);
// };

// const Stairs = () => {
//   return (
//     <>
//       {/* Render 6 motion divs, each representing a step of the stairs */}
//       {[...Array(6)].map((_, index) => (
//         <motion.div
//           key={index}
//           variants={stairsAnimation}
//           initial="initial"
//           animate="animate"
//           exit="exit"
//           transition={{
//             duration: 0.4,
//             ease: "easeInOut",
//             delay: reverseIndex(index) * 0.1,
//           }}
//           className="relative h-full w-full top-0 bg-white" // Adjusted width and height
//         />
//       ))}
//     </>
//   );
// };

// export default Stairs;

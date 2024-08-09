import { motion, useScroll, useSpring } from "framer-motion";

function ProgressScroll() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 origin-left h-[8px] container-layout  bg-gradient-to-r from-violet-600 to-indigo-600"
      style={{ scaleX }}
    />
  );
}

export default ProgressScroll;

import { motion, useScroll, useSpring } from "framer-motion";

function ProgressScroll() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);
  return (
    <motion.div
      className="fixed inset-0 origin-left h-[8px] container-layout  bg-gradient-to-r from-violet-600 to-indigo-600"
      style={{ scaleX }}
    />
  );
}

export default ProgressScroll;

import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import NavLinks from "./NavLinks";
import DownloadCvBtn from "../../ui/DownloadCvBtn";
import { useState } from "react";
const menuVariants = {
  closed: {
    opacity: 0,
    x: 300,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};
const contentVariants = {
  closed: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.2,
    },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 0.2,
    },
  },
};

const buttonVariants = {
  closed: { rotate: 0 },
  open: { rotate: 90 },
};

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative md:hidden ">
      <motion.button
        className="text-3xl mt-2"
        onClick={toggleMenu}
        animate={isOpen ? "open" : "closed"}
        variants={buttonVariants}
        transition={{ duration: 0.3 }}
      >
        {isOpen ? <IoClose /> : <FaBars />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute z-[100] top-16 right-0 bg-third-background h-[250px] w-[300px] rounded-lg p-6 "
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <motion.div variants={contentVariants} className="space-y-4">
              <NavLinks isMenu />
              <DownloadCvBtn />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Menu;

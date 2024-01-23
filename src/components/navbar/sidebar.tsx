import { useState } from "react";
import { motion } from "framer-motion";
import ToggleButton from "./toggle-button";
import Links from "./links";

const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};
const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="flex flex-col items-center justify-center bg-white text-black"
      animate={open ? "open" : "closed"}
    >
      <motion.div
        className="z-50 fixed top-0 left-0 bottom-0 w-48 sm:w-96 bg-white"
        variants={variants}
      >
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;

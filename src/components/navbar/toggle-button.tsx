import { motion } from "framer-motion";

interface Props {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ToggleButton = ({ setOpen }: Props) => {
  return (
    <button
      className="z-50 fixed w-12 h-12 rounded-full bg-transparent border-none cursor-pointer text-black"
      onClick={() => setOpen((prev) => !prev)}
      style={{ top: "27px", left: "38px" }}

    >
      <svg width="23" height="23" viewBox="0 0 23 23">
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
        />
        <motion.path
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </button>
  );
};

export default ToggleButton;

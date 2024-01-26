import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }: { type: string }) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className="w-full h-screen relative overflow-hidden flex items-center justify-center"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      <motion.h1
        style={{ y: yText }}
        className="text-7xl text-center sm:text-right sm:text-8xl"
      >
        {type === "services" ? "What I Do?" : "What I Did?"}
      </motion.h1>
      <motion.div className="bg-contain bg-no-repeat  sm:bg-cover bg-bottom w-full h-full absolute z-30 bg-[url('/mountains.png')]" />
      <motion.div
        className="bg-contain bg-no-repeat sm:bg-cover bg-bottom w-full h-full absolute z-20"
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "services" ? "/planets.png" : "/sun.png"
          })`,
        }}
      ></motion.div>
      <motion.div
        style={{ x: yBg }}
        className="bg-[url('/stars.png')] bg-cover bg-bottom w-full h-full absolute z-10"
      />
    </div>
  );
};

export default Parallax;

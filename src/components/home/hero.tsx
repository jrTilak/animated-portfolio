import { motion } from "framer-motion";
import ScrollPng from "../../assets/images/scroll.png";
import HeroPng from "../../assets/images/hero.png";
import { useState } from "react";
const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
} as const;
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
} as const;

const Hero = () => {
  return (
    <div
      className="h-[calc(100vh-6rem)] overflow-hidden relative"
      style={{ background: "linear-gradient(180deg, #0c0c1d, #111132)" }}
    >
      <style>
        {`
          .buttons button {
            padding: 20px;
            border: 1px solid white;
            border-radius: 10px;
            background-color: transparent;
            color: white;
            margin-right: 20px;
            cursor: pointer;
            font-weight: 300;
          }
          `}
      </style>
      <div className="max-w-7xl m-auto h-full z-10">
        <motion.div
          className="w-full sm:w-1/2 h-1/2 sm:h-full flex flex-col justify-center gap-5 sm:gap-10 items-center text-center sm:items-start sm:text-left"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2
            className="text-3xl tracking-widest"
            variants={textVariants}
          >
            TILAK THAPA
          </motion.h2>
          <motion.h1
            className="text-4xl sm:text-7xl font-bold"
            variants={textVariants}
          >
            Full Stack <br />
            Web Developer
          </motion.h1>
          <motion.div variants={textVariants} className="buttons z-10">
            <AnimatedButton text="About Me" />
            <AnimatedButton text="Projects" />
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src={ScrollPng}
            onClick={() => {
              window.scrollTo({
                top: 2 * window.innerHeight,
                behavior: "smooth",
              });
            }}
            alt=""
            className="w-12 cursor-pointer z-10"
          />
        </motion.div>
      </div>
      <motion.div
        className="absolute text-[50vh] -bottom-32 whitespace-nowrap text-[#ffffff09] w-1/2 font-bold"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Writer Content Creator Influencer
      </motion.div>
      <div className="h-1/2 sm:h-full absolute sm:top-0 right-0 w-full sm:w-auto top-[unset] bottom-0 sm:bottom-auto">
        <img src={HeroPng} alt="" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default Hero;

const AnimatedButton = ({ text }: { text: string }) => {
  const [hover, setHover] = useState(false);
  const hoverVariants = {
    initial: {
      opacity: 0,
      height: 0,
      width: 0,
    },
    animate: {
      opacity: 0.4,
      height: "200%",
      width: "200%",
      transition: {
        duration: 0.5,
      },
    },
  } as const;
  return (
    <motion.button
      variants={textVariants}
      className="z-10 relative overflow-hidden w-32"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {text}
      <motion.div
        variants={hoverVariants}
        animate={hover ? "animate" : "initial"}
        className="absolute rounded-full bg-white opacity-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ backdropFilter: "blur(10px)" }}
      ></motion.div>
    </motion.button>
  );
};

import { motion } from "framer-motion";
import ScrollPng from "../../assets/images/scroll.png";
import HeroPng from "../../assets/images/hero.png";
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
            HARVEY TYLER
          </motion.h2>
          <motion.h1
            className="text-4xl sm:text-7xl font-bold"
            variants={textVariants}
          >
            Web developer and UI designer
          </motion.h1>
          <motion.div variants={textVariants} className="buttons z-10">
            <motion.button variants={textVariants} className="z-10">
              See the Latest Works
            </motion.button>
            <motion.button className="z-10" variants={textVariants}>Contact Me</motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src={ScrollPng}
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

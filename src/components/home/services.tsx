import { motion } from "framer-motion";
import SERVICES from "../../assets/constants/services";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  return (
    <motion.div
      className="h-full flex flex-col justify-between"
      variants={variants}
      initial="initial"
      animate={"animate"}
      style={{ background: "linear-gradient(180deg, #0c0c1d, #111132)" }}
    >
      <motion.div
        className="flex-[1] self-center text-center sm:text-right flex-col sm:self-end flex items-center gap-5 sm:flex-row"
        variants={variants}
      >
        <p className="font-extralight text-xl text-gray-400 text-right">
          I focus on building capative WebApps
          <br /> using the latest technologies.
        </p>
        <hr className="w-[300px] h-0.5 bg-gray-800 opacity-60" />
      </motion.div>
      <motion.div
        className="flex-[2] flex w-full flex-col items-center"
        variants={variants}
      >
        <div className="flex-col mt-6 text-center gap-1 sm:items-center flex">
          <h1 className="text-4xl sm:text-8xl sm:font-extralight">
            <motion.b whileHover={{ color: "orange" }}>Unforgettable </motion.b>
            Services
          </h1>
        </div>
      </motion.div>
      <motion.div
        className="flex-[2] flex max-w-7xl m-auto flex-col w-full mb-10"
        variants={variants}
      >
        {
          <div className="flex gap-5 justify-center items-center">
            {SERVICES.map((box) => (
              <Box
                key={box.title}
                title={box.title}
                description={box.description}
                button={box.button}
              />
            ))}
          </div>
        }
      </motion.div>
    </motion.div>
  );
};

export default Services;

const Box = ({
  title,
  description,
  button,
}: {
  title: string;
  description: string;
  button: string;
}) => {
  return (
    <motion.div
      className="sm:p-12 border-2 border-gray-800 flex flex-col justify-between items-center gap-5 p-2 rounded-md shadow-md"
      whileHover={{ scale: 1.05, backgroundColor: "#111132" }}
    >
      <h2 className="font-bold text-center text-purple-300">{title}</h2>
      <p className="text-center">{description}</p>
      <button className="sm:p-2 cursor-pointer rounded-md text-white bg-orange-600 w-1/2 p-1">
        {button}
      </button>
    </motion.div>
  );
};

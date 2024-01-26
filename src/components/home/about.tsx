import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SOCIAL_LINKS from "../../assets/constants/social-links";
import HeroPng from "../../assets/images/hero.png";

const Single = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section id="about">
      <div className="flex items-center justify-center w-full h-full overflow-hidden">
        <div className="max-w-7xl h-full m-auto flex items-center justify-center gap-12 flex-col sm:flex-row">
          <div className="flex-[1] h-3/5 w-full" ref={ref}>
            <img
              className="w-full h-full sm:object-cover object-contain rounded-lg"
              src={HeroPng}
              alt=""
            />
          </div>
          <motion.div
            className="flex-[1] flex flex-col gap-7 pt-2 items-start"
            style={{ y }}
          >
            <h2 className="sm:text-7xl text-4xl">
              Hi, I'm <span className="text-orange-400">Tilak</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-xl">
              I am a full stack web developer with a passion for creating
              beautiful and functional websites.
              <br />I am constantly learning new things. Currently, I am
              learning React Native and TypeScript.
            </p>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((s) => {
                return (
                  <button className="hover:bg-orange-400 border-2 transition-all p-2 rounded-lg cursor-pointer">
                    <a href={s.link} target="_blank" rel="noreferrer">
                      {s.name[0].toUpperCase() + s.name.slice(1)}
                    </a>
                  </button>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  return (
    <div className="relative" ref={ref}>
      <div className="sticky top-0 left-0 sm:pt-12 text-center text-orange-400 sm:text-4xl pt-[calc(100vh-100px) text-xl">
        <h1>About Me</h1>
      </div>
      <Single />
    </div>
  );
};

export default About;

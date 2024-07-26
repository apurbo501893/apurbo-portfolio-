import React from "react";
import Container from "./Container";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
const Banner = () => {
  const stringArray = [
    "I build things for the web",
    "Passionte web developer",
    "Love to learn new idea",
  ];
  return (
    <Container
      id="home"
      className=" py-10 md:py-24 flex flex-col gap-4 lg:gap-8 md:px-10 xl:px-4"
    >
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-lg font-semibold tracking-wide text-designColor"
      >
        Hi, my name is
      </motion.h3>
      <motion.h1 className="text-4xl lg:text-6xl font-bold flex flex-col">
        Apurbo Tudu.
        <span className="text-darkText font-semibold mt-2 lg:mt-4">
          <Typewriter
            options={{ strings: stringArray, autoStart: true, loop: true }}
          />
        </span>
      </motion.h1>
      <motion.p
        inherit={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="md-max-w-[650px] text-darkText font-medium leading-7"
      >
        I am a web developer with 1+ years of experience in React. I have a
        strong foundation in front-end & back-end development and am skilled in
        creating user-friendly and responsive web application using React and
        its ecosystem.
        <a href="#" target="blank">
          <span className="text-designColor inline-flex relative cursor-pointer h-7 overflow-x-hidden group">
            Learn more
            <span className="absolute w-full h-[1px] bg-designColor left-0 bottom-0 -translate-x-[110%] transition-transform group-hover:translate-x-0 duration-500" />
          </span>
        </a>
      </motion.p>
      <motion.button
        inherit={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="w-52 h-14 text-sm border border-designColor rounded-md text-designColor tracking-wide hover:bg-hoverColor duration-300 flex items-center justify-center"
      >
        Cheak Out My Project!
      </motion.button>
    </Container>
  );
};

export default Banner;

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface Props {
  children: ReactNode;
}

const BackgroundCircles = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 3, 1],
        opacity: [0.1, 0.8, 0.1, 1],
        borderRadius: ['20%', '80%', '20%'],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex  justify-center items-center mt-40 "
    >
      <div className="absolute border border-[#333333] h-[190px] w-[190px] md:h-[250px] md:w-[250px]  rounded-full  animate-ping " />
      <div className="absolute rounded-full border border-violet-600 opacity-20 h-[590px] w-[590px] md:h-[650px] md:w-[650px]  animate-pulse" />
      <div className="absolute border border-[#333333] h-[800px] w-[800px]  rounded-full animate-pulse" />
      {props.children}
    </motion.div>
  );
};

export default BackgroundCircles;

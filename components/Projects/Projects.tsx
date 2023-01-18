import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Project } from '../../typings';
import { urlFor } from '../../sanity';
import Image from 'next/image';

interface Props {
  projects: Project[];
}

const Projects = ({ projects }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative min-h-screen flex flex-col overflow-hidden pb-24 items-center mx-auto max-w-7xl gap-10 md:gap-20"
    >
      <h2 className="text-xl uppercase text-gray-500 tracking-[16px] mt-20 ml-4">
        Projets
      </h2>
      <div className="relative z-10 w-full flex overflow-x-scroll py-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-violet-500">
        {projects.map((project, index) => {
          return (
            <div
              key={project._id}
              className="flex-shrink-0 w-full flex flex-col items-center justify-center space-y-5 overflow-hidden snap-center p-4"
            >
              <motion.div
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                className="w-full max-w-[350px] h-[200px] sm:h-[250px] bg-gray-400 "
              >
                <Image
                  src={urlFor(project?.image).url()}
                  alt={project?.title}
                  width={350}
                  height={200}
                  className="w-full max-w-[350px] h-[200px] sm:h-[250px] bg-gray-400 object-cover border "
                />
              </motion.div>
              <div className="flex flex-col items-center gap-4 w-full max-w-[400px] px-6">
                <p>
                  Projet {index + 1} / {projects?.length}
                </p>
                <h3 className="font-bold text-2xl ">{project?.title}</h3>
                <p>{project?.summary}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="absolute bg-violet-500 opacity-60 w-full h-[520px] top-[25%] sm:top-[30%] left-0 -skew-y-12 " />
    </motion.div>
  );
};

export default Projects;

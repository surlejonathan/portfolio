import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import { Experience } from '../../typings';

interface Props {
  experiences: Experience[];
}

const WorkExperiences = ({ experiences }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen flex flex-col overflow-auto px-2 pb-24 items-center max-w-7xl mx-auto gap-10 md:gap-20"
    >
      <h2 className="text-xl uppercase text-gray-500 tracking-[16px] mt-20 ml-4">
        Expériences
      </h2>
      <div className="w-full flex  gap-10 overflow-x-scroll pb-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-violet-500">
        {experiences?.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>
    </motion.div>
  );
};

export default WorkExperiences;

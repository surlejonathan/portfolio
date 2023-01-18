import React from 'react';
import Skill from './Skill';
import { motion } from 'framer-motion';
import { Skill as SkillType } from '../../typings';

interface Props {
  skills: SkillType[];
}

const Skills = ({ skills }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="min-h-screen flex flex-col overflow-hidden px-4 pb-24 items-center max-w-7xl mx-auto gap-10 md:gap-20"
    >
      <h2 className="text-xl uppercase text-gray-500 tracking-[16px] mt-20 ml-4 ">
        Compétences
      </h2>
      <div className="grid grid-cols-4 gap-5">
        {skills.map((skill, index) => {
          return (
            <Skill
              key={skill._id}
              title={skill.title}
              image={skill.image}
              fromLeft={index % 16 < 8}
            />
          );
        })}
      </div>
    </motion.div>
  );
};

export default Skills;

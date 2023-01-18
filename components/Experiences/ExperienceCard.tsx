import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { Experience } from '../../typings';
import { urlFor } from '../../sanity';
import { formatDateToMonthYear } from '../../utils/formatDate';

interface Props {
  experience: Experience;
}

const ExperienceCard = ({ experience }: Props) => {
  return (
    <article className="flex flex-col space-y-5 items-center flex-shrink-0 max-w-[500px] w-full max-h-[600px] snap-x snap-center bg-[#292929] p-4 overflow-auto rounded-xl border">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="flex-shrink-0 flex justify-center items-center w-24 h-24 rounded-full bg-white"
      >
        <Image
          className="w-16 h-16 object-contain"
          src={urlFor(experience?.companyImage).url()}
          alt={experience.company}
          width={100}
          height={100}
        />
      </motion.div>
      <div className="flex flex-col gap-1 w-full ">
        <h4 className="text-2xl font-light ">{experience?.jobTitle}</h4>
        <p className="uppercase text-sm">{experience?.company}</p>
        <div className="flex items-center h-10">
          <p className="text-sm italic ">{experience?.companyDescription}</p>
        </div>
        <div className="flex gap-1 sm:gap-2 py-2 flex-wrap">
          {/* Stack */}
          {experience?.technologies.map((technologie) => (
            <div key={technologie._id}>
              <Image
                className="w-12 h-12  rounded-lg bg-white object-cover"
                src={urlFor(technologie?.image).url()}
                width={40}
                height={40}
                alt={technologie.title}
              />
            </div>
          ))}
        </div>
        <p className="text-sm uppercase text-gray-300">
          {formatDateToMonthYear(experience?.dateStarted)} -{' '}
          {experience.isCurrentlyWorkingHere
            ? "Aujourd'hui"
            : formatDateToMonthYear(experience?.dateEnded)}{' '}
          ({experience?.contractType})
        </p>
        <p className="text-sm">
          <span className="underline underline-offset-4 h-8">Projet: </span>
          {experience.projectDescription}
        </p>
      </div>
      <div className="flex flex-col w-full overflow-y-auto scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-gray-500">
        <ul className="list-disc text-sm space-y-4 mx-4">
          {experience?.tasks?.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;

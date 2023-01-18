import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Image as ImageType } from '../../typings';
import { urlFor } from '../../sanity';

interface Props {
  fromLeft?: boolean;
  title: string;
  image: ImageType;
}

const Skill = ({ title, image, fromLeft }: Props) => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, x: fromLeft ? -80 : 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg bg-white"
      >
        <Image
          className="w-full h-full rounded-lg bg-white object-cover"
          src={urlFor(image).url()}
          alt={title}
          title={title}
          width={64}
          height={64}
        />
      </motion.div>
    </div>
  );
};

export default Skill;

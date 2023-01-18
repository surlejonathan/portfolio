import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image';
import photoProfil from '../../public/photo-profil.jpeg';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PageInfo } from '../../typings';
import { urlFor } from '../../sanity';

interface Props {
  pageInfo: PageInfo;
}

const Hero = ({ pageInfo }: Props) => {
  const [text] = useTypewriter({
    words: ['<FrontEnd />', '<BackEnd />', '<FullStackJS />'],

    delaySpeed: 400,
  });
  return (
    <div className="min-h-screen flex flex-col items-center justify-center overflow-y-auto overflow-x-hidden space-y-4 text-center">
      <BackgroundCircles>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0, 0, 1] }}
          transition={{ duration: 2.5 }}
        >
          <Image
            className="rounded-full object-cover w-40 h-40 "
            alt="Jonathan"
            src={urlFor(pageInfo?.profileImage).url()}
            width={160}
            height={160}
          />
        </motion.div>
      </BackgroundCircles>

      <div>
        <span className="text-gray-400 uppercase  tracking-[12px] sm:tracking-[15px] ">
          Développeur
        </span>
        <h1 className="text-2xl md:text-4xl tracking-[8px] font-semibold ">
          {text}
          <Cursor cursorColor="violet" />
        </h1>
      </div>
      <div className="z-10 md:space-x-4 ">
        <Link href="#about" className="heroButton">
          A propos
        </Link>
        <Link href="#skills" className="heroButton">
          Compétences
        </Link>
        <Link href="#experiences" className="heroButton">
          Expériences
        </Link>
        <Link href="#projects" className="heroButton">
          Projets
        </Link>
      </div>
    </div>
  );
};

export default Hero;

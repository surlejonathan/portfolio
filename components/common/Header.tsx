import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { PaperClipIcon } from '@heroicons/react/solid';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { PageInfo, Social } from '../../typings';

interface Props {
  socials: Social[];
  cv: PageInfo['cv']['cvUrl'];
}

const Header = ({ socials, cv }: Props) => {
  return (
    <header className="sticky top-0 flex justify-between items-start max-w-7xl mx-auto z-20 xl:items-center backdrop-blur-sm  bg-[rgb(36,36,36)]/30 py-2">
      {/* Social */}

      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex justify-between items-center"
      >
        {socials.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.link}
            fgColor="white"
            bgColor="transparent"
            className="opacity-50"
            target="_blank"
          />
        ))}
        <a
          href={cv}
          target="_blank"
          rel="noreferrer"
          title="télécharger CV"
          download
        >
          <PaperClipIcon className="w-[50px] px-3 opacity-50 cursor-pointer" />
        </a>
      </motion.div>

      {/* Contact */}

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex items-center md:pr-3 cursor-pointer"
      >
        <SocialIcon
          url="#contact"
          network="email"
          fgColor="white"
          bgColor="transparent"
          className="opacity-50"
        />

        <Link
          href="#contact"
          className="uppercase text-sm hidden md:inline-flex text-white opacity-50"
        >
          Contact
        </Link>
      </motion.div>
    </header>
  );
};

export default Header;

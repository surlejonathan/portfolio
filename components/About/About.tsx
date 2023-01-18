import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import AboutImage from '../../public/about-img.jpeg';
import { PageInfo } from '../../typings';
import { urlFor } from '../../sanity';
import RecommendationCard from './Recommendation';

interface Props {
  pageInfo: PageInfo;
}

const About = ({ pageInfo }: Props) => {
  return (
    <div className="min-h-screen flex flex-col overflow-auto pb-24 items-center max-w-7xl mx-auto gap-10 md:gap-20">
      <h2 className="text-xl uppercase text-gray-500 tracking-[16px] mt-20 ml-4">
        A propos
      </h2>
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="px-4 pb-10 gap-10 flex  flex-col lg:flex-row "
      >
        {/*   <Image
          src={urlFor(pageInfo?.aboutImage).url()}
          alt="code"
          width={300}
          height={288}
          className="h-72 lg:h-96 w-auto flex-1 object-cover "
        /> */}
        <div className="flex flex-col gap-4">
          <div>
            <h3 className="text-2xl font-bold pb-2 max-w-sm">Bienvenue!</h3>
            <hr className="py-1 max-w-sm" />
            <span className="text-2xl font-bold">Je suis </span>
            <span className="text-2xl font-bold bg-clip-text text-transparent bgGradient">
              Jonathan
            </span>
            <span className="text-2xl font-bold pl-1">Surle,</span>
          </div>

          <p className="flex-1">{pageInfo?.backgroundInformation}</p>
        </div>
      </motion.div>
      <h2 className="text-xl uppercase text-gray-500 tracking-[6px]  ml-4">
        Recommandations
      </h2>
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="w-full flex overflow-x-scroll px-4 pb-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-violet-500 gap-10"
      >
        {pageInfo?.recommandations?.map((recommandation) => (
          <RecommendationCard
            key={recommandation._id}
            authorName={recommandation.author}
            authorTitle={recommandation.authorRole}
            authorCompany={recommandation.authorCompany}
            recommendation={recommandation.authorDescription}
            authorImg={recommandation.authorImage}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default About;

import Image from 'next/image';
import React from 'react';
import { urlFor } from '../../sanity';
import { Image as ImageType } from '../../typings';

type Props = {
  authorName: string;
  authorTitle: string;
  authorCompany: string;
  authorImg: ImageType;
  recommendation: string;
};

const RecommendationCard = ({
  authorName,
  authorTitle,
  authorCompany,
  recommendation,
  authorImg,
}: Props) => {
  return (
    <div className="flex flex-col items-center mb-4 p-4 rounded-lg border w-full max-w-[350px] flex-shrink-0 snap-center">
      <Image
        src={authorImg && urlFor(authorImg).url()}
        alt={`${authorName}'s profile`}
        className="w-16 h-16 rounded-full mb-4"
        width={64}
        height={64}
      />
      <div className="text-center mb-2">
        <h3 className="m-0 text-sm font-bold">{authorName}</h3>
        <p className=" m-0 text-sm text-gray-500">{authorTitle}</p>
        <p className=" m-0 text-sm text-gray-500">{authorCompany}</p>
      </div>
      <p className="text-sm">{recommendation}</p>
    </div>
  );
};

export default RecommendationCard;

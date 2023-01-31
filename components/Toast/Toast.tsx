import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { Color, ToastContext } from '../../context/ToastContext';
import { XCircleIcon } from '@heroicons/react/outline';

interface Props {
  message: string;
  color: Color;
}

type ColorVariant = {
  [key: string]: string;
};

const Toast = ({ message, color }: Props) => {
  const { closeToast } = useContext(ToastContext);

  const bgColorVariants: ColorVariant = {
    green: 'bg-green-500',
    red: 'bg-red-500',
    yellow: 'bg-yellow-500',
  };

  return (
    <motion.div
      initial={{ y: -200 }}
      animate={{ y: 0 }}
      className="absolute bottom-0 sm:top-0 sm:bottom-auto m-auto left-0 right-0 max-w-xl flex justify-center z-50"
    >
      <div
        className={`w-full  p-6 ${bgColorVariants[color]} cursor-pointer`}
        onClick={closeToast}
      >
        <XCircleIcon className="absolute top-1 right-4  w-[35px] cursor-pointer" />
        <p className="text-center">{message}</p>
      </div>
    </motion.div>
  );
};

export default Toast;

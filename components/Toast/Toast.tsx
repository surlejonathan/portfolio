import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { ToastContext } from '../../context/ToastContext';

interface Props {
  message: string;
  color: string;
}

type ColorVariant = {
  [key: string]: string;
};

const Toast = ({ message, color }: Props) => {
  const { isVisible, closeToast } = useContext(ToastContext);

  const bgColorVariants: ColorVariant = {
    green: 'bg-green-500',
    red: 'bg-red-500',
  };

  return (
    <motion.div
      initial={{ y: -200 }}
      animate={{ y: 0 }}
      className="sticky top-0 m-auto left-0 right-0 max-w-xl flex justify-center z-50"
    >
      <div
        className={`w-full  p-4 ${bgColorVariants[color]} cursor-pointer`}
        onClick={closeToast}
      >
        <p className="text-center">{message}</p>
      </div>
    </motion.div>
  );
};

export default Toast;

import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { useForm, SubmitHandler } from 'react-hook-form';
import { postMessage } from '../../utils/postMessage';
import { ToastContext } from '../../context/ToastContext';

interface Props {}
type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact = (props: Props) => {
  const { register, handleSubmit, reset } = useForm<Inputs>();

  const { fireToast } = useContext(ToastContext);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setIsLoading(true);
    try {
      await postMessage(data);
      fireToast('Votre message a bien été envoyé', 'green');
      reset();
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      fireToast('Une erreur est survenue...', 'red');
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen flex flex-col overflow-x-hidden px-4 pb-24 items-center max-w-7xl mx-auto gap-10 md:gap-20"
    >
      <h2 className="text-xl uppercase text-gray-500 tracking-[16px] mt-20 ml-4">
        Contact
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-end gap-4 w-full max-w-sm mb-16 "
      >
        <input
          className="contactInput"
          type="text"
          id="name"
          placeholder="Votre nom"
          {...register('name')}
          required
        />
        <input
          className="contactInput"
          type="email"
          id="email"
          placeholder="Votre Email"
          {...register('email')}
          required
        />
        <input
          className="contactInput"
          type="text"
          id="subject"
          placeholder="Objet"
          {...register('subject')}
        />
        <textarea
          className="contactInput min-h-[180px]"
          id="message"
          placeholder="Message"
          required
          {...register('message')}
        />
        <button
          className="bgGradient disabled:opacity-50 rounded-md p-4 tracking-wider text-lg hover:opacity-80 hover:border hover:border-white transition-opacity"
          type="submit"
          disabled={isLoading}
        >
          Envoyer
        </button>
      </form>
    </motion.div>
  );
};

export default Contact;

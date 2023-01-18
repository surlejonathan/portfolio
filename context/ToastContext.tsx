import React, { ReactNode, createContext, useState, useEffect } from 'react';
import Toast from '../components/Toast/Toast';

interface Props {
  children: ReactNode;
}

interface ContextType {
  isVisible: boolean;
  fireToast: (description: string, backgroundColor: string) => void;
  closeToast: () => void;
}

export const ToastContext = createContext<ContextType>({
  isVisible: false,
  fireToast: () => void {},
  closeToast: () => void {},
});

export const ToastContextProvider = ({ children }: Props) => {
  const [isVisible, setVisible] = useState(false);
  const [message, setMessage] = useState('');
  const [color, setColor] = useState('');

  const fireToast = (description: string, backgroundColor: string) => {
    setVisible(true);
    setMessage(description);
    setColor(backgroundColor);
  };

  const closeToast = (): void => {
    setVisible(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [isVisible, message, color]);

  return (
    <ToastContext.Provider value={{ isVisible, fireToast, closeToast }}>
      {isVisible && <Toast message={message} color={color} />}
      {children}
    </ToastContext.Provider>
  );
};

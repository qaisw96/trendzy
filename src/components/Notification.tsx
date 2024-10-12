import React, { useEffect } from 'react';

interface NotificationProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
}

const TIME_OUT = 3000;

const Notification = ({ message, isVisible, onClose }: NotificationProps) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, TIME_OUT);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    <div
      className={`fixed top-0 inset-0 h-fit bg-green-500 text-white py-4 px-6 shadow-md z-50 text-center
    transform transition-transform duration-500
    ${
      isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
    }`}>
      {message}
    </div>
  );
};

export default Notification;

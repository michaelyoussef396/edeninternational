"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const TopNav = () => {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full h-auto bg-black text-white p-4 flex flex-col md:flex-row justify-between items-center"
    >
      <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-2 mb-2 md:mb-0">
        <Image src="/mail.png" alt="mail" width={20} height={20} />
        <a href="mailto:info.edeninternational@gmail.com" className="hover:underline">info.edeninternational@gmail.com</a>
      </div>
      <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-2">
        <Image src="/phone.png" alt="phone" width={20} height={20} />
        <span>+61 452 031 982</span>
      </div>
    </motion.div>
  );
};

export default TopNav;

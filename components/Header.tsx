"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';


const Header = () => {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex h-29"
    >
      <div className="flex-1 bg-diagonal-split">
        <a href="./">
          <Image src="/title.png" className="block p-8" alt="eden international" width={300} height={250} />
        </a>
      </div>
    </motion.nav>
  );
};

export default Header;

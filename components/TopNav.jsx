import React from 'react';
import Image from 'next/image';

const TopNav = () => {
  return (
    <div className="w-full h-15 bg-black text-white p-4 flex justify-between items-center pl-12">
      <div className="flex items-center space-x-2">
        <Image src="/mail.png" alt="mail" width={20} height={20} />
        <a href="mailto:info@edeninternational.in" className="hover:underline">info@edeninternational.in</a>
      </div>
      <div className="flex items-center space-x-2 pr-12">
        <Image src="/phone.png" alt="phone" width={20} height={20} />
        <span>+61</span>
      </div>
    </div>
  );
};

export default TopNav;

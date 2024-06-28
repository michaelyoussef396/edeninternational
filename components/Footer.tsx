import React from 'react';
import { CiInstagram } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import Image from 'next/image';

const Footer = () => {
  return (
    
    <footer className="bg-black text-white py-12 bg-cover bg-center bg-no-repeat">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start p-3">
            <Image src="/title.png" alt="Eden International" width={200} height={100} />
            <p className="mt-4">info@edeninternational@gmail.com</p>
            <p className="mt-2">+61 452 031 982</p>
            <div className="flex mt-4 space-x-4">
              <a href="#" className="text-gray-500 hover:text-heroRed">
                <FaFacebookSquare size={24} />
              </a>
              <a href="#" className="text-gray-500 hover:text-heroRed">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-500 hover:text-heroRed">
                <CiInstagram size={24} />
              </a>
            </div>
          </div>
          <div className='mt-9 ml-7'>
            <ul className='text-lg ml-8'>
                <li className="mb-2">
                    <a href="#" className="hover:text-heroRed">Explore</a>
                </li>
              <li className="mb-2">
                <a href="#" className="hover:text-heroRed">Home</a>
              </li>
              <li>
                <a href="#" className="hover:text-heroRed">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className='mt-9 mr-9'>
            <ul className='text-lg  ml-8'>
            <li className="mb-2">
                <a href="#" className="hover:text-heroRed">Useful Links</a>
            </li>
              <li className="mb-2">
                <a href="#" className="hover:text-heroRed">Student Visa</a>
              </li>
              <li>
                <a href="#" className="hover:text-heroRed">Migration</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold mb-4">Recent Projects</h2>
            <div className="grid grid-cols-3 gap-2">
              <img src="/footer-1.png" alt="Project 1" className="w-16 h-16 object-cover" />
              <img src="/footer-2.png" alt="Project 2" className="w-16 h-16 object-cover" />
              <img src="/footer-3.png" alt="Project 3" className="w-16 h-16 object-cover" />
              <img src="/footer-4.png" alt="Project 4" className="w-16 h-16 object-cover" />
              <img src="/footer-5.png" alt="Project 5" className="w-16 h-16 object-cover" />
              <img src="/footer-6.png" alt="Project 6" className="w-16 h-16 object-cover" />
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>© 2023 by Digital Logistics All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


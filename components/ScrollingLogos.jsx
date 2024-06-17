"use client";
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';

const logos = [
  '/Acsenda-School-of-ManagementEduCo-Australia (1).png',
  '/Bupa-Australia-Educube.png',
  '/Charles-Darwin-University-Australia-Educube.png',
  '/Deakin-University-Australia-Educube.png',
  '/Edith-Cowan-University-Australia-Educube.png',
  '/Excelsia-College-Australia-Educube.png',
  '/Federation-University-Australia-Educube.png',
  '/Griffit-University-Australia-educube.png',
  '/Holmes-Institute-Australia-Educube.png',
  '/Kings-own-Institute-Australia-Educube.png',
  '/La-Trobe-University-Australia-educube.png',
  '/Southern-Cross-University-Australia-Educube.png',
  '/The-University-of-NewCastle-Australia-Educube.png',
  '/University-of-South-Australia-Educube.png',
  '/Victoria-University-Sydney-Australia-Educube.png',
  '/Western-Sydney-University-Australia-Educube.png'
];

const ScrollingLogos = () => {
  const logosRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (logosRef.current) {
        logosRef.current.style.transition = 'transform 2s ease-in-out'; // Adjust transition duration to 2 seconds
        logosRef.current.style.transform = 'translateX(-20%)';

        setTimeout(() => {
          const firstChild = logosRef.current.firstChild;
          logosRef.current.appendChild(firstChild);
          logosRef.current.style.transition = 'none';
          logosRef.current.style.transform = 'translateX(0)';
        }, 2000); // Match this timeout duration to the transition duration
      }
    }, 4000); // Adjust the interval to 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-8 bg-gray-100">
      <div className="max-w-6xl mx-auto overflow-hidden">
        <div ref={logosRef} className="flex">
          {logos.map((logo, index) => (
            <div key={index} className="flex-shrink-0 w-1/5 px-4">
              <Image width={100} height={90} src={logo} alt={`Logo ${index + 1}`} className="h-24 mx-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollingLogos;

"use client"
import { FC } from 'react';
import GoogleMapComponent from './GoogleMapComponent';

const OfficeLocations: FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold mb-4">
          Explore Our Office <span className="text-red-500">Worldwide</span>
        </h2>
        <div className="flex justify-center space-x-8 my-8">
          <div>
            <h3 className="text-xl font-semibold">New South Wales</h3>
            <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" className="text-red-500">
              View larger map
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <GoogleMapComponent />
        </div>
      </div>
    </section>
  );
};

export default OfficeLocations;

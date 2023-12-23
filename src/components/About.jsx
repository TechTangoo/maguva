import React from 'react';
import spiceMixImage from '../assets/aboutleft.jpg';

export default function About() {
  const handleClick = () => {
    // Handle click if needed
  };

  return (
    <div id='about' className="flex min-h-screen flex-row items-center justify-between p-12 md:p-24 bg-gray-100">
      <div className='flex flex-col max-w-lg'>
        <h2 className='font-palanquin text-4xl font-bold text-amber-500 mb-4 lg:max-w-lg' style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800 }}>Welcome to Maguva</h2>
        <p className='text-amber-800 text-xl font-bold mb-6 italic'>Where Health Meets Taste</p>
        <p className='text-gray-600 leading-7' style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800 }}>
          At Maguva, we believe in the power of nature to enrich our lives and enhance our well-being.
          We are passionate about providing you with the finest quality powdered products that not only
          taste great but also contribute to a healthier lifestyle.
        </p>
        <p className='text-gray-600 leading-7 mt-4' style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800 }}>
          <span className='font-bold' style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 800 }}>Our Promise:</span> We are more than just a brand; we are a community that shares a love for good food and a commitment to well-being.
          When you choose Maguva, you're not just buying a product - you're joining us on a journey to discover the endless possibilities of flavor and nutrition.
        </p>
      </div>
      <div className='flex items-center m-3'>
        <img src={spiceMixImage} alt='Masale Spice Mix' className='max-w-full rounded-md shadow-lg' />
      </div>
    </div>
  );
}

import Image from 'next/image';
import React from 'react';

function Hero() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:px-16">
      <div>
        <h2 className="text-[40px] md:text-[60px] font-bold">
          Premium Car Rental in your Area
        </h2>
        <h2 className="text-[20px] text-gray-500 pr-20">Book the selected car effortlessly, Pay for driving only , Book the Car Now</h2>
        <button className='p-2 mt-5 bg-blue-500 text-white px-4 rounded-full'>Explore more</button>
      </div>
      <div>
        <Image src='/bmw_PNG1706.png' alt='hero' width={400} height={500} className='w-full object-cover' />
      </div>
    </div>
  );
}

export default Hero;

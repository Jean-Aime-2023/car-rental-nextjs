import Image from 'next/image';
import React, { useState } from 'react';
import { FaGasPump } from 'react-icons/fa';
import { MdAirlineSeatReclineNormal } from 'react-icons/md';
import { PiSteeringWheelFill } from 'react-icons/pi';

function CarCard(props: any) {
  const [car, setCar] = useState(props.car);
  return (
    <div className="group bg-gray-50 p-2 sm:p-5 rounded-3xl m-1 sm:m-5 hover:bg-white hover:border-[1px] cursor-pointer duration-75 ease-in-out border-blue-500">
      <h2 className="text-[20px] font-medium mb-2">{car.name}</h2>
      <span className="text-[12px] font-light">$</span>
      {car.price}
      <span className="text-[12px] font-light"> /day</span>
      <Image
        src={car.image?.url}
        alt=""
        width={220}
        height={200}
        className="w-[250px] h-[150px] mb-3 object-contain"
      />
      <div className="flex justify-around group-hover:hidden">
        <div className="text-center text-gray-500">
          <PiSteeringWheelFill className="w-full text-[22px] mb-2" />
          <h2 className="line-clamp-5 text-[14px] font-light">{car.carType}</h2>
        </div>
        <div className="text-center text-gray-500">
          <MdAirlineSeatReclineNormal className="w-full text-[22px] mb-2" />
          <h2 className="line-clamp-5 text-[14px] font-light">
            {/* {car.stage}   */}
            Seat
          </h2>
        </div>
        <div className="text-center text-gray-500">
          <FaGasPump className="w-full text-[22px] mb-2" />
          <h2 className="line-clamp-5 text-[14px] font-light">
            {car.carAvg} MPG
          </h2>
        </div>
      </div>

      <button className="hidden group-hover:flex bg-gradient-to-r from-blue-400 to-blue-500 p-2 rounded-lg text-white w-full px-5 justify-between">
        Rent Now
        <span className=" bg-blue-400 p-1 rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-4 h-4 text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </span>
      </button>
    </div>
  );
}

export default CarCard;

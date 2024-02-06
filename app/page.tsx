"use client"

import CarsFiltersOptions from "@/components/Home/CarsFiltersOptions";
import Hero from "@/components/Home/Hero";
import SearchInput from "@/components/Home/SearchInput";
import { getCarsList } from "@/services";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    getCarsList_();
  }, [])
  
  const getCarsList_ = async ()=>{
    const result = await getCarsList();
    console.log(result)
  }
  return (
    <div className="p-5 sm:px-10 md:px-20">
      <Hero/>
      <SearchInput/>
      <CarsFiltersOptions/>
    </div>
  );
}


//timestamp
//59:35
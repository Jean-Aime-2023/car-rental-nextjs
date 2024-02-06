import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

function Navbar() {
  return (
    <div className='hidden md:flex items-center justify-between p-3 px-5 shadow-sm border-b-[1px]'>
        <Image src='/logo.png' alt='logo' width={100} height={100} />
        <div className='flex gap-5'>
            <h2 className='hover:bg-blue-500 p-2 rounded-full hover:text-white px-3 cursor-pointer'>Home</h2>
            <h2 className='hover:bg-blue-500 p-2 rounded-full hover:text-white px-3 cursor-pointer'>History</h2>
            <h2 className='hover:bg-blue-500 p-2 rounded-full hover:text-white px-3 cursor-pointer'>Contact Us</h2>
        </div>
        <UserButton/>
    </div>
  )
}

export default Navbar
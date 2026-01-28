import React from 'react'
import timg from "../assets/Timg.png"
import { FaRegBell } from 'react-icons/fa'
const TopNavber = () => {
  return (
    <div>
        <div className=" bg-[#0f1c4d] flex items-center justify-between px-6 py-2 text-white">
      <h3 className="text-lg font-medium font-inter">Dashboard Overview</h3>
      <div className="flex items-center gap-6">
        <span className='text-[20px] cursor-pointer hover:text-[#fbbf24]'><FaRegBell /></span>
        <div className=" ">
          <img className='rounded-full cursor-pointer ' src={timg} alt="" />
        </div>
      </div>
    </div>
    </div>
  )
}

export default TopNavber
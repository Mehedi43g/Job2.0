import React from 'react'
import { useLocation } from 'react-router'
import timg from "../assets/Timg.png"
import { FaRegBell } from 'react-icons/fa'

const TopNavber = () => {
  const location = useLocation()

  const titleMap = {
    '/dashboard': 'Dashboard Overview',
    '/calllogs': 'Call Logs & History',
    '/appointments': 'Appointments',
    '/settings': 'Settings',
  }

  const title = titleMap[location.pathname] || 'Dashboard Overview'

  return (
    <div className="bg-[#0f1c4d] flex items-center justify-between px-6 py-2 text-white">
      <h3 className="text-lg font-medium font-inter text-[20px]">
        {title}
      </h3>

      <div className="flex items-center gap-6">
        <span className='text-[20px] cursor-pointer hover:text-[#fbbf24]'>
          <FaRegBell />
        </span>
        <img className='rounded-full cursor-pointer' src={timg} alt="" />
      </div>
    </div>
  )
}

export default TopNavber

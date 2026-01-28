import React from 'react'
import { CiCalendar } from 'react-icons/ci'
import { FaHome } from 'react-icons/fa'
import { FaBoltLightning } from 'react-icons/fa6'
import { IoCallSharp, IoSettings } from 'react-icons/io5'
import { RiLogoutBoxRLine } from 'react-icons/ri'
import { Link } from 'react-router'




const Sidebar = () => {
  return (
 <div className="w-64 h-screen bg-[#0b1437] text-white p-6">
      <h2 className="  w-12 h-12  flex items-center justify-center  rounded-lg  mb-8 mx-auto   bg-linear-to-r from-[#00FF88] to-[#00D4FF]  text-[#0b1437]  text-xl "> <FaBoltLightning /></h2>
      <div className="">
       <div className="">
        <ul className='flex flex-col gap-5'>
       <Link to='/'>
        <li className=" font-inter text-[16px] font-medium text-white flex items-center gap-3 p-2 rounded-lg cursor-pointer 
         transition-all duration-300  hover:bg-linear-to-r hover:from-[rgba(255,255,255,0.18)]  hover:to-[rgba(255,255,255,0.08)] hover:border
           hover:border-[rgba(255,255,255,0.35)] hover:shadow-[0_0_25px_rgba(180,220,255,0.85)]"><FaHome className="text-[20px]" />  Dashboard Overview </li>
       </Link>
       <Link to='calllogs'>
       
        <li className=" font-inter text-[16px] font-medium text-white flex items-center gap-3 p-2 rounded-lg cursor-pointer
          transition-all duration-300  hover:bg-linear-to-r hover:from-[rgba(255,255,255,0.18)]  hover:to-[rgba(255,255,255,0.08)] hover:border 
           hover:border-[rgba(255,255,255,0.35)] hover:shadow-[0_0_25px_rgba(180,220,255,0.85)]"> <IoCallSharp className='text-[20px] '/>Call Logs</li>
       </Link>
       <Link to='appointments'>
        <li className=" font-inter text-[16px] font-medium text-white flex items-center gap-3 p-2 rounded-lg cursor-pointer 
         transition-all duration-300  hover:bg-linear-to-r hover:from-[rgba(255,255,255,0.18)]  hover:to-[rgba(255,255,255,0.08)] hover:border 
          hover:border-[rgba(255,255,255,0.35)] hover:shadow-[0_0_25px_rgba(180,220,255,0.85)]"><CiCalendar className='text-[20px] '/> Appointments</li>
       </Link>
        <Link to="settings">
        <li className=" font-inter text-[16px] font-medium text-white flex items-center gap-3 p-2 rounded-lg cursor-pointer 
         transition-all duration-300  hover:bg-linear-to-r hover:from-[rgba(255,255,255,0.18)]  hover:to-[rgba(255,255,255,0.08)] hover:border 
          hover:border-[rgba(255,255,255,0.35)] hover:shadow-[0_0_25px_rgba(180,220,255,0.85)]"><IoSettings className='text-[20px] '/> Settings</li>
        </Link>
       </ul>
       </div>
       <div className="">
        <Link className='flex items-center gap-2 absolute bottom-10 left-20 text-[#FF1100] text-[20px]'>
        <RiLogoutBoxRLine className='text-[#000000]'/>
        Log Out
        </Link>
       </div>
      </div>
    </div>  
    
    )
}

export default Sidebar
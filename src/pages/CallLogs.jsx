import React from 'react'
import { CiSearch } from 'react-icons/ci'
import CallList from '../Components/CallList'

const CallLogs = () => {
  return (
    <section>
      <div className="flex  gap-3 justify-between">
        <div className="w-5/12">
      <div className="relative">
        <form action="">
          <input className=' rounded-2xl outline-none font-inter border border-[#2B7FFF] py-3 text-[#62748E] w-full pl-10' type="text" placeholder='Search by phone number, issue type...' />
        </form>
        <div className=" absolute top-3 left-3">
          <CiSearch className='text-[25px] text-[#90A1B9]'/>
        </div>
      </div>
      </div>
      <div className="w-6-12 mx-auto ">
        <div className="flex gap-20  ">
        <div className="">
          <select className="text-white text-sm font-inter bg-[#0b1437]  px-10 py-3  rounded-lg  border border-white/20 focus:outline-none  focus:ring-1 focus:ring-white/30">
            <option className='bg-[#0b1437] text-white' value="All Type">All Type</option>
            <option className='bg-[#0b1437] text-white' value="Sat">Sat</option>
            <option className='bg-[#0b1437] text-white' value="Sun">Sun</option>
            <option className='bg-[#0b1437] text-white' value="Mon">Mon</option>
            <option className='bg-[#0b1437] text-white' value="Tue">Tue</option>
            <option className='bg-[#0b1437] text-white' value="Thu">Thu</option>
            <option className='bg-[#0b1437] text-white' value="Fri">Fri</option>
        </select>
        </div>
        <div className="">
          <select className="text-white text-sm font-inter bg-[#0b1437]  px-10 py-3 rounded-lg  border border-white/20 focus:outline-none  focus:ring-1 focus:ring-white/30">
            <option className='bg-[#0b1437] text-white' value="All Issues">All Issues</option>
            <option className='bg-[#0b1437] text-white' value="Sat">Sat</option>
            <option className='bg-[#0b1437] text-white' value="Sun">Sun</option>
            <option className='bg-[#0b1437] text-white' value="Mon">Mon</option>
            <option className='bg-[#0b1437] text-white' value="Tue">Tue</option>
            <option className='bg-[#0b1437] text-white' value="Thu">Thu</option>
            <option className='bg-[#0b1437] text-white' value="Fri">Fri</option>
        </select>
        </div>
        <div className="">
          <select className="text-white text-sm font-inter bg-[#0b1437]  px-10 py-3  rounded-lg  border border-white/20 focus:outline-none  focus:ring-1 focus:ring-white/30">
            <option className='bg-[#0b1437] text-white' value="Today">Today</option>
            <option className='bg-[#0b1437] text-white' value="Sat">Sat</option>
            <option className='bg-[#0b1437] text-white' value="Sun">Sun</option>
            <option className='bg-[#0b1437] text-white' value="Mon">Mon</option>
            <option className='bg-[#0b1437] text-white' value="Tue">Tue</option>
            <option className='bg-[#0b1437] text-white' value="Thu">Thu</option>
            <option className='bg-[#0b1437] text-white' value="Fri">Fri</option>
        </select>
        </div>
      </div>
      </div>

      </div>
      <div className="pt-10">
        <CallList/>
      </div>
    </section>
  )
}

export default CallLogs
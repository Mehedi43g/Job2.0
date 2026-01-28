import React from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

const Applist = () => {
  return (
    <div className=' hidden md:block'>
      <div className="">
         <table className="w-full  text-sm text-left text-gray-300">
        <thead className="bg-[#0b1739] text-gray-400 p-3">
            <tr className=''>
                <th className='px-4 py-3'>Client Name </th>
                <th className='px-4 py-3'>Client Phone</th>
                <th className='px-4 py-3'>Client mail</th>
                <th className='px-4 py-3'>Device</th>
                <th className='px-4 py-3'>Repair Type</th>
                <th className='px-4 py-3'>Date</th>
                <th className='px-4 py-3'>Slot no</th>
                <th className='px-4 py-3'>Start Time</th>
            </tr>
        </thead>
        <tbody >
            <tr className='border-t border-[#1f2a5a] hover:bg-[#0b1739]'>
                <th className='px-4 py-3 text-[#51A2FF] '>Jane.D </th>
                <th className='px-4 py-3'>01960685765</th>
                <th className='px-4 py-3'>admin@gmail.com</th>
                <th className='px-4 py-3'>Apple/Iphone 13pro</th>
                <th className='px-4 py-3'>Screen</th>
                <th className='px-4 py-3'>02/06/2026</th>
                <th className='px-4 py-3'>1</th>
                <th className='px-4 py-3'>09:00</th>
            </tr>
        </tbody>
         <tbody >
            <tr className='border-t border-[#1f2a5a] hover:bg-[#0b1739]'>
                <th className='px-4 py-3 text-[#51A2FF] '>Jane.D </th>
                <th className='px-4 py-3'>01960685765</th>
                <th className='px-4 py-3'>admin@gmail.com</th>
                <th className='px-4 py-3'>Apple/Iphone 13pro</th>
                <th className='px-4 py-3'>Screen</th>
                <th className='px-4 py-3'>02/06/2026</th>
                <th className='px-4 py-3'>1</th>
                <th className='px-4 py-3'>09:00</th>
            </tr>
        </tbody>
         <tbody >
            <tr className='border-t border-[#1f2a5a] hover:bg-[#0b1739]'>
                <th className='px-4 py-3 text-[#51A2FF] '>Jane.D </th>
                <th className='px-4 py-3'>01960685765</th>
                <th className='px-4 py-3'>admin@gmail.com</th>
                <th className='px-4 py-3'>Apple/Iphone 13pro</th>
                <th className='px-4 py-3'>Screen</th>
                <th className='px-4 py-3'>02/06/2026</th>
                <th className='px-4 py-3'>1</th>
                <th className='px-4 py-3'>09:00</th>
            </tr>
        </tbody>
         <tbody >
            <tr className='border-t border-[#1f2a5a] hover:bg-[#0b1739]'>
                <th className='px-4 py-3 text-[#51A2FF] '>Jane.D </th>
                <th className='px-4 py-3'>01960685765</th>
                <th className='px-4 py-3'>admin@gmail.com</th>
                <th className='px-4 py-3'>Apple/Iphone 13pro</th>
                <th className='px-4 py-3'>Screen</th>
                <th className='px-4 py-3'>02/06/2026</th>
                <th className='px-4 py-3'>1</th>
                <th className='px-4 py-3'>09:00</th>
            </tr>
        </tbody>
         <tbody >
            <tr className='border-t border-[#1f2a5a] hover:bg-[#0b1739]'>
                <th className='px-4 py-3 text-[#51A2FF] '>Jane.D </th>
                <th className='px-4 py-3'>01960685765</th>
                <th className='px-4 py-3'>admin@gmail.com</th>
                <th className='px-4 py-3'>Apple/Iphone 13pro</th>
                <th className='px-4 py-3'>Screen</th>
                <th className='px-4 py-3'>02/06/2026</th>
                <th className='px-4 py-3'>1</th>
                <th className='px-4 py-3'>09:00</th>
            </tr>
        </tbody>
         <tbody >
            <tr className='border-t border-[#1f2a5a] hover:bg-[#0b1739]'>
                <th className='px-4 py-3 text-[#51A2FF] '>Jane.D </th>
                <th className='px-4 py-3'>01960685765</th>
                <th className='px-4 py-3'>admin@gmail.com</th>
                <th className='px-4 py-3'>Apple/Iphone 13pro</th>
                <th className='px-4 py-3'>Screen</th>
                <th className='px-4 py-3'>02/06/2026</th>
                <th className='px-4 py-3'>1</th>
                <th className='px-4 py-3'>09:00</th>
            </tr>
        </tbody>

       </table>
      </div>
       <div className="flex items-center justify-center gap-4 pt-10 text-gray-300">
        <FaAngleLeft className="cursor-pointer hover:text-white" />
        <span className="px-3 py-1 hover:bg-[#1f2a5a] duration-300 rounded cursor-pointer">1</span>
        <span className="px-3 py-1 hover:bg-[#1f2a5a] duration-300 cursor-pointer">2</span>
        <span className="px-3 py-1 hover:bg-[#1f2a5a] duration-300 cursor-pointer">3</span>
        <FaAngleRight className="cursor-pointer hover:text-white" />
      </div>

    </div>
  )
}

export default Applist
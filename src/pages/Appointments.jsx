import React, { useState } from 'react'
import { FaRegCalendar } from 'react-icons/fa'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import { IoCall } from 'react-icons/io5'
import { MdErrorOutline } from 'react-icons/md'
import Applist from '../Components/Applist'

const Appointments = () => {

  const [copied, setCopied] = useState(false);

  const link = "https://example.com/invite/12345";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(link);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };
  return (
    <section>
      <div className="flex gap-5 justify-between">
        <div className='w-4/12'>
          <div className="border border-[#2b80ffd2] p-3 rounded-2xl flex justify-between hover:scale-105 duration-300">
            <div className="flex flex-col gap-3">
              <p className='text-[#90A1B9] text-[14px] font-inter flex  items-center  gap-3'><FaRegCalendar className='text-[20px] text-[#51A2FF]' /> Total Booked</p>
              <div className="font-inter text-[27px] font-semibold text-[#FFFFFF]">
                34
              </div>
              <div className="text-[#05DF72] text-[14px] font-inter ">
                +8 this week
              </div>
            </div>

          </div>
        </div>
        <div className='w-4/12'>
          <div className="border border-[#2b80ffd2] p-3 rounded-2xl flex justify-between hover:scale-105 duration-300">
            <div className="flex flex-col gap-3">
              <p className='text-[#90A1B9] text-[14px] font-inter flex  items-center  gap-3'><IoMdCheckmarkCircleOutline className='text-[20px] text-[#05DF72]' /> AI Booked</p>
              <div className="font-inter text-[27px] font-semibold text-[#FFFFFF]">
                34
              </div>
              <div className="text-[#90A1B9] text-[14px] font-inter flex  items-center  ">
                82% of total
              </div>
            </div>

          </div>
        </div>
        <div className='w-4/12'>
          <div className="border border-[#2b80ffd2] p-3 rounded-2xl flex justify-between hover:scale-105 duration-300">
            <div className="flex flex-col gap-3">
              <p className='text-[#90A1B9] text-[14px] font-inter flex  items-center  gap-3'><MdErrorOutline className='text-[20px] text-[#FDC700]' /> Total Booked</p>
              <div className="font-inter text-[27px] font-semibold text-[#FFFFFF]">
                34
              </div>
              <div className="text-[#90A1B9] text-[14px] font-inter flex  items-center  ">
                Awaiting confirmation
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="pt-10">
        <div className=" p-3 rounded-2xl bg-linear-to-r from-[#1A1A2E] to-[#16213E]">
          <h3 className='text-[#FFFFFF] font-inter text-[16px] '>Booking Link</h3>
          <div className="flex items-center gap-3 py-3">
            <div className="flex-1 bg-[#0f1c4d] rounded-lg border border-[#00ff8862]">
              <input type="text" value={link} className="w-full bg-transparent px-4 py-2 text-white outline-none" />
            </div>
            <button onClick={handleCopy} className="px-5 py-2 rounded-lg bg-linear-to-r from-[rgba(255,255,255,0.18)] to-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.35)]  shadow-[0_0_25px_rgba(180,220,255,0.85)]  text-white font-medium transition duration-300 hover:scale-105" >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>

        </div>
      </div>
      <div className="pt-10">
        <Applist/>
      </div>
    </section>
  )
}

export default Appointments
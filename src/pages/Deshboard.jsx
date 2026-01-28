import React from 'react'
import { CiCalendar } from 'react-icons/ci'
import { GoDotFill } from 'react-icons/go'
import { IoMdTime } from 'react-icons/io'
import { IoCall } from 'react-icons/io5'
import { LuArrowRightLeft } from 'react-icons/lu'
import { RiRobot2Line } from 'react-icons/ri'
import { TiDeleteOutline } from 'react-icons/ti'


const skills = [
  { name: "Screen Repair", percent: 70 ,  extra: "156 requests"},
  { name: "Battery Replacement", percent: 70, extra: "89 requests" },
  { name: "Back Glass Repair", percent: 50, extra: "67 requests" },
  { name: "Software Issues", percent: 30, extra: "45 requests" },
]
const Deshboard = () => (
  <>
  
  <section className='pt-30'>
    
    <div className="flex gap-5">
      <div className="w-4/12">
        <div className="border border-[#2b80ffd2] p-3 rounded-2xl flex justify-between hover:scale-105 duration-300">
          <div className="flex flex-col gap-3">
            <p className='text-[#90A1B9] text-[14px] font-inter'>Total Calls Today</p>
            <div className="font-inter text-[27px] font-semibold text-[#FFFFFF]">
              127
            </div>
            <div className="text-[#05DF72] text-[14px] font-inter ">
              +12%
            </div>
          </div>
          <div className=" ">
            <div className="p-3 border rounded-2xl bg-linear-to-r from-[#2B7FFF] to-[#00B8DB] text-[20px] ">
              <IoCall className='text-[#FFFFFF]' />
            </div>
          </div>
        </div>
      </div>

      <div className="w-4/12">
        <div className="border border-[#2b80ffd2] p-3 rounded-2xl flex justify-between hover:scale-105 duration-300">
          <div className="flex flex-col gap-3">
            <p className='text-[#90A1B9] text-[14px] font-inter'>AI-Handled Calls</p>
            <div className="font-inter text-[27px] font-semibold text-[#FFFFFF]">
              98
            </div>
            <div className="text-[#05DF72] text-[14px] font-inter ">
              +77%
            </div>
          </div>
          <div className=" ">
            <div className="p-3 border rounded-2xl bg-linear-to-r from-[#AD46FF] to-[#F6339A] text-[20px] ">
              <RiRobot2Line className='text-[#FFFFFF]' />
            </div>
          </div>
        </div>
      </div>

      <div className="w-4/12">
        <div className="border border-[#2b80ffd2] p-3 rounded-2xl flex justify-between hover:scale-105 duration-300">
          <div className=" flex flex-col gap-3">
            <p className='text-[#90A1B9] text-[14px] font-inter'>Warm Transfer</p>
            <div className="font-inter text-[27px] font-semibold text-[#FFFFFF]">
              23
            </div>
            <div className="text-[#05DF72] text-[14px] font-inter ">
              +18%
            </div>
          </div>
          <div className=" ">
            <div className="p-3 border rounded-2xl bg-linear-to-r from-[#FF6900] to-[#FB2C36] text-[20px] ">
              <LuArrowRightLeft className='text-[#FFFFFF]' />
            </div>
          </div>
        </div>
      </div>

    </div>

    <div className="flex gap-5 pt-4.5">
      <div className="w-4/12">
        <div className="border border-[#2b80ffd2] p-3 rounded-2xl flex justify-between hover:scale-105 duration-300">
          <div className="flex flex-col gap-3">
            <p className='text-[#90A1B9] text-[14px] font-inter'>Appointments Booked</p>
            <div className="font-inter text-[27px] font-semibold text-[#FFFFFF]">
              34
            </div>
            <div className="text-[#05DF72] text-[14px] font-inter ">
              +8%
            </div>
          </div>
          <div className=" ">
            <div className="p-3 border rounded-2xl bg-linear-to-r from-[#00C950] to-[#00BC7D] text-[20px] ">
              <CiCalendar className='text-[#FFFFFF] ' />
            </div>
          </div>
        </div>
      </div>

      <div className="w-4/12">
        <div className="border border-[#2b80ffd2] p-3 rounded-2xl flex justify-between hover:scale-105 duration-300">
          <div className="flex flex-col gap-3">
            <p className='text-[#90A1B9] text-[14px] font-inter'>Missed/Failed Calls</p>
            <div className="font-inter text-[27px] font-semibold text-[#FFFFFF]">
              6
            </div>
            <div className="text-[#FD244A] text-[14px] font-inter ">
              -3%
            </div>
          </div>
          <div className=" ">
            <div className="p-3 border rounded-2xl bg-linear-to-r from-[#FB2C36] to-[#FF2056] text-[20px] ">
              <TiDeleteOutline className='text-[#FFFFFF]' />
            </div>
          </div>
        </div>
      </div>

      <div className="w-4/12">
        <div className="border border-[#2b80ffd2] p-3 rounded-2xl flex justify-between hover:scale-105 duration-300">
          <div className=" flex flex-col gap-3">
            <p className='text-[#90A1B9] text-[14px] font-inter'>Avg Call Duration</p>
            <div className="font-inter text-[27px] font-semibold text-[#FFFFFF]">
              3:42
            </div>
            <div className="text-[#05DF72] text-[14px] font-inter ">
              +15%
            </div>
          </div>
          <div className=" ">
            <div className="p-3 border rounded-2xl bg-linear-to-r from-[#615FFF] to-[#2B7FFF] text-[20px] ">
              <IoMdTime className='text-[#FFFFFF]' />
            </div>
          </div>
        </div>
      </div>

    </div>
    <div className=" pt-20">
      <div className="w-full rounded-2xl bg-linear-to-br from-[#0b1437] to-[#0a1f44] p-6 border border-white/10">

        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-white text-lg font-semibold">  Call Trends - This Week</h3>
            <p className="text-white/60 text-sm">  Total: 472 calls </p>
          </div>

          <select className="text-white text-sm font-inter bg-[#0b1437]  px-4 py-1.5  rounded-lg  border border-white/20 focus:outline-none  focus:ring-1 focus:ring-white/30">
            <option className='bg-[#0b1437] text-white' value="This Week ▾">This Week</option>
            <option className='bg-[#0b1437] text-white' value="Sat">Sat</option>
            <option className='bg-[#0b1437] text-white' value="Sun">Sun</option>
            <option className='bg-[#0b1437] text-white' value="Mon">Mon</option>
            <option className='bg-[#0b1437] text-white' value="Tue">Tue</option>
            <option className='bg-[#0b1437] text-white' value="Thu">Thu</option>
            <option className='bg-[#0b1437] text-white' value="Fri">Fri</option>
          </select>
        </div>

        <div className="relative w-full h-56 rounded-xl overflow-hidden bg-linear-to-b from-white/5 to-transparent">

          <div className="absolute inset-0 flex flex-col justify-between px-4 py-3">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-full border-t border-dashed border-white/10" />
            ))}
          </div>

          <div className="absolute inset-0">
            <div className="absolute bottom-0 left-0 w-full h-full bg-linear-to-t from-[#2B7FFF]/40 to-transparent rounded-xl clip-path-chart" />
          </div>
          <div className="absolute bottom-2 left-0 w-full flex justify-between px-4 text-xs text-white/70">
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
            <span>Sun</span>
          </div>
        </div>
      </div>

    </div>

    <div className="flex pt-10 gap-5">
      <div className="w-6/12 border p-3 rounded-2xl border-[#2b80ffab] ">
        <h3 className='font-inter text-[20px] text-[#FFFFFF]'>Recent Activity</h3>

        <div className="pt-3">
          <div className="flex  p-3 rounded-2xl bg-[#7a8ba42c]">
            <GoDotFill className='text-[#05DF72] text-[25px]' />
            <div className="">
              <p className='font-inter text-[14px] text-[#FFFFFF]'>AI booked appointment for iPhone 13 screen repair</p>
              <p className='font-inter text-[14px] text-[#7A8BA4]'>2 min ago</p>
            </div>
          </div>
        </div>
         <div className="pt-3">
          <div className="flex  p-3 rounded-2xl bg-[#7a8ba42c]">
            <GoDotFill className='text-[#FF8904] text-[25px]' />
            <div className="">
              <p className='font-inter text-[14px] text-[#FFFFFF]'>Warm transfer to technician - Software issue</p>
              <p className='font-inter text-[14px] text-[#7A8BA4]'>5 min ago</p>
            </div>
          </div>
        </div>
         <div className="pt-3">
          <div className="flex  p-3 rounded-2xl bg-[#7a8ba42c]">
            <GoDotFill className='text-[#05DF72] text-[25px]' />
            <div className="">
              <p className='font-inter text-[14px] text-[#FFFFFF]'>Quote provided for iPad battery replacement</p>
              <p className='font-inter text-[14px] text-[#7A8BA4]'>8 min ago</p>
            </div>
          </div>
        </div>
        <div className="pt-3">
          <div className="flex  p-3 rounded-2xl bg-[#7a8ba42c]">
            <GoDotFill className='text-[#FF6467] text-[25px]' />
            <div className="">
              <p className='font-inter text-[14px] text-[#FFFFFF]'>Call dropped after 12 seconds</p>
              <p className='font-inter text-[14px] text-[#7A8BA4]'>15 min ago</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-6/12 border p-3 rounded-2xl border-[#2b80ffab]">
      <div className="w-full border-[#2b80ffab]  p-5 rounded-lg space-y-6">
        <h3 className='text-[20px] font-inter text-[#FFFFFF]'>Top Repair Requests</h3>
      {skills.map((skill, index) => (
        <div key={index} className="space-y-1">
          <div className="flex justify-between">
            <span className="block text-sm font-semibold text-white"> {skill.name}</span>
          <p className='text-[#C0CCDD]'> {skill.extra}</p>
          </div>

          <div className="w-full h-2 bg-black/10 rounded-full overflow-hidden">
            <div className="relative h-full bg-[#4070f4] rounded-full animate-progress" style={{ width: `${skill.percent}%`, animationDelay: `${index * 0.1}s` }}>
              <span className="absolute -top-7 -right-3 text-[9px] font-medium text-white bg-[#4070f4] px-1.5 py-0.5 rounded">
                {skill.percent}%
                <span className="absolute left-1/2 -bottom-1 w-2 h-2 bg-[#4070f4] rotate-45 -translate-x-1/2" />
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
      </div>
    </div>

  </section>
  
  </>
)

export default Deshboard
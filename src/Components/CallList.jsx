import React from 'react'
import { FaPlay } from 'react-icons/fa'
import { GrDocumentText } from 'react-icons/gr'
import { IoMdCheckmarkCircleOutline, IoMdTime } from 'react-icons/io'
import { IoCallOutline, IoCallSharp } from 'react-icons/io5'

const CallList = () => {


    return (
        <div className="flex justify-between">
            <div className="w-5/12">
                <div className="  border border-[#2b80ffa8]  rounded-2xl">
                    <h3 className=' border-b border-[#2b80ffa8] text-[#FFFFFF] font-inter text-[20px] p-3'>Call List</h3>
                    <div className="py-2">
                        <div className=" cursor-pointer hover:scale-105 hover:border-none hover:bg-[#021431] duration-300  rounded-2xl  border-b border-[#2b80ff81] overflow-hidden">
                            <div className="flex justify-between p-3">
                                <div className="flex gap-3 pt-3">
                                    <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-linear-to-r from-[#2B7FFF] to-[#00B8DB] text-[20px]">
                                        <IoCallSharp className='text-white' />
                                    </div>

                                    <div>
                                        <p className="font-inter text-white text-[16px]">
                                            +1 (555) 345-6789
                                        </p>
                                        <p className="font-inter text-[#90A1B9] text-[14px]">
                                            2025-12-16 • 09:42 AM
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <p className="px-3 py-1 border border-[#05DF72] rounded-2xl bg-[#00c9502d] text-[#05DF72] font-inter text-sm">
                                        AI Resolved
                                    </p>
                                </div>
                            </div>

                            <div className="px-3 pb-3 flex flex-wrap gap-3">
                                <div className="flex items-center gap-1 font-inter text-[#90A1B9] text-[14px]">
                                    <IoMdTime className="text-[16px]" />
                                    <p>5:23</p>
                                </div>

                                <div className="flex items-center gap-1 font-inter text-[#90A1B9] text-[14px]">
                                    <IoMdCheckmarkCircleOutline className="text-[16px]" />
                                    <p>Quote Provided</p>
                                </div>

                                <div>
                                    <div className="bg-[#1b63ff65] px-3 py-1.5 rounded-[10px] text-[#51A2FF] text-sm cursor-pointer">
                                        Screen
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" cursor-pointer hover:scale-105 hover:border-none hover:bg-[#021431]  duration-300  rounded-2xl border-b border-[#2b80ff81] overflow-hidden">
                            <div className="flex justify-between p-3">
                                <div className="flex gap-3 pt-3">
                                    <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-linear-to-r from-[#2B7FFF] to-[#00B8DB] text-[20px]">
                                        <IoCallSharp className='text-white' />
                                    </div>

                                    <div>
                                        <p className="font-inter text-white text-[16px]">
                                            +1 (555) 345-6789
                                        </p>
                                        <p className="font-inter text-[#90A1B9] text-[14px]">
                                            2025-12-16 • 09:42 AM
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <p className="px-3 py-1 border border-[#FF6900] rounded-2xl bg-[#ff6a0056] text-[#FF8904] font-inter text-sm">
                                        Warm Transfer
                                    </p>
                                </div>
                            </div>

                            <div className="px-3 pb-3 flex flex-wrap gap-3">
                                <div className="flex items-center gap-1 font-inter text-[#90A1B9] text-[14px]">
                                    <IoMdTime className="text-[16px]" />
                                    <p>5:23</p>
                                </div>

                                <div className="flex items-center gap-1 font-inter text-[#90A1B9] text-[14px]">
                                    <IoMdCheckmarkCircleOutline className="text-[16px]" />
                                    <p>Escalated to technician</p>
                                </div>

                                <div>
                                    <div className="bg-[#1b63ff65] px-3 py-1.5 rounded-[10px] text-[#51A2FF] text-sm cursor-pointer">
                                        Software
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="  cursor-pointer hover:scale-105 hover:border-none hover:bg-[#021431] duration-300  rounded-2xl border-b border-[#2b80ff81] overflow-hidden">
                            <div className="flex justify-between p-3">
                                <div className="flex gap-3 pt-3">
                                    <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-linear-to-r from-[#2B7FFF] to-[#00B8DB] text-[20px]">
                                        <IoCallSharp className='text-white' />
                                    </div>

                                    <div>
                                        <p className="font-inter text-white text-[16px]">
                                            +1 (555) 345-6789
                                        </p>
                                        <p className="font-inter text-[#90A1B9] text-[14px]">
                                            2025-12-16 • 09:42 AM
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <p className="px-3 py-1 border border-[#2B7FFF] rounded-2xl bg-[#2b80ff41] text-[#51A2FF] font-inter text-sm">
                                        Appointment
                                    </p>
                                </div>
                            </div>

                            <div className="px-3 pb-3 flex flex-wrap gap-3">
                                <div className="flex items-center gap-1 font-inter text-[#90A1B9] text-[14px]">
                                    <IoMdTime className="text-[16px]" />
                                    <p>5:23</p>
                                </div>

                                <div className="flex items-center gap-1 font-inter text-[#90A1B9] text-[14px]">
                                    <IoMdCheckmarkCircleOutline className="text-[16px]" />
                                    <p>Appointment Booked</p>
                                </div>

                                <div>
                                    <div className="bg-[#1b63ff65] px-3 py-1.5 rounded-[10px] text-[#51A2FF] text-sm cursor-pointer">
                                        Battery
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="  cursor-pointer hover:scale-105 hover:border-none hover:bg-[#021431] duration-300  rounded-2xl border-b border-[#2b80ff81] overflow-hidden">
                            <div className="flex justify-between p-3">
                                <div className="flex gap-3 pt-3">
                                    <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-linear-to-r from-[#2B7FFF] to-[#00B8DB] text-[20px]">
                                        <IoCallSharp className='text-white' />
                                    </div>

                                    <div>
                                        <p className="font-inter text-white text-[16px]">
                                            +1 (555) 345-6789
                                        </p>
                                        <p className="font-inter text-[#90A1B9] text-[14px]">
                                            2025-12-16 • 09:42 AM
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <p className="px-3 py-1 border border-[#ff0000] rounded-2xl bg-[#ff1e003f] text-[#FF0404] font-inter text-sm">
                                        Dropped
                                    </p>
                                </div>
                            </div>

                            <div className="px-3 pb-3 flex flex-wrap gap-3">
                                <div className="flex items-center gap-1 font-inter text-[#90A1B9] text-[14px]">
                                    <IoMdTime className="text-[16px]" />
                                    <p>5:23</p>
                                </div>

                                <div className="flex items-center gap-1 font-inter text-[#90A1B9] text-[14px]">
                                    <IoMdCheckmarkCircleOutline className="text-[16px]" />
                                    <p>Call Dropped</p>
                                </div>

                                <div>
                                    <div className="bg-[#1b63ff65] px-3 py-1.5 rounded-[10px] text-[#51A2FF] text-sm cursor-pointer">
                                        Unknown
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className=" cursor-pointer hover:scale-105 hover:border-none hover:bg-[#021431] duration-300  rounded-2xl border-[#2b80ff81] overflow-hidden">
                            <div className="flex justify-between p-3">
                                <div className="flex gap-3 pt-3">
                                    <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-linear-to-r from-[#2B7FFF] to-[#00B8DB] text-[20px]">
                                        <IoCallSharp className='text-white' />
                                    </div>

                                    <div>
                                        <p className="font-inter text-white text-[16px]">
                                            +1 (555) 345-6789
                                        </p>
                                        <p className="font-inter text-[#90A1B9] text-[14px]">
                                            2025-12-16 • 09:42 AM
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <p className="px-3 py-1 border border-[#05DF72] rounded-2xl bg-[#00c9502d] text-[#05DF72] font-inter text-sm">
                                        AI Resolved
                                    </p>
                                </div>
                            </div>

                            <div className="px-3 pb-3 flex flex-wrap gap-3">
                                <div className="flex items-center gap-1 font-inter text-[#90A1B9] text-[14px]">
                                    <IoMdTime className="text-[16px]" />
                                    <p>5:23</p>
                                </div>

                                <div className="flex items-center gap-1 font-inter text-[#90A1B9] text-[14px]">
                                    <IoMdCheckmarkCircleOutline className="text-[16px]" />
                                    <p>Quote Provided</p>
                                </div>

                                <div>
                                    <div className="bg-[#1b63ff65] px-3 py-1.5 rounded-[10px] text-[#51A2FF] text-sm cursor-pointer">
                                        Screen
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="w-6/12">
                <h3 className=' border-b border-[#2b80ffa8] text-[#FFFFFF] font-inter text-[20px] p-3'>Call Details</h3>
                <div className="pt-5 flex gap-20">
                    <div className="">
                        <p className='text-[#90A1B9] text-[14px] font-inter '>Phone Number</p>
                        <p className='text-[#FFFFFF] text-[16px] font-inter'>+1 (555) 123-4567</p>
                    </div>
                    <div className="">
                        <p className='text-[#90A1B9] text-[14px] font-inter '>Duration</p>
                        <p className='text-[#FFFFFF] text-[16px] font-inter'>4:32</p>
                    </div>
                </div>
                <div className="pt-5 flex gap-20">
                    <div className="">
                        <p className='text-[#90A1B9] text-[14px] font-inter '>Date & Time</p>
                        <p className='text-[#FFFFFF] text-[16px] font-inter'>2025-12-16 10:45 AM</p>
                    </div>
                    <div className="">
                        <p className='text-[#90A1B9] text-[14px] font-inter '>Issue Type</p>
                        <p className='text-[#FFFFFF] text-[16px] font-inter'>Screen</p>
                    </div>

                </div>
                <div className="pt-10">
                    <p className='text-[#90A1B9] text-[16px] font-inter '>Call Type</p>
                    <div className="w-26 pt-4">
                        <p className="px-3 py-1 border border-[#05DF72] rounded-2xl bg-[#00c9502d] text-[#05DF72] font-inter text-sm"> AI Resolved </p>
                    </div>
                </div>
                <div className="pt-4">
                    <p className='text-[#90A1B9] text-[14px] font-inter '>Outcome</p>
                    <p className='text-[#FFFFFF] text-[16px] font-inter'>Quote provided</p>
                </div>
                <div className="border border-[#AD46FF] cursor-pointer rounded-2xl bg-[#00c9502d] text-[#C27AFF] bg-linear-to-r from-[#ac46ff4f] to-[#f6339b81] flex justify-center">
                    <p className="px-3 py-3 font-inter text-sm flex items-center gap-3">
                    <FaPlay />Play Audio Recording
                    </p>
                </div>
                <div className="">
                    <div className="flex items-center gap-2 pt-10 text-[16px]">
                        <GrDocumentText className='text-[#51A2FF]' />
                        <h3 className='text-[#FFFFFF] font-inter '>Conversation Transcript</h3>
                    </div>
                </div>
                <div className="pt-5">
                <div className="  p-3 rounded-2xl bg-[#1d293d62]">
                    <div className="">
                    <h4 className='font-inter text-[#05DF72] text-[14px] '>AI Assistant:</h4>
                    <p className='font-inter text-[#FFFFFF] text-[12px]'>Thank you for calling UBreakiFix! How can I help you today?</p>
                    </div>
                    <div className="pt-3">
                    <h4 className='font-inter text-[#51A2FF] text-[14px] '>Customer:</h4>
                    <p className='font-inter text-[#FFFFFF] text-[12px]'>Hi, my iPhone 13 screen is cracked. How much would it cost to repair?</p>
                    </div>
                     <div className="pt-3">
                    <h4 className='font-inter text-[#05DF72] text-[14px] '>AI Assistant:</h4>
                    <p className='font-inter text-[#FFFFFF] text-[12px]'>I can help you with that! For an iPhone 13 screen repair, our price is $199. This includes parts, labor, and comes with a 90-day warranty. Would you like to book an appointment?</p>
                    </div>
                    <div className="pt-3">
                    <h4 className='font-inter text-[#51A2FF] text-[14px] '>Customer:</h4>
                    <p className='font-inter text-[#FFFFFF] text-[12px]'>Yes, please! When are you available?</p>
                    </div>
                     <div className="pt-3">
                    <h4 className='font-inter text-[#05DF72] text-[14px] '>AI Assistant:</h4>
                    <p className='font-inter text-[#FFFFFF] text-[12px]'>Great! I have availability today at 2:00 PM or tomorrow at 10:00 AM. Which works better for you?</p>
                    </div>
                </div>

                </div>
            </div>
        </div>
    )
}

export default CallList
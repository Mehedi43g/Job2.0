import React from 'react'
import { IoMdCheckmarkCircleOutline, IoMdTime } from 'react-icons/io'
import { IoCallOutline, IoCallSharp } from 'react-icons/io5'

const CallList = () => {

    
    return (
        <div className="">
            <div className="w-5/12">
                <div className="  border border-[#2b80ffa8]  rounded-2xl">
                    <h3 className=' border-b border-[#2b80ffa8] text-[#FFFFFF] font-inter text-[20px] p-3'>Call List</h3>
                    <div className="py-2">
                         <div className="  border-b border-[#2b80ff81] overflow-hidden">
                            <div className="flex justify-between p-3">
                                <div className="flex gap-3 pt-3">
                                    <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-linear-to-r from-[#2B7FFF] to-[#00B8DB] text-[20px]">
                                        <IoCallSharp  className='text-white'/>
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
                         <div className="  border-b border-[#2b80ff81] overflow-hidden">
                            <div className="flex justify-between p-3">
                                <div className="flex gap-3 pt-3">
                                    <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-linear-to-r from-[#2B7FFF] to-[#00B8DB] text-[20px]">
                                        <IoCallSharp  className='text-white'/>
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
                         <div className="  border-b border-[#2b80ff81] overflow-hidden">
                            <div className="flex justify-between p-3">
                                <div className="flex gap-3 pt-3">
                                    <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-linear-to-r from-[#2B7FFF] to-[#00B8DB] text-[20px]">
                                        <IoCallSharp  className='text-white'/>
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
                         <div className="  border-b border-[#2b80ff81] overflow-hidden">
                            <div className="flex justify-between p-3">
                                <div className="flex gap-3 pt-3">
                                    <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-linear-to-r from-[#2B7FFF] to-[#00B8DB] text-[20px]">
                                        <IoCallSharp  className='text-white'/>
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

                        <div className=" border-[#2b80ff81] overflow-hidden">
                            <div className="flex justify-between p-3">
                                <div className="flex gap-3 pt-3">
                                    <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-linear-to-r from-[#2B7FFF] to-[#00B8DB] text-[20px]">
                                        <IoCallSharp  className='text-white'/>
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
            <div className="w-6/12"></div>
        </div>
    )
}

export default CallList
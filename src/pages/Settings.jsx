import React, { useState } from 'react'
import prof from '../assets/Timg.png'
const Settings = () => {
  let [profile,setProfile] = useState(true)
  let [pprofile,setPprofile] = useState(false)
  const handleProfile = () => {
  setProfile(true);
  setPprofile(false);
};

const handlePprofile = () => {
  setProfile(false);
  setPprofile(true);
};

  return (
    <div>
      <div className="flex gap-3">
        <p onClick={handleProfile} className={`text-[#FFFFFF]  text-[24px] font-inter ${profile == true ? "border-b "  : "border-none "}`}>Profile</p>
        <p onClick={handlePprofile} className={`text-[#FFFFFF] text-[24px] font-inter ${pprofile == true ? "border-b ": "border-none" }`}>Password Settings</p>
      </div>
      {profile && 
     <div className="">
       <div className="Profile-Part pt-10">
        <h3 className='text-[16px] text-[#FFFFFF]'>Profile Image</h3>
        <img className=' rounded-full' src={prof} alt="" />
        <button className='text-[10px] cursor-pointer font-medium  text-white  px-4 py-1.5  rounded-full 
         border border-white/60  hover:border-white  hover:bg-white/10  transition duration-300 backdrop-blur-sm'>Edit Profile</button>
      </div>
      <div className="pt-10">
        <div className="flex w-4/12 gap-4 border-b border-[#192d718c] pb-1">
          <h3 className='text-[#FFFFFF] font-inter text-[20px] font-semibold '>Full Name:</h3>
          <p className='text-[#FFFFFF] font-inter text-[20px]'>Jane D.</p>
        </div>
        <div className="flex pt-4 w-4/12 gap-4 border-b border-[#192d718c] pb-1">
          <h3 className='text-[#FFFFFF] font-inter text-[20px] font-semibold '>Email:</h3>
          <p className='text-[#FFFFFF] font-inter text-[20px]'>jane@gmail.com</p>
        </div>
        <div className="flex pt-4 w-4/12 gap-4 border-b border-[#192d718c] pb-1">
          <h3 className='text-[#FFFFFF] font-inter text-[20px] font-semibold '>Store Name:</h3>
          <p className='text-[#FFFFFF] font-inter text-[20px]'>Ubreakfix Store</p>
        </div>
        <div className="flex pt-4 w-4/12 gap-4 border-b border-[#192d718c] pb-1">
          <h3 className='text-[#FFFFFF] font-inter text-[20px] font-semibold '>Store Address:</h3>
          <p className='text-[#FFFFFF] font-inter text-[20px]'>123 Main Street, New York, NY 10001</p>
        </div>
      </div>
     </div>
      
      }

      {/* password settings ar part suru hobe    */}
      {pprofile && 
     <div className="">
       <div className="">
        <div className="Profile-Part pt-10">
          <h3 className='text-[16px] text-[#FFFFFF]'>Profile Image</h3>
          <img className=' rounded-full' src={prof} alt="" />
          <button className='text-[10px] cursor-pointer font-medium  text-white  px-4 py-1.5  rounded-full 
         border border-white/60  hover:border-white  hover:bg-white/10  transition duration-300 backdrop-blur-sm'>Edit Profile</button>
        </div>
      </div>
      <div className=" flex gap-3">
          <div className=" pt-5 w-6/12 gap-4  border-[#192d718c] pb-1">
            <h3 className='text-[#FFFFFF] font-inter text-[20px] font-semibold pb-3'>Full Name</h3>
            <input className='w-full p-3 outline-none text-[#FFFFFF] bg-[#0A0A0F] border border-[#00ff886c] rounded-2xl' type="text" placeholder=' your Name' />
          </div>
          <div className=" pt-5 w-6/12 gap-4  border-[#192d718c] pb-1">
            <h3 className='text-[#FFFFFF] font-inter text-[20px] font-semibold pb-3'>Email</h3>
            <input className='w-full p-3 outline-none text-[#FFFFFF] bg-[#0A0A0F] border border-[#00ff886c] rounded-2xl' type="text" placeholder=' jane@gmail.com' />
          </div>
      </div>
      <div className=" flex gap-3">
          <div className=" pt-5 w-6/12 gap-4  border-[#192d718c] pb-1">
            <h3 className='text-[#FFFFFF] font-inter text-[20px] font-semibold pb-3'>Store Name</h3>
            <input className='w-full p-3 outline-none text-[#FFFFFF] bg-[#0A0A0F] border border-[#00ff886c] rounded-2xl' type="text" placeholder=' store Name' />
          </div>
          <div className=" pt-5 w-6/12 gap-4  border-[#192d718c] pb-1">
            <h3 className='text-[#FFFFFF] font-inter text-[20px] font-semibold pb-3'>Store Address</h3>
            <input className='w-full p-3 outline-none text-[#FFFFFF] bg-[#0A0A0F] border border-[#00ff886c] rounded-2xl' type="text" placeholder=' address' />
          </div>
      </div>
      <div className="text-center pt-10">
        <button className='px-40 py-2 rounded-2xl cursor-pointer border bg-[#00C950] text-[#FFFFFF] font-inter font-bold text-[20px]'>Save</button>
      </div>
     </div>
      
      }

    </div>
  )
}

export default Settings
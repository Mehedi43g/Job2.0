import React from 'react'
import Sidebar from '../Components/Sidebar'
import { Outlet } from 'react-router'
import TopNavber from '../Components/TopNavber'

const Layout = () => {
  return (
     <div className="flex h-screen bg-[#081028]">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <TopNavber />

        <div className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Layout
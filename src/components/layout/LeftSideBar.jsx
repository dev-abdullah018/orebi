import React from 'react'
import SidebarContent from './SidebarContent';

const LeftSideBar = () => {
  return (
    <div>
     <SidebarContent dropDown={true}/>
     <SidebarContent  dropDown={false}/>
     <SidebarContent  dropDown={true}/>
    </div>
  )
}

export default LeftSideBar;
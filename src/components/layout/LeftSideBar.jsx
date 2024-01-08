import React from 'react'
import SidebarContent from './SidebarContent';

const LeftSideBar = () => {
  return (
    <div>
     <SidebarContent dropDown={true} droptitle="Shop by Category"/>
     <SidebarContent dropDown={true} droptitle="Shop by Color"/>
     <SidebarContent dropDown={true} droptitle="Shop by Brand"/>
     <SidebarContent dropDown={true} droptitle="Shop by Price"/>
    </div>
  )
}

export default LeftSideBar;
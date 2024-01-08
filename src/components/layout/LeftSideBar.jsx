import React from 'react'
import SidebarContent from './SidebarContent';
import { category,colors,brands,prices } from '../../data/data';

const LeftSideBar = () => {
  return (
    <div>
     <SidebarContent dropDown={true} droptitle="Shop by Category" data={category}/>
     <SidebarContent dropDown={false} droptitle="Shop by Color" data={colors}/>
     <SidebarContent dropDown={true} droptitle="Shop by Brand" data={brands}/>
     <SidebarContent dropDown={true} droptitle="Shop by Price" data={prices}/>
    </div>
  )
}

export default LeftSideBar;
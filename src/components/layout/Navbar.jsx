import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo.png'
import Image from './Image';
import Flex from './Flex';
import List from './List';
import ListItem from './ListItem';
import { FaBars } from "react-icons/fa6";
import Container from './Container';

const Navbar = () => {
  let [show,setShow] = useState(true);

  useEffect(()=>{
    function scrollWidth(){
      if(window.innerWidth < 1024){
        setShow(false)
      }else{
        setShow(true)
      }
    }
    scrollWidth()
    window.addEventListener("resize", scrollWidth)
  },[])
  return (
    <>
      <nav className='py-8'>
        <Container>
          <Flex className='lg:flex'>
            <div className="lg:w-3/12">
              <Image src={logo} alt='orebi' />
            </div>
            <div className="lg:w-9/12 w-full">
            <FaBars onClick={()=> setShow(!show)} className='block lg:hidden ml-auto absolute top-2.5 right-2.5'/>
            {
              show && (
                <List className='lg:flex lg:justify-end lg:gap-x-10 mt-5 lg:mt-0'>
                <ListItem className='font-dm text-sm font-normal hover:font-bold my-2.5 lg:my-0' itemname="Home" /> 
                <ListItem className='font-dm text-sm font-normal hover:font-bold my-2.5 lg:my-0' itemname="Shop"/>
                <ListItem className='font-dm text-sm font-normal hover:font-bold my-2.5 lg:my-0' itemname="About"/>
                <ListItem className='font-dm text-sm font-normal hover:font-bold my-2.5 lg:my-0' itemname="Contacts"/>
                <ListItem className='font-dm text-sm font-normal hover:font-bold my-2.5 lg:my-0' itemname="Journal"/>
              </List>
              )
            }
            </div>
          </Flex>
        </Container>
      </nav>
    </>
  );
}

export default Navbar;


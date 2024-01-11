import React, { useEffect, useState, useRef } from 'react';
import logo from '../../assets/logo.png';
import Image from './Image';
import Flex from './Flex';
import List from './List';
import ListItem from './ListItem';
import { FaBars } from "react-icons/fa6";
import Container from './Container';

const Navbar = () => {
  const [show, setShow] = useState(false);
  const menuRef = useRef(null);

  const handleToggleMenu = () => {
    setShow(!show);
  };

  const handleCloseMenu = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setShow(false);
    }
  };

  useEffect(() => {
    function scrollWidth() {
      setShow(window.innerWidth >= 1024);
    }

    scrollWidth();

    window.addEventListener("resize", scrollWidth);
    document.addEventListener("mousedown", handleCloseMenu);

    return () => {
      window.removeEventListener("resize", scrollWidth);
      document.removeEventListener("mousedown", handleCloseMenu);
    };
  }, []);

  return (
    <>
      <nav className='py-8'>
        <Container>
          <Flex className='lg:flex'>
            <div className="lg:w-3/12">
              <Image src={logo} alt='orebi' />
            </div>
            <div className="lg:w-9/12 w-full" ref={menuRef}>
              <FaBars onClick={handleToggleMenu} className='block lg:hidden ml-auto absolute top-10 right-2.5' />
              {show && (
                <List className='lg:flex lg:justify-end lg:gap-x-10 mt-5 lg:mt-0'>
                  <ListItem className='font-dm text-sm font-normal hover:font-bold my-2.5 lg:my-0' itemname="Home" />
                  <ListItem className='font-dm text-sm font-normal hover:font-bold my-2.5 lg:my-0' itemname="Shop"/>
                  <ListItem className='font-dm text-sm font-normal hover:font-bold my-2.5 lg:my-0' itemname="About"/>
                  <ListItem className='font-dm text-sm font-normal hover:font-bold my-2.5 lg:my-0' itemname="Contacts"/>
                  <ListItem className='font-dm text-sm font-normal hover:font-bold my-2.5 lg:my-0' itemname="Journal"/>
                </List>
              )}
            </div>
          </Flex>
        </Container>
      </nav>
    </>
  );
}

export default Navbar;

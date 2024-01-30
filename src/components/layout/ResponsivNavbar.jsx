import React, { useEffect, useState, useRef } from 'react';
import logo from '../../assets/logo.png';
import Image from './Image';
import List from './List';
import ListItem from './ListItem';
import { FaBars } from "react-icons/fa6";
import Container from './Container';

const ResponsiveNavbar = () => {
  const [show, setShow] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShow(false);
      }
    }

    function handleResize() {
      setShow(window.innerWidth >= 1024);
    }

    document.addEventListener("click", handleClickOutside);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <nav className='py-8 md:hidden transition-all duration-1000 ease-in-out'>
        <Container>
          <div>
            <Image src={logo} alt='orebi' />
          </div>
          <div className="w-full" ref={menuRef}>
            <FaBars
              onClick={() => setShow(!show)}
              className='block ml-auto absolute top-10 right-2.5'
            />
            {show && (
              <List className='mt-5'>
                <ListItem className='font-dm text-sm font-normal hover:font-bold my-2.5' itemname="Home" />
                <ListItem className='font-dm text-sm font-normal hover:font-bold my-2.5' itemname="Shop"/>
                <ListItem className='font-dm text-sm font-normal hover:font-bold my-2.5' itemname="About"/>
                <ListItem className='font-dm text-sm font-normal hover:font-bold my-2.5' itemname="Contacts"/>
                <ListItem className='font-dm text-sm font-normal hover:font-bold my-2.5' itemname="Journal"/>
              </List>
            )}
          </div>
        </Container>
      </nav>
    </>
  );
}

export default ResponsiveNavbar;

import React from 'react';
import logo from '../../assets/logo.png';
import Image from './Image';
import Flex from './Flex';
import List from './List';
import ListItem from './ListItem';
import Container from './Container';
import ResponsiveNavbar from './ResponsivNavbar';

const Navbar = () => {
  
  return (
    <>
      <nav className='py-8 hidden md:block'>
        <Container>
          <Flex className='flex'>
            <div className="w-3/12">
              <Image src={logo} alt='orebi' />
            </div>
            <div className="w-9/12">
                <List className='flex justify-end gap-x-10'>
                  <ListItem className='font-dm text-sm font-normal hover:font-bold' itemname="Home" />
                  <ListItem className='font-dm text-sm font-normal hover:font-bold' itemname="Shop"/>
                  <ListItem className='font-dm text-sm font-normal hover:font-bold' itemname="About"/>
                  <ListItem className='font-dm text-sm font-normal hover:font-bold' itemname="Contacts"/>
                  <ListItem className='font-dm text-sm font-normal hover:font-bold' itemname="Journal"/>
                </List>
            </div>
          </Flex>
        </Container>
      </nav>
      <ResponsiveNavbar/>
    </>
  );
}

export default Navbar;
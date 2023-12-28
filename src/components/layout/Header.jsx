import Container from "./Container";
import Dropdown from "./Dropdown";
import Flex from "./Flex";
import { HiBars3BottomLeft } from "react-icons/hi2";
import List from "./List";
import ListItem from "./ListItem";
import { useEffect, useRef, useState } from "react";

const Header = () => {
  let [show, setShow] = useState(false);
  let ref = useRef()

  useEffect(()=>{
     document.body.addEventListener("click", (e)=>{
       if(ref.current.contains(e.target)){
        setShow(true)
       }else{
        setShow(false)
       }
     })
  },[])
  return (
    <div className="bg-[#F5F5F3]">
      <Container>
      <Flex className="justify-between">
        <div >
        <Dropdown dropref={ref} titleicon={<HiBars3BottomLeft />} titletext="Shop by Category" className=" relative">
            {
            show && (
            <List className="absolute top-8 w-[263px] bg-primary text-[#767676]">
              <ListItem itemname="Accesories" className="py-4 px-5 hover:px-6 border border-solid border-[#2D2D2D] hover:text-white ease-in duration-300 "/>
              <ListItem itemname="Furniture" className="py-4 px-5 hover:px-6 border border-solid border-[#2D2D2D] hover:text-white ease-in duration-300"/>
              <ListItem itemname="Electronics" className="py-4 px-5 hover:px-6 border border-solid border-[#2D2D2D] hover:text-white ease-in duration-300"/>
              <ListItem itemname="Clothes" className="py-4 px-5 hover:px-6 border border-solid border-[#2D2D2D] hover:text-white ease-in duration-300"/>
              <ListItem itemname="Bags" className="py-4 px-5 hover:px-6 border border-solid border-[#2D2D2D] hover:text-white ease-in duration-300"/>
              <ListItem itemname="Home appliances" className="py-4 px-5 hover:px-6 border border-solid border-[#2D2D2D] hover:text-white ease-in duration-300"/>
            </List>
              )
            }
        </Dropdown>
        </div>
        <div>1</div>
        <div>1</div>
      </Flex>
    </Container>
    </div>
  );
};

export default Header;


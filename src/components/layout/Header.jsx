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
        <Dropdown dropref={ref} titleicon={<HiBars3BottomLeft />} titletext="Shop by Category" className="yourListItemClassName">
            {
            show && (
            <List className="absolute">
              <ListItem itemname="Accesories" className="yourListItemClassName"/>
              <ListItem itemname="Accesories" className="yourListItemClassName"/>
              <ListItem itemname="Accesories" className="yourListItemClassName"/>
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


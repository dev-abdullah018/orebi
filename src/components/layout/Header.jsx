import Container from "./Container";
import Dropdown from "./Dropdown";
import Flex from "./Flex";
import { HiBars3BottomLeft } from "react-icons/hi2";
import List from "./List";
import ListItem from "./ListItem";
import { useState } from "react";

const Header = () => {
  let [show, setShow] = useState(false);

  let handleDropdown =()=>{
    setShow(!show)
   }
  return (
    <div className="bg-[#F5F5F3]">
      <Container>
      <Flex className="justify-between">
        <div >
        <Dropdown onClick={handleDropdown} titleicon={<HiBars3BottomLeft />} titletext="Shop by Category">
            {
              show && (
            <List className="absolute">
              <ListItem itemname="Accesories"/>
              <ListItem itemname="Accesories"/>
              <ListItem itemname="Accesories"/>
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

// export default Header;


{/* <Dropdown className="flex gap-3 items-center">
<HiBars3BottomLeft/> Shop by Category
</Dropdown> */}
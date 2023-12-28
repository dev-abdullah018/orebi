import Container from "./Container";
import Dropdown from "./Dropdown";
import Flex from "./Flex";
import { HiBars3BottomLeft } from "react-icons/hi2";
import List from "./List";
import ListItem from "./ListItem";
import { useEffect, useRef, useState } from "react";

const Header = () => {
  let [show, setShow] = useState(false);
  let ref = useRef();

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (ref.current.contains(e.target)) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, []);
  return (
    <div className="bg-[#F5F5F3]">
      <Container>
        <Flex className="justify-between">
          <div>
            <Dropdown
              dropref={ref}
              titleicon={<HiBars3BottomLeft />}
              titletext="Shop by Category"
              className=" relative"
            >
              {show && (
                <List className="absolute top-8 w-[263px] bg-primary text-[#767676]">
                  <ListItem
                    itemname="Accesories"
                    className="border border-solid border-[#2D2D2D] px-5 py-4 duration-300 ease-in hover:px-6 hover:text-white "
                  />
                  <ListItem
                    itemname="Furniture"
                    className="border border-solid border-[#2D2D2D] px-5 py-4 duration-300 ease-in hover:px-6 hover:text-white"
                  />
                  <ListItem
                    itemname="Electronics"
                    className="border border-solid border-[#2D2D2D] px-5 py-4 duration-300 ease-in hover:px-6 hover:text-white"
                  />
                  <ListItem
                    itemname="Clothes"
                    className="border border-solid border-[#2D2D2D] px-5 py-4 duration-300 ease-in hover:px-6 hover:text-white"
                  />
                  <ListItem
                    itemname="Bags"
                    className="border border-solid border-[#2D2D2D] px-5 py-4 duration-300 ease-in hover:px-6 hover:text-white"
                  />
                  <ListItem
                    itemname="Home appliances"
                    className="border border-solid border-[#2D2D2D] px-5 py-4 duration-300 ease-in hover:px-6 hover:text-white"
                  />
                </List>
              )}
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

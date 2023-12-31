import Container from "./Container";
import Dropdown from "./Dropdown";
import Flex from "./Flex";
import { HiBars3BottomLeft } from "react-icons/hi2";
import List from "./List";
import ListItem from "./ListItem";
import { useEffect, useRef, useState } from "react";
import Search from "./Search";
import { FaSearch } from "react-icons/fa";

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
    <div className="bg-[#F5F5F3] py-6">
      <Container>
        <Flex className="items-center justify-between">
          <div>
            <Dropdown
              dropref={ref}
              titleicon={<HiBars3BottomLeft />}
              titletext="Shop by Category"
              className="relative"
            >
              {show && (
                <List className="absolute top-8 w-[263px] bg-primary font-dm text-sm font-normal text-[#767676]">
                  <ListItem
                    itemname="Accesories"
                    className="border border-solid border-[#2D2D2D] px-5 py-4 duration-100 ease-in hover:px-6 hover:font-bold hover:text-white"
                  />
                  <ListItem
                    itemname="Furniture"
                    className="border border-solid border-[#2D2D2D] px-5 py-4 duration-100 ease-in hover:px-6 hover:font-bold hover:text-white"
                  />
                  <ListItem
                    itemname="Electronics"
                    className="border border-solid border-[#2D2D2D] px-5 py-4 duration-100 ease-in hover:px-6 hover:font-bold hover:text-white"
                  />
                  <ListItem
                    itemname="Clothes"
                    className="border border-solid border-[#2D2D2D] px-5 py-4 duration-100 ease-in hover:px-6 hover:font-bold hover:text-white"
                  />
                  <ListItem
                    itemname="Bags"
                    className="border border-solid border-[#2D2D2D] px-5 py-4 duration-100 ease-in hover:px-6 hover:font-bold hover:text-white"
                  />
                  <ListItem
                    itemname="Home appliances"
                    className="border border-solid border-[#2D2D2D] px-5 py-4 duration-100 ease-in hover:px-6 hover:font-bold hover:text-white"
                  />
                </List>
              )}
            </Dropdown>
          </div>
          <div className="relative w-[600px]">
            <Search
              className="w-full px-4 py-5 font-dm text-sm font-normal placeholder:text-[#c4c4c4]"
              placeholder="Search Products"
            />
            <FaSearch className="absolute right-5 top-5" />
          </div>
          <div>1</div>
        </Flex>
      </Container>
    </div>
  );
};

export default Header;

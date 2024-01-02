import Container from "./Container";
import Dropdown from "./Dropdown";
import Flex from "./Flex";
import { HiBars3BottomLeft } from "react-icons/hi2";
import List from "./List";
import ListItem from "./ListItem";
import { useEffect, useRef, useState } from "react";
import Search from "./Search";
import { FaSearch, FaUser,FaShoppingCart } from "react-icons/fa";
import { VscTriangleDown } from "react-icons/vsc";

const Header = () => {
  let [categoryShow, setCategoryShow] = useState(false);
  let [userDropDownShow, setUserDropDownShow] = useState(false);
  let categoryRef = useRef();
  let userRef = useRef();

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (categoryRef.current.contains(e.target)) {
        setCategoryShow(true);
      } else {
        setCategoryShow(false);
      }

      if (userRef.current.contains(e.target)) {
        setUserDropDownShow(true);
      } else {
        setUserDropDownShow(false);
      }
    });
  }, []);
  return (
    <div className="bg-[#F5F5F3] py-6">
      <Container>
        <Flex className="flex items-center justify-between">
          <div>
            <Dropdown
              dropref={categoryRef}
              titleicon={<HiBars3BottomLeft />}
              titletext="Shop by Category"
              className="relative"
            >
              {categoryShow && (
                <List className="absolute top-8 w-[263px] bg-primary font-dm text-sm font-normal text-[#767676]">
                  <ListItem
                    itemname="Accesories"
                    className="border-b border-solid border-[#2D2D2D] px-5 py-4 duration-100 ease-in hover:px-6 hover:font-bold hover:text-white"
                  />
                  <ListItem
                    itemname="Furniture"
                    className="border-b border-solid border-[#2D2D2D] px-5 py-4 duration-100 ease-in hover:px-6 hover:font-bold hover:text-white"
                  />
                  <ListItem
                    itemname="Electronics"
                    className="border-b border-solid border-[#2D2D2D] px-5 py-4 duration-100 ease-in hover:px-6 hover:font-bold hover:text-white"
                  />
                  <ListItem
                    itemname="Clothes"
                    className="border-b border-solid border-[#2D2D2D] px-5 py-4 duration-100 ease-in hover:px-6 hover:font-bold hover:text-white"
                  />
                  <ListItem
                    itemname="Bags"
                    className="border-b border-solid border-[#2D2D2D] px-5 py-4 duration-100 ease-in hover:px-6 hover:font-bold hover:text-white"
                  />
                  <ListItem
                    itemname="Home appliances"
                    className="px-5 py-4 duration-100 ease-in hover:px-6 hover:font-bold hover:text-white"
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
          <div className="flex gap-x-10">
          <Dropdown className="relative" dropref={userRef}>
          <div className="flex">
              <FaUser />
              <VscTriangleDown /> 
             </div>
             {userDropDownShow && (
                <List className="absolute top-8 right-0 w-[200px] bg-white font-dm text-sm font-normal text-primary text-center border border-solid border-[#F0F0F0]">
                  <ListItem
                    itemname="My Account"
                    className="border-b border-solid border-#F0F0F0] px-5 py-4 duration-100 ease-in hover:font-bold hover:text-white hover:bg-primary"
                  />
                  <ListItem
                    itemname="Log Out"
                    className="border-b border-solid border-[#F0F0F0] px-5 py-4 duration-100 ease-in hover:font-bold hover:text-white hover:bg-primary"
                  />
                </List>
              )}
          </Dropdown>
              <div><FaShoppingCart/></div>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Header;

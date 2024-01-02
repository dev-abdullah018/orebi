import Container from "./Container";
import Dropdown from "./Dropdown";
import Flex from "./Flex";
import { HiBars3BottomLeft } from "react-icons/hi2";
import List from "./List";
import ListItem from "./ListItem";
import { useEffect, useRef, useState } from "react";
import Search from "./Search";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import { VscTriangleDown } from "react-icons/vsc";
import Image from "./Image";
import cartimg from "../../assets/cartimg.png";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";

const Header = () => {
  let [categoryShow, setCategoryShow] = useState(false);
  let [userDropDownShow, setUserDropDownShow] = useState(false);
  let [cartDropDownShow, setCartUserDropDownShow] = useState(false);
  let categoryRef = useRef();
  let userRef = useRef();
  let cartRef = useRef();

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

      if (cartRef.current.contains(e.target)) {
        setCartUserDropDownShow(true);
      } else {
        setCartUserDropDownShow(false);
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
                <List className="absolute right-0 top-8 w-[200px] border border-solid border-[#F0F0F0] bg-white text-center font-dm text-sm font-normal text-primary">
                  <ListItem
                    itemname="My Account"
                    className="border-#F0F0F0] border-b border-solid px-5 py-4 duration-100 ease-in hover:bg-primary hover:font-bold hover:text-white"
                  />
                  <ListItem
                    itemname="Log Out"
                    className="border-b border-solid border-[#F0F0F0] px-5 py-4 duration-100 ease-in hover:bg-primary hover:font-bold hover:text-white"
                  />
                </List>
              )}
            </Dropdown>

            <div>
              <Dropdown className="relative" dropref={cartRef}>
                <FaShoppingCart className="text-xl" />
                {cartDropDownShow && (
                  <div className="absolute right-0 top-8 w-[360px] border border-solid border-[#F0F0F0]">
                    <div className="bg-[#F5F5F3] p-5">
                      <Flex className="flex justify-between">
                        <div>
                          <Image src={cartimg} />
                        </div>
                        <div className="flex flex-col justify-center">
                          <h3 className="font-dm text-sm font-bold text-primary">
                            Black Smart Watch
                          </h3>
                          <p className="mt-4 font-dm text-sm font-bold text-primary">
                            $44.00
                          </p>
                        </div>
                        <div className="flex items-center justify-end">
                          <ImCross />
                        </div>
                      </Flex>
                    </div>
                    <div className="bg-white  p-5">
                      <h4 className="font-dm text-base font-normal text-[#767676]">
                        Subtotal :{" "}
                        <span className="font-bold text-primary">$44.00</span>
                      </h4>
                      <Link
                        to="#"
                        className="mt-3 inline-block border border-solid border-primary px-10 py-4 font-dm text-sm font-bold"
                      >
                        View Cart
                      </Link>
                      <Link
                        to="#"
                        className="mt-3 inline-block border border-solid border-primary bg-primary px-10 py-4 font-dm text-sm font-bold text-white ml-5"
                      >
                        Checkout
                      </Link>
                    </div>
                  </div>
                )}
              </Dropdown>
            </div>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Header;

import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import List from "./List";
import ListItem from "./ListItem";
import Image from "./Image";
import logo from "../../assets/logo.png";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-36 bg-[#F5F5F3] py-14">
      <Container>
        <Flex className="flex flex-col md:flex-row">
          <div className="flex w-full justify-between md:w-[43%] md:justify-normal">
            <div className="md:w-1/3">
              <h4 className="mb-4 font-dm text-base font-bold">MENU</h4>
              <List>
                <ListItem
                  className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                  itemname="Home"
                  href="#"
                />
                <ListItem
                  className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                  itemname="Shop"
                  href="#"
                />
                <ListItem
                  className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                  itemname="About"
                  href="#"
                />
                <ListItem
                  className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                  itemname="Contact"
                  href="#"
                />
                <ListItem
                  className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                  itemname="Journal"
                  href="#"
                />
              </List>
            </div>
            <div className="md:w-1/3">
              <h4 className="mb-4 font-dm text-base font-bold">SHOP</h4>
              <List>
                <ListItem
                  className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                  itemname="Category 1"
                  href="#"
                />
                <ListItem
                  className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                  itemname="Category 2"
                  href="#"
                />
                <ListItem
                  className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                  itemname="Category 3"
                  href="#"
                />
                <ListItem
                  className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                  itemname="Category 4"
                  href="#"
                />
                <ListItem
                  className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                  itemname="Category 5"
                  href="#"
                />
              </List>
            </div>
            <div className="md:w-1/3">
              <h4 className="mb-4 font-dm text-base font-bold">HELP</h4>
              <List>
                <ListItem
                  className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                  itemname="Privacy Policy"
                  href="#"
                />
                <ListItem
                  className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                  itemname="Terms & Conditions"
                  href="#"
                />
                <ListItem
                  className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                  itemname="Special E-shop"
                  href="#"
                />
                <ListItem
                  className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                  itemname="Shipping"
                  href="#"
                />
                <ListItem
                  className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                  itemname="Secure Payments"
                  href="#"
                />
              </List>
            </div>
          </div>
          <div className="mt-10 flex w-full sm:mt-14 md:mt-0 md:w-[57%]">
            <div className="w-[56%]">
              <h4 className="mb-4 font-dm text-base font-bold">
                (052) 611-5711 <br /> company@domain.com
              </h4>
              <p className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]">
                575 Crescent Ave. Quakertown, PA 18951
              </p>
            </div>
            <div className="w-[44%]">
              <Image src={logo} />
            </div>
          </div>
        </Flex>
        <Flex className="mt-16 flex items-center justify-between gap-3 sm:gap-0">
          <div className="flex items-center gap-6">
            <Link>
              <FaFacebookF className="hover:text-[#316FF6]" />
            </Link>
            <Link>
              <FaLinkedinIn className="hover:text-[#0077b5]" />
            </Link>
            <Link>
              <FaInstagram className="hover:text-[#E1306C]" />
            </Link>
          </div>
          <div>
            <span className="font-dm text-sm font-normal text-[#6D6D6D]">
              2020 Orebi Minimal eCommerce Figma Template by Adveits
            </span>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Footer;

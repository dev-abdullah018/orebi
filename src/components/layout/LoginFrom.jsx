import React, { useState } from "react";
import Heading from "./Heading";
import InputBox from "./InputBox";
import { IoEye,IoEyeOff } from "react-icons/io5";
import Button from "./Button";

const LoginFrom = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [subscribe, setSubscribe] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubscribeChange = () => {
    setSubscribe(!subscribe);
  };

  return (
    <div>
      <div className="pt-14 pb-16  border-b border-solid border-[#F0F0F0]">
      <Heading title="Returning Customer" />
      <div className="mt-10 grid grid-cols-2 gap-12">
          <div>
              <InputBox
                as="input"
                type="email"
                title="Email Address"
                placeholder="Email Address"
              />
            </div>
            <div className="relative">
          <InputBox
            as="input"
            type={showPassword ? "text" : "password"}
            title="Password"
            placeholder="Password"
            className="mb-0"
          />
          {showPassword ? (
            <IoEyeOff
              className="absolute right-3 top-11 cursor-pointer text-[#767676]"
              onClick={togglePasswordVisibility}
            />
          ) : (
            <IoEye
              className="absolute right-3 top-11 cursor-pointer text-[#767676]"
              onClick={togglePasswordVisibility}
            />
          )}
      </div>
      </div>
     </div>
    <div className="pt-14 pb-16">
    <Heading title="New Customer" />
     <p className="w-[644px] font-dm font-normal text-base text-[#767676] leading-[30px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
    </div>
     <Button title="Log in"></Button>
    </div>
  );
};

export default LoginFrom;

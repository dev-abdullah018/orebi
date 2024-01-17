import React, { useState } from "react";
import Heading from "./Heading";
import InputBox from "./InputBox";
import { IoEye,IoEyeOff } from "react-icons/io5";
import Button from "./Button";

const SignUpFrom = () => {
  // Placeholder data for divisions and districts
  const divisions = [
    "Dhaka",
    "Chittagong",
    "Rajshahi",
    "Khulna",
    "Barisal",
    "Sylhet",
    "Rangpur",
    "Mymensingh",
  ];
  const districts = {
    Dhaka: ["Dhaka", "Gazipur", "Narayanganj"],
    Chittagong: ["Chittagong", "Coxs Bazar", "Comilla"],
    Rajshahi: ["Rajshahi", "Bogra", "Pabna"],
    Khulna: ["Khulna", "Jessore", "Satkhira"],
    Barisal: ["Barisal", "Patuakhali", "Bhola"],
    Sylhet: ["Sylhet", "Moulvibazar", "Habiganj"],
    Rangpur: ["Rangpur", "Dinajpur", "Kurigram"],
    Mymensingh: ["Mymensingh", "Jamalpur", "Netrokona"],
  };

  const [selectedDivision, setSelectedDivision] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [subscribe, setSubscribe] = useState(false);


  const handleDivisionChange = (event) => {
    setSelectedDivision(event.target.value);
    setSelectedDistrict("");
  };

  const handleDistrictChange = (event) => {
    setSelectedDistrict(event.target.value);
  };

  const togglePasswordVisibility1 = () => {
    setShowPassword1((prevShowPassword) => !prevShowPassword);
  };

  const togglePasswordVisibility2 = () => {
    setShowPassword2((prevShowPassword) => !prevShowPassword);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubscribeChange = () => {
    setSubscribe(!subscribe);
  };

  return (
    <div>
      <div className="pt-14 pb-16 border-b border-solid border-[#F0F0F0]">
        <Heading title="Your Personal Details" />
        <div className="mt-10 grid grid-cols-2 gap-12">
          <div>
            <div className="mb-12">
              <InputBox
                as="input"
                type="text"
                title="First Name"
                placeholder="First Name"
              />
            </div>
            <div>
              <InputBox
                as="input"
                type="email"
                title="Email Address"
                placeholder="Email Address"
              />
            </div>
          </div>

          <div>
            <div className="mb-12">
              <InputBox
                as="input"
                type="text"
                title="Last Name"
                placeholder="Last Name"
              />
            </div>
            <div>
              <InputBox
                as="input"
                type="text"
                title="Telephone Number"
                placeholder="Telephone Number"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="pt-14 pb-16 border-b border-solid border-[#F0F0F0]">
        <Heading title="New Customer" />
        <div className="mt-10 grid grid-cols-2 gap-12">
          <div>
            <div className="mb-12">
              <InputBox
                as="input"
                type="text"
                title="Address1"
                placeholder="4279 Zboncak Port Suite 6212"
              />
            </div>
            <div className="mb-12">
              <InputBox
                as="input"
                type="text"
                title="City"
                placeholder="City"
              />
            </div>
            <div>
              <InputBox
                as="select"
                title="Division"
                value={selectedDivision}
                onChange={handleDivisionChange}
              >
                <option>Please Select</option>
                {divisions.map((division) => (
                  <option key={division} value={division}>
                    {division}
                  </option>
                ))}
              </InputBox>
            </div>
          </div>
          <div>
            <div className="mb-12">
              <InputBox
                as="input"
                type="text"
                title="Address2"
                placeholder="---"
              />
            </div>
            <div className="mb-12">
              <InputBox
                as="input"
                type="text"
                title="Post Code"
                placeholder="Post Code"
              />
            </div>
            <div>
              <InputBox
                as="select"
                title="District"
                value={selectedDistrict}
                onChange={handleDistrictChange}
              >
                <option>Please Select</option>
                {selectedDivision !== "" &&
                  districts[selectedDivision].map((district) => (
                    <option key={district} value={district}>
                      {district}
                    </option>
                  ))}
              </InputBox>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-14 pb-16  border-b border-solid border-[#F0F0F0]">
      <Heading title="Your Password" />
      <div className="mt-10 grid grid-cols-2 gap-12">
        <div className="relative">
          <InputBox
            as="input"
            type={showPassword1 ? "text" : "password"}
            title="Password"
            placeholder="Password"
            className="mb-0"
          />
          {showPassword1 ? (
            <IoEyeOff
              className="absolute right-3 top-11 cursor-pointer text-[#767676]"
              onClick={togglePasswordVisibility1}
            />
          ) : (
            <IoEye
              className="absolute right-3 top-11 cursor-pointer text-[#767676]"
              onClick={togglePasswordVisibility1}
            />
          )}
        </div>
        <div className="relative">
          <InputBox
            as="input"
            type={showPassword2 ? "text" : "password"}
            title="Repeat Password"
            placeholder="Repeat Password"
            className="mb-0"
          />
          {showPassword2 ? (
            <IoEyeOff
              className="absolute right-3 top-11 cursor-pointer text-[#767676]"
              onClick={togglePasswordVisibility2}
            />
          ) : (
            <IoEye
              className="absolute right-3 top-11 cursor-pointer text-[#767676]"
              onClick={togglePasswordVisibility2}
            />
          )}
        </div>
      </div>
    </div>
    <div className="pt-14 pb-16">
    <div className="flex items-center gap-x-4">
    <input
        type="checkbox"
        className="border-[#767676] rounded focus:ring-blue-500 h-4 w-4 text-blue-600 focus:outline-none"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label className="text-[#767676]">
        I have read and agree to the Privacy Policy
      </label>
    </div>
    <div className="mt-6 flex items-center gap-x-9">
      <label className="font-dm font-normal text-sm text-[#767676]">Subscribe Newsletter</label>
        <div className="flex items-center">
        <input
          type="checkbox"
          name="subscribe"
          className="mr-4 border-gray-300 rounded focus:ring-blue-500 h-4 w-4 text-blue-600 focus:outline-none"
          checked={subscribe}
          onChange={handleSubscribeChange}
        />
        <label className="font-dm font-normal text-sm text-[#767676]">
          Yes
        </label>
        </div>
         <div className="flex items-center">
         <input
          type="checkbox"
          name="subscribe"
          className="mr-4 border-gray-300 rounded focus:ring-blue-500 h-4 w-4 text-blue-600 focus:outline-none"
          checked={!subscribe}
          onChange={() =>setSubscribe(false)}
        />
        <label className="font-dm font-normal text-sm text-[#767676]">
          No
        </label>
         </div>
    </div>
    </div>
     <Button title="Log in"></Button>
    </div>
  );
};

export default SignUpFrom;

import React, { useRef, useState } from "react";
import Image from "./Image";
import cartimg from "../../assets/cartimg1.png";
import { RxCross2 } from "react-icons/rx";
import { FaMinus, FaPlus } from "react-icons/fa";
import Button from "./Button";
import Table from "./Table";

const CartFrom = () => {
  const inputRef = useRef();
  const sizes = ["XS", "S", "M", "L", "XL"];
  const headings = ["Subtotal", "Total"];
  const rows = [["389.99 $", "389.99 $"]];
  const [selectedSize, setSelectedSize] = useState("");

  const incrementQuantity = () => {
    let value = parseInt(inputRef.current.value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    inputRef.current.value = value;
  };

  const decrementQuantity = () => {
    let value = parseInt(inputRef.current.value, 10);
    if (value > 1) {
      value = isNaN(value) ? 0 : value;
      value--;
      inputRef.current.value = value;
    }
  };

  const handleSize = (event) => {
    setSelectedSize(event.target.value);
  };
  return (
    <div>
      <div className="border border-solid border-[#f0f0f0]">
        <div className="grid w-full grid-cols-4 bg-[#f3f3f3] px-5 py-8">
          <div>
            <h4 className="font-dm text-base font-bold text-primary">
              Product
            </h4>
          </div>
          <div>
            <h4 className="font-dm text-base font-bold text-primary">Price</h4>
          </div>
          <div>
            <h4 className="font-dm text-base font-bold text-primary">
              Quantity
            </h4>
          </div>
          <div>
            <h4 className="font-dm text-base font-bold text-primary">Total</h4>
          </div>
        </div>
        <div className="grid w-full  grid-cols-4 border-t border-solid border-[#f0f0f0] bg-[#fff] px-5">
          <div className="flex items-center gap-10">
            <RxCross2 />
            <div className="flex items-center gap-5">
              <Image src={cartimg} />
              <h4 className="font-dm text-base font-bold text-primary">
                Product name
              </h4>
            </div>
          </div>
          <div>
            <h4 className="py-[68px] font-dm text-base font-bold text-primary">
              $44.00
            </h4>
          </div>
          <div className="py-[62px]">
            <div className="flex w-[139px] items-center border border-solid border-[#F0F0F0] px-5 py-1">
              <span onClick={decrementQuantity}>
                <FaMinus className="text-[#767676]" />
              </span>
              <input
                ref={inputRef}
                type="text"
                value="1"
                className="w-16 text-center text-[#767676] outline-none"
              />
              <span onClick={incrementQuantity}>
                <FaPlus className="text-[#767676]" />
              </span>
            </div>
          </div>
          <div>
            <h4 className="py-[68px] font-dm text-base font-bold text-primary">
            $44.00
            </h4>
          </div>
        </div>
        <div className="flex w-full items-center justify-between  border-t border-solid border-[#f0f0f0] bg-[#fff] px-5">
          <div className="flex items-center gap-6">
            <select
              type="select"
              value={selectedSize}
              onChange={handleSize}
              className="w-[255px] border border-solid border-[#767676] px-5 py-3"
            >
              <option className="font-dm text-base font-normal uppercase text-[#767676]">
                SIZE
              </option>
              {sizes.map((size) => (
                <option
                  key={size}
                  value={size}
                  className="font-dm text-base font-normal text-[#767676] "
                >
                  {size}
                </option>
              ))}
            </select>
            <h4 className="font-dm text-sm font-bold text-primary">
              Apply coupon
            </h4>
          </div>
          <div>
            <h4 className="py-[68px] font-dm text-base font-bold text-primary">
              Update cart
            </h4>
          </div>
        </div>
      </div>
      <div className="mt-14 flex justify-end">
        <div>
          <h4 className="text-5 mb-6 flex justify-end font-dm font-bold text-primary">
            Cart totals
          </h4>
          <Table headings={headings} rows={rows} />
          <div className="mt-8 flex justify-end">
            <Button className="px-6 py-4" title="Proceed to Checkout" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartFrom;

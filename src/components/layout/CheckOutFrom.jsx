import React from "react";
import Heading from "./Heading";
import InputBox from "./InputBox";
import Button from "./Button";
import Table from "./Table";

const CheckOutFrom = () => {
  const headings = ["Product", "Product name x 1", "Subtotal", "Total"];
  const rows = [["Total", "389.99 $", "389.99 $", "389.99 $"]];
  return (
    <div className="pb-10">
      <Heading title="Billing Details" />
      <div className="mt-10 md:w-1/2">
        <div>
          <div className="mb-12">
            <InputBox
              as="input"
              type="text"
              title="First Name *"
              placeholder="First Name"
            />
          </div>
          <div className="mb-12">
            <InputBox
              as="input"
              type="text"
              title="Last Name *"
              placeholder="First Name"
            />
          </div>
          <div className="mb-12">
            <InputBox
              as="input"
              type="text"
              title="Companye Name (optional)"
              placeholder="Companye Name"
            />
          </div>
          <div className="mb-12">
            <InputBox
              as="input"
              type="text"
              title="Country *"
              placeholder="Please select"
            />
          </div>
          <div className="mb-12">
            <InputBox
              as="input"
              type="text"
              title="Street Address *"
              placeholder="House number and street name"
            />
          </div>
          <div className="mb-12">
            <InputBox
              as="input"
              type="text"
              title="Town/City *"
              placeholder="Town/City"
            />
          </div>
          <div className="mb-12">
            <InputBox
              as="input"
              type="text"
              title="County (optional)"
              placeholder="County"
            />
          </div>
          <div className="mb-12">
            <InputBox
              as="input"
              type="text"
              title="Post Code *"
              placeholder="Post Code"
            />
          </div>
          <div className="mb-12">
            <InputBox
              as="input"
              type="text"
              title="Phone *"
              placeholder="Phone"
            />
          </div>
          <div>
            <InputBox
              as="input"
              type="email"
              title="Email Address *"
              placeholder="Email Address"
            />
          </div>
        </div>
        <div className="mt-[129px]">
          <Heading title="Additional Information" />
          <InputBox
            as="textarea"
            type="text"
            title="Other Notes (optional)"
            placeholder="Notes about your order, e.g. special notes for delivery."
            className="pb-12 md:pb-20"
          />
        </div>
        <div className="mb-10 mt-[129px]">
          <Heading title="Your Order" />
          <Table headings={headings} rows={rows} />
        </div>
        <Button title="Proceed to Bank"  className="sm:!px-10"/>
      </div>
    </div>
  );
};

export default CheckOutFrom;

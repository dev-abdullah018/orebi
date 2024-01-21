import React from "react";
import Breadcrumb from "../components/layout/Breadcrumb";
import Container from "../components/layout/Container";
import SignUpFrom from "../components/layout/SignUpFrom";

const SignUp = () => {
  return ( 
    <div>
        <Container>
          <div className="border-b border-[#F0F0F0] pb-16">
            <Breadcrumb title="sign up" />
            <p className="text-[#6D6D60] font-normal w-[600px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy text
              ever since the.
            </p>
          </div>
          <SignUpFrom/>
        </Container>
    </div>
  );
};

export default SignUp;
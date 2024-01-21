import React from "react";
import Container from "../components/layout/Container";
import Breadcrumb from "../components/layout/Breadcrumb";
import InputBox from "../components/layout/InputBox";
import Button from "../components/layout/Button";
import Heading from "../components/layout/Heading";

const Contact = () => {
  return (
    <Container>
      <Breadcrumb />
      <div className="w-full sm:w-2/4">
        <Heading title="Fill up a Form" />
        <InputBox as="input" placeholder="Your name here" title="Name" />
        <InputBox as="input" placeholder="Your email here" title="Email" />
        <InputBox
          as="textArea"
          placeholder="Your message here"
          title="Message"
        />
       <Button className="mt-[30px]" title="Post" />
      </div>
      <div className="mt-36">
        <iframe
          title="Google Map"
          className="h-[572px] w-full"
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.228761510944!2d-122.08380168461992!3d37.42199977976364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808579980519900f%3A0xb1b8f8903623752a!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1644720003084!5m2!1sen!2sus"
        ></iframe>
      </div>
    </Container>
  );
};

export default Contact;

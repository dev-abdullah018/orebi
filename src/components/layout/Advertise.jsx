import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import Image from "./Image";
import Ad1 from "../../assets/ad1.png";
import Ad2 from "../../assets/ad2.png";
import { Link } from "react-router-dom";

const Advertise = () => {
  return (
    <>
      <div className="mt-5 md:mt-36">
        <Container>
          <Flex className="flex gap-x-2 sm:gap-x-4 md:gap-x-10">
            <div className="max-w-2/4">
              <Link to="#">
                <Image src={Ad1} />
              </Link>
            </div>
            <div className="max-w-2/4">
              <Link to="#">
                <Image src={Ad2} />
              </Link>
              <Link to="#" className="mt-2 sm:mt-4 md:mt-10 inline-block">
                <Image src={Ad2} />
              </Link>
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Advertise;

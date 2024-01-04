import React from "react";
import Image from "./Image";
import Middleadd from "../../assets/middleadd.png";
import Container from "./Container";
import { Link } from "react-router-dom";

const MiddleAdvertisment = () => {
  return (
    <div className="md:mt-32">
      <Container>
        <Link to="#">
          <Image src={Middleadd} />
        </Link>
      </Container>
    </div>
  );
};

export default MiddleAdvertisment;

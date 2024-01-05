import React from 'react';
import { FaLongArrowAltLeft } from "react-icons/fa";

const SamplePrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div
          className="!flex h-16 w-16 items-center justify-center rounded-full bg-[rgba(0,0,0,.20)] absolute top-[35%] left-0 z-50"
          onClick={onClick}
        >
          <FaLongArrowAltLeft className="text-2xl text-white" />
        </div>
      );
}

export default SamplePrevArrow;
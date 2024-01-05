import { FaLongArrowAltRight } from "react-icons/fa";

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="!flex h-16 w-16 items-center justify-center rounded-full bg-[rgba(0,0,0,.20)] absolute top-[35%]  right-[25px]"
        onClick={onClick}
      >
        <FaLongArrowAltRight className="text-2xl text-white" />
      </div>
    );
  }

  export default SampleNextArrow;
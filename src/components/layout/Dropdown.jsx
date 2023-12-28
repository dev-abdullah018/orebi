import PropTypes from "prop-types";

const Dropdown = ({ children, className, titleicon, titletext, onClick }) => {
  return (
    <>
      <div onClick={onClick} className={className}>
        <p className="flex gap-3 items-center"><span>{titleicon}</span> {titletext}</p>
        {children}
      </div>
    </>
  );
};

Dropdown.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
  titleicon: PropTypes.node.isRequired,
  titletext: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Dropdown;




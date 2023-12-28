import PropTypes from "prop-types";

const Dropdown = ({ children, className, titleicon, titletext, dropref }) => {
  return (
    <>
      <div ref={dropref} className={className}>
        <p className="flex items-center gap-3">
          <span>{titleicon}</span> {titletext}
        </p>
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
  dropref: PropTypes.object,
};

export default Dropdown;

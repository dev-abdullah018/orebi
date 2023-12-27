import PropTypes from 'prop-types';

export default function List({children,className}) {
  return (
    <>
      <ul className={className}>{children}</ul>
    </>
  )
}


List.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string.isRequired,
  };



import PropTypes from 'prop-types';

export default function List({children}) {
  return (
    <>
      <ul>{children}</ul>
    </>
  )
}


List.propTypes = {
    children: PropTypes.node.isRequired,
  };



import PropTypes from 'prop-types';

const Flex = ({ children }) => {
  return (
    <>
      <div className='flex'>{children}</div>
    </>
  );
};

Flex.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Flex;

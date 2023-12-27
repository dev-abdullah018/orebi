import PropTypes from 'prop-types';

const Image = ({ src, alt}) => {
  return <img src={src} alt={alt} />;
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default Image;



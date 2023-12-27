import PropTypes from 'prop-types';

const Container = ({children}) => {
  return <div className="max-w-container mx-auto p-2.5">{children}</div>
}

Container.propTypes = {
    children: PropTypes.node.isRequired
}
export default Container

import PropTypes from 'prop-types';

function ListItem({itemname,className}) {
  return <li className={className}>{itemname}</li>
}

ListItem.propTypes={
 itemname: PropTypes.node.isRequired,
 className: PropTypes.string.isRequired
}

export default ListItem;


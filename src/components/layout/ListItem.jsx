import PropTypes from 'prop-types';

function ListItem({itemname}) {
  return <li>{itemname}</li>
}

ListItem.propTypes={
 itemname: PropTypes.node.isRequired
}

export default ListItem;


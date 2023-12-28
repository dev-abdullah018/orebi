import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function ListItem({ itemname, className, href }) {
  return (
    <li className={className}>
      <Link to={href}>{itemname}</Link>
    </li>
  );
}

ListItem.propTypes = {
  itemname: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default ListItem;

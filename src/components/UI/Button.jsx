import { Link } from "react-router";
import PropTypes from "prop-types";

export default function Button({ children, className, route }) {
  return (
    <Link to={route}>
      <button
        className={`justify-center cursor-pointer h-[61px] rounded-[58.975px]  ${className}`}
      >
        {children}
      </button>
    </Link>
  );
}
Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  route: PropTypes.string.isRequired,
};

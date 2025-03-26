import PropTypes from "prop-types";

const Wrapper = ({ children }) => {
  return <div className="wrapper  p-4">{children}</div>;
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Wrapper;

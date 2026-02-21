import Footer from "./Footer";
import { Outlet } from "react-router";
import PropTypes from "prop-types";

export default function Layout({ children }) {
  return (
    <>
      {children}
      <Outlet />
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

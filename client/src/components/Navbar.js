import React from "react";
import { Link } from "react-router-dom";

// For Basic setup only please change
const NavBar = () => {
  return (
    // <Menu>
    <div style={styles.navbar}>
      <Link to="/">Home</Link>

      <span style={{ marginRight: "10px" }}></span>
      <Link to="/user/profile">USER</Link>
    </div>
    // {/* </Menu> */}
  );
};

const styles = {
  navbar: {
    background: "black",
    padding: "10px",
  },
};

export default NavBar;

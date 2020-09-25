import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../providers/UserProvider";

// For Basic setup only please change
const NavBar = () => {
  const auth = useContext(UserContext);
  return (
    // <Menu>
    <div style={styles.navbar}>
      <Link to="/">Home</Link>

      <span style={{ marginRight: "10px" }}></span>
      <Link to="/user/profile">{auth.name}</Link>
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

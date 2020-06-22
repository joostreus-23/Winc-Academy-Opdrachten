import React from "react";
import { Link } from "react-router-dom";
function NavBar() {
  const navstyle = {
    color: "white",
  };
  return (
    <nav className="nav">
      <ul className="nav-items">
        {/* <Link to="/" style={navstyle}> */}
        {/* <li>Home</li> */}
        {/* </Link> */}
        {/* <Link to="/KalenderOverzicht" style={navstyle}> */}
        <li>click op de tijd om afspraak te plannen </li>
        {/* </Link> */}
      </ul>
    </nav>
  );
}

export default NavBar;

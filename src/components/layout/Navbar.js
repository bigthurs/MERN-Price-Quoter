import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className='nav-wrapper' style={{ backgroundColor: "#009ba6" }}>
        <div className="col s1 left-align text-sm">
          <Link to='/' className='brand-logo'>
            <span className="material-icons md-48">pregnant_woman</span>
            Home
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

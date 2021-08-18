import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import Button from "components/Button"

const MainHeader = () => {
  return (
    <div className="nav-sections">
      <div>Logo here</div>
      <div className="d-flex flex-row justify-content-around px-5">
        <span className="nav-link__item">
          <Link to="/">Home</Link>
        </span>
        <span className="nav-link__item">
          <Link to="/about">About</Link>
        </span>
        <span className="nav-link__item">
          <Link to="/contact">Contact</Link>
        </span>
        <span className="nav-link__item">
          {/* <Link to="/contact">Contact</Link> */}
        </span>
        <span className="nav-link__item">
          <Link  to="/contact">Login</Link>
        </span>
        <span className="nav-link__item">
          <Button link >Create Account</Button>
          {/* <Link to="/contact">Create Account</Link> */}
        </span>
      </div>
    </div>
  );
};

export default MainHeader;

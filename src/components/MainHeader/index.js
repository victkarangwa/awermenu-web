import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import Button from "components/Button";
import Logo from "assets/images/logoIcon.png";

const MainHeader = () => {
  return (
    <div className="nav-sections">
      <div className="logo-section">
        <img src={Logo} className="logo" alt="logo" />
        <div className="logo-txt">
          <label className="logo-name-1">Awer</label>
          <label className="logo-name-2">Menu</label>
        </div>
      </div>
      <div className="d-flex flex-row justify-content-around">
        <span className="nav-link__item">
          <Link to="/">Home</Link>
        </span>

        <span className="nav-link__item">
          <Link to="/contact">Contact</Link>
        </span>

        <span className="nav-link__item">
          <Button link>Get Early Access</Button>
          {/* <Link to="/contact">Create Account</Link> */}
        </span>
      </div>
    </div>
  );
};

export default MainHeader;

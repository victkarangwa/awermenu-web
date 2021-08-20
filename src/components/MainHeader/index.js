import React from "react";
import "./style.scss";
import { TwitterOutlined } from '@ant-design/icons';
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
          <Button onClick={()=>window.location.replace("https://twitter.com/victkarangwa")} icon={<TwitterOutlined/>} link>Follow the journey</Button>
        </span>
      </div>
    </div>
  );
};

export default MainHeader;

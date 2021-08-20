import React from "react";
import { Button } from "antd";
import "./style.scss";

const Btn = ({
  curved,
  children,
  onClick,
  style,
  className,
  loading,
  htmlType,
  disabled,
  link,
  icon,
}) => {
  return (
    <Button
      className={`${curved && "curved"} ${
        link ? "btn-link" : "custom-btn"
      }  ${className}`}
      style={style}
      onClick={onClick}
      size="large"
      loading={loading}
      htmlType={htmlType}
      disabled={disabled}
      icon={icon}
    >
      {children}
    </Button>
  );
};

export default Btn;

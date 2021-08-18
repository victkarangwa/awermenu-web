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
    >
      {children}
    </Button>
  );
};

export default Btn;

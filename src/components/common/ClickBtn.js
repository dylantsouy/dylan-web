import React from "react";

const ClickBtn = (props) => {
  const returnHandler = () => {
    return;
  };
  return (
    <div
      onClick={!props.disabled ? props.onClick : returnHandler()}
      className={`${props.type} click-btn ${props.disabled ? "disabled" : ""}`}
      style={{
        width: props.width,
        height: props.height,
        fontSize: props.fontSize || "16px",
      }}
    >
      {props.text}
    </div>
  );
};

export default ClickBtn;

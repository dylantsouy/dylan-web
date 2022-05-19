import React from "react";

const ClickBtn = (props) => {
  const { type, disabled, text, onClick, width, height, fontSize } = props;
  const returnHandler = () => {
    return;
  };
  return (
    <div
      onClick={!disabled ? onClick : returnHandler()}
      className={`${type} click-btn ${disabled ? "disabled" : ""}`}
      style={{
        width: width,
        height: height,
        fontSize: fontSize || "16px",
      }}
    >
      {text}
    </div>
  );
};

export default ClickBtn;

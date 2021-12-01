import React from "react";

const Overlay = (props) => {
  return (
    <div
      onClick={props.clickHandler}
      className={props.color === "black" ? "overlay" : "overlayWithoutColor"}
    />
  );
};

export default Overlay;

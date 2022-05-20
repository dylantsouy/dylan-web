import React from "react";

const Overlay = (props) => {
  const { clickHandler, color } = props;
  return (
    <div
      onClick={clickHandler}
      className={color === "black" ? "overlay" : "overlayWithoutColor"}
    />
  );
};

export default Overlay;

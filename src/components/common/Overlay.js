import React from "react";
import PropTypes from 'prop-types'

const Overlay = (props) => {
  const { clickHandler, color } = props;
  return (
    <div
      onClick={clickHandler}
      className={color === "black" ? "overlay" : "overlayWithoutColor"}
    />
  );
};

Overlay.propTypes = {
  color: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
}
export default Overlay;

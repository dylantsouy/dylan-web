import React from "react";
import PropTypes from 'prop-types'

const ClickBtn = (props) => {
  const { type, disabled, text, onClick, width, height, fontSize } = props;
  const returnHandler = () => {
    return;
  };
  return (
    <div
      onClick={!disabled ? onClick : returnHandler()}
      className={`${type || 'primaryBtn'} click-btn ${disabled ? "disabled" : ""}`}
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

ClickBtn.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  type: PropTypes.string,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  fontSize: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
}
export default ClickBtn;

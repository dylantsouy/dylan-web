import React from "react";
import PropTypes from 'prop-types'

const Loading = (props) => {
  const { color } = props;
  return (
    <div className="loading-outer">
      <div className={`loading ${color}`} />
    </div>
  );
};

Loading.propTypes = {
  color: PropTypes.string,
}

export default Loading;

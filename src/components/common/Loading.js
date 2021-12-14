import React from "react";

const Loading = (props) => {
  const { color } = props;
  return (
    <div className="loading-outer">
      <div className={`loading ${color || ""}`}></div>
    </div>
  );
};

export default Loading;

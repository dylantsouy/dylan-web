import React from "react";

const Loading = (props) => {
  const { color } = props;
  return (
    <div className="loading-outer">
      <div class={`loading ${color || ""}`}></div>
    </div>
  );
};

export default Loading;

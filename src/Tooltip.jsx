import React, { useState } from "react";

const Tooltip = ({ position, children }) => {
  let toolTipPosition = {};
  switch (position) {
    case "top":
      toolTipPosition = {
        top: "-120%",
        left: "0%",
      };
      break;

    case "right":
      toolTipPosition = {
        top:"-50%",
        left: "100%",
      };
      break;

    case "bottom":
      toolTipPosition = {
        top: "100%",
        left:"0%"
      };
      break;

    default:
        //left
      toolTipPosition = {
        left: "-110px",
      };
  }

  const [style, setStyle] = useState({
    display: "none",
    background: "grey",
    boxShadow: "0 0 20px black",
    borderRadius: "5px",
    color: "black",
    position: "absolute",
    left: "-100%",
    width: "100px",
    padding: "5px",
    zIndex: 10,
    textAlign: "center"
  });

  const addDisplayAbsolute = () => {
    setStyle({ ...style, display: "inline-block" });
  };

  const addDisplayNone = () => {
    setStyle({ ...style, display: "none" });
  };

  return (
    <div
      onMouseEnter={() => addDisplayAbsolute()}
      onMouseLeave={() => addDisplayNone()}
      style={{ position: "relative", display: "inline-block" }}
    >
      <span style={{ ...style, ...toolTipPosition }}>
        Hello, this is the tooptip
      </span>
      {children}
    </div>
  );
};

export default Tooltip;

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
      toolTipPosition = {
        left: "-110px",
      };
  }

  const [display, setDisplay] = useState("none");

  const toolTipStyle = {
    display: display,
    background: "grey",
    boxShadow: "0 0 20px black",
    borderRadius: "5px",
    position: "absolute",
    width: "100px",
    padding: "5px",
    zIndex: 10,
    textAlign: "center",
    ...toolTipPosition
  }

  const addDisplayAbsolute = () => {
    setDisplay("inline-block");
  };

  const addDisplayNone = () => {
    setDisplay("none");
  };

  return (
    <div
      onMouseEnter={() => addDisplayAbsolute()}
      onMouseLeave={() => addDisplayNone()}
      style={{ position: "relative", display: "inline-block" }}
    >
      <span style={toolTipStyle}>
        Hello, this is the tooptip
      </span>
      {children}
    </div>
  );
};

export default Tooltip;

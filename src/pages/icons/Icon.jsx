import React from "react";
import ICONS from "./ICONS";
function Icon({
  name,
  style,
  iconsize,
  pathid,
  fillColor,
  degRotate = "0deg",
  scaleY = 1,
  ...props
}) {
  return (
    <svg
      viewBox={ICONS[name].VIEWBOX}
      fill={ICONS[name].FILL}
      xmlns={ICONS[name].XMLNS}
      style={
        style || {
          height: iconsize,
          width: iconsize,
          transform: `rotate(${degRotate}) scaleY(${scaleY})`,
          cursor: "pointer"
        }
      }
      {...props}
    >
      <path
        id={pathid}
        fillRule="evenodd"
        clipRule="evenodd"
        d={ICONS[name].D}
        fill={fillColor || "#000000"}
      />
    </svg>
  );
}

export default Icon;

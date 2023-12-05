// CustomCheckbox.js
import React from "react";
import classes from "./FlexContainer.module.scss";

const FlexContainer = ({
  size,
  columnGap,
  alignItemsCenter,
  justifyContentCenter,
  rowGap,
  ...props
}) => {
  const style = { ...props.style };
  style.columnGap = columnGap;
  style.rowGap = rowGap;

  return (
    <div
      className={`${classes["container"]} ${
        alignItemsCenter && classes["alignItemsCenter"]
      } ${justifyContentCenter && classes["justifyContentCenter"]}`}
      style={style}
    >
      {props.children}
    </div>
  );
};

export default FlexContainer;

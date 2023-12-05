import React from "react";
import classes from "./CustomButton.module.scss";

const CustomButton = ({
  size = "m",
  icon,
  text,
  type = "primary",
  onClick,
  expand = false,
  disableColor = false,
}) => {
  const sizeClass = icon ? `btn-${size}` : `btn-${size}-no-icon`;
  return (
    <div
      className={`${classes.btn} ${classes[sizeClass]} ${classes[`${type}`]}
      ${expand && classes[`expand`]} ${!icon && classes[`no-icon`]} ${disableColor && classes[`disableColor-${type}`]} `}
      onClick={onClick}
    >
      {icon && <div className={classes["icon-container"]}>{icon}</div>}
      <p className={classes["text"]}>{text}</p>
    </div>
  );
};

export default CustomButton;

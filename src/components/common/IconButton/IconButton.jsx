import React from "react";
import classes from "./IconButton.module.scss";
import Icon from "icons/Icon";
import classnames from "classnames";

const IconButton = ({ size = "m", name, hoverable, hovered, ...props }) => {
  return (
    <div
      className={classnames(
        classes[`button-icon`],
        classes[`button-icon--${size}`],
        hoverable && classes["button-icon-hovarable"],
        hovered && classes["button-icon-hovared"] 
      )}
      {...props}
    >
      <Icon name={name} pathid={props.id}/>
    </div>
  );
};

export default IconButton;

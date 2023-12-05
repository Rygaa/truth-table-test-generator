// CustomCheckbox.js
import React from "react";
import classes from "./CustomCheckbox.module.scss";
import Icon from "icons/Icon";

const CustomCheckbox = ({ checked, onChange, label, ...props }) => {
  return (
    <div onClick={onChange} className={classes["checkbox-container"]}>
      {checked && (
        <div className={classes["checked"]}>
          <Icon name="CHECK" width="15px" />{" "}
        </div>
      )}
      {!checked && (
        <div
          type="checkbox"
          checked={checked}
          {...props}
          className={classes["unchecked"]}
        ></div>
      )}
      <p className={classes["label"]}>{label}</p>
    </div>
  );
};

export default CustomCheckbox;

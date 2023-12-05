import React from "react";
import classes from "./CustomInput.module.scss";
import classesNames from "classnames";
const CustomInput = ({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  icon,
  position = "left",
  className,
  size = "small",
  disabled = false,
}) => {
  const inputClass = [classes.input, className].join(" ");

  return (
    <div className={classes.bigContainer}>
      {label && <label className={classes.label}>{label}</label>}
      <div className={classesNames(classes.inputContainer2, classes[size])}>
        {icon && position === "left" && icon}
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={inputClass}
          aria-labelledby={label}
          disabled={disabled}
        />
      </div>
    </div>
  );
};

export default CustomInput;

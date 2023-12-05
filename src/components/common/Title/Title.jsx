// CustomCheckbox.js
import React from "react";
import classes from "./Title.module.scss";

const Title = ({ text, size, ...props }) => {
  return <p className={`${classes["text"]} ${classes["size"]}`}>{text}</p>;
};

export default Title;

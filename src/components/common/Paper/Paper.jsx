import React from "react";
import styles from "./Paper.module.scss";
import classNames from "classnames";

const Paper = ({
  children,
  additionalStyles,
  margin = false,
  padding = true,
  animating = false,
  expandV = false,
  rename = false,
  overrideClassName = false,
  ...props
}) => {
  return (
    <div
      className={classNames(
        !overrideClassName && styles.paperB,
        margin && styles.margin,
        padding && styles.padding,
        animating && styles.animating,
        expandV && styles.expandV,
        rename && styles.paperBB,
        additionalStyles
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Paper;

import classes from "./Toasty.module.scss";
import React from "react";
import { ToastContainer } from "react-toastify";
import "assets/toasty-theme/scss/main.scss";
const TOAST_LIMIT = 2;

const Toasty = () => {
  return (
    <ToastContainer
      autoClose={2000}
      limit={TOAST_LIMIT}
      className={classes["className"]}
      bodyClassName={classes["bodyClassName"]}
      toastClassName={classes["toastClassName"]}
      progressClassName={classes["progressClassName"]}
    />
  );
};

export default Toasty;

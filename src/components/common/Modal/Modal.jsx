import classes from "./Modal.module.scss";
import React from "react";
import { motion } from "framer-motion";
import Icon from "icons/Icon";

const Modal = ({ closeModal, title, ...props }) => {
  return (
    <motion.div
      style={props.indexx ? { zIndex: props.indexx * 2000 } : { zIndex: 2000 }}
      className={classes["modal-big-container"]}
    >
      <motion.div
        style={{ height: props.height, width: props.width }}
        initial={{ y: "-200vh" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <header>
          <p>{title}</p>
          <div onClick={closeModal}>
            <Icon name="CANCEL" iconsize="20px" fillColor="rgba(255,0,28,1)" />
          </div>
        </header>
        {props.children}
      </motion.div>
      <motion.div
        className={classes["modal"]}
        onClick={closeModal}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      ></motion.div>
    </motion.div>
  );
};

export default Modal;

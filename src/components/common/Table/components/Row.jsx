import React, { useRef } from "react";
import styles from "../Table.module.scss";
import useIsVisible from "../useVisibility";

const Row = ({ iddd, index, ...props }) => {
  const ref = useRef();
  // const isVisible = useIsVisible(ref, iddd);

  // const [wasVisible, setWasVisible] = React.useState(false);

  // React.useEffect(() => {
  //   if (!isVisible) {
  //     props.setShown(index + 20, true)
  //   }
  // }, [isVisible]);

  return (
    <div
      style={{ height: "55px" }}
      ref={ref}
      id={`${iddd} - ${index}`}
      key={index}
      index={index}
      className={styles.row}
    >
      {/* <p>{wasVisible ? "Visible" : "Not visible"}</p> */}
      {/* {!isVisible && <div style={{ height: "100%", width: "100%" }}></div>} */}
      {/* {isVisible && props.children} */}
      {props.children}
    </div>
  );
};

export default React.memo(Row);
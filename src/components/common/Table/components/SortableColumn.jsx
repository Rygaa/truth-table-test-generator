import styles from "../Table.module.scss";
import { SortableContainer, SortableElement } from "react-sortable-hoc";

const SortableColumn = SortableElement(({ type, ...props }) => {
  function size() {
    switch (type) {
      case "type-a":
        return "calc(20rem - 1.5rem)";
      case "type-b":
        return "calc(5rem - 1.5rem)";
      case "type-c":
        return "calc(10rem - 1.5rem)";
      default:
        return "calc(20rem - 1.5rem)";
    }
  }

  function size2() {
    switch (type) {
      case "type-a":
        return "calc(20rem - 20px)";
      case "type-b":
        return "calc(5rem - 20px)";
      case "type-c":
        return "calc(10rem - 20px)";
      default:
        return "calc(20rem - 20px)";
    }
  }
  function border() {
    switch (type) {
      case "type-a":
        return "1px solid rgba(0, 0, 0, 10%)";
      case "type-b":
        return "";
      case "type-c":
        return "";
      default:
        return "1px solid rgba(0, 0, 0, 10%)";
    }
  }

  return (
    <div
      style={{
        maxWidth: size(),
        minWidth: size(),
        width: size(),
        borderRight: border(),
      }}
      className={styles.headerCell}
      {...props}
    >
      {props.children}
    </div>
  );
});

export default SortableColumn;

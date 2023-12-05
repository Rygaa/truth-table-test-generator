import styles from "../Table.module.scss";

const Cell = ({ index, type, sticky, ...props }) => {
  function size() {
    switch (type) {
      case "type-a":
        return "calc(20rem)";
      case "type-b":
        return "calc(5rem)";
      case "type-c":
        return "calc(10rem)";
      default:
        return "calc(20rem)";
    }
  }

  function size2() {
    switch (type) {
      case "type-a":
        return "calc(20rem";
      case "type-b":
        return "calc(5rem)";
      case "type-c":
        return "calc(10rem)";
      default:
        return "calc(20rem)";
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
      key={index}
      style={{
        maxWidth: size(),
        minWidth: size(),
        width: size2(),
        borderRight: border(),
      }}
      className={`${styles.cell} ${sticky && styles.stickyColumn} ${
        styles.xxx
      }`}
      {...props}
    >
      {props.children}
    </div>
  );
};
export default Cell;

import styles from "../Table.module.scss";

const Column = ({ ...props }) => (
  <div
    className={styles.headerCell}
    // key={index}
  >
    {props.children}
  </div>
);

export default Column;

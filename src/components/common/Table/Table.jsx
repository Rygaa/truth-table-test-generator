import React, { useRef } from "react";
import styles from "./Table.module.scss";
import { SortableContainer } from "react-sortable-hoc";
import { VList } from "virtua";

const SortableContainerDiv = SortableContainer(({ children }) => (
  <div
    className={styles["sortableColumnContainer"]}
    style={{ display: "flex" }}
    key="container"
  >
    {children}
  </div>
));

const Table = (props) => {
  const { rows, columns, onSortEnd, shouldCancelStart } = props;
  const refTable2 = useRef();
  const [iddd] = React.useState(Math.random());

  return (
    <div className={styles["table-big-container"]}>
      <div className={styles["title-container"]}>
        <p>{props.title || "Table"}
          </p>
      &nbsp;{props.disclamer}
      </div>
      <div ref={refTable2} id={iddd} className={styles.table2}>
        <SortableContainerDiv
          axis="x"
          onSortEnd={onSortEnd}
          shouldCancelStart={shouldCancelStart}
        >
          {columns.map((column, index) => column)}
        </SortableContainerDiv>
        <VList
          style={{ height: "100%", width: "100%" }}
          className={styles["vlist"]}
        >
          {rows.map((row, rowIndex) => row)}
        </VList>
      </div>
    </div>
  );
};

export default Table;

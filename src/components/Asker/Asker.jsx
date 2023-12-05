import React from "react";
import useAsker from "../../hooks/useAsker";
import classes from "./Asker.module.scss";
import CustomButton from "components/common/CustomButton/CustomButton";
import Modal from "components/common/Modal/Modal";
import TextTooltip from "components/common/TextTooltip/TextTooltip";

const Asker = ({ message, onConfirm, onCancel }) => {
  return (
    <Modal width="40%" title="Caution Message" modalClose={onCancel}>
      <main>
        <p textClassname={classes["text"]}>{message}</p>
      </main>
      <footer>
        <CustomButton
          size="l"
          expand
          text="Cancel"
          type="primary"
          onClick={onCancel}
        />
        <CustomButton
          expand
          size="l"
          text="Confirm"
          type="danger"
          onClick={onConfirm}
        />
      </footer>
    </Modal>
  );
};

// const Asker = () => {
//   const { prompt = "", isOpen = false, proceed, cancel } = useAsker();

//   return (
//     <div
//       style={isOpen ? { display: "flex" } : { display: "none" }}
//       className={classes["asker"]}
//       onClick={cancel}
//     >
//       <div>
//         <p>{prompt}</p>
//         <div style={{columnGap: "1rem"}}>
//           <CustomButton size="l" expand text="Cancel" type="primary" onClick={cancel} />
//           <CustomButton
//            expand
//             size="l"
//             text="Confirm"
//             type="danger"
//             onClick={proceed}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

export default Asker;

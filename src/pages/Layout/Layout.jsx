import classes from "./Layout.module.scss";
import "react-toastify/dist/ReactToastify.css";
import Toasty from "../Toasty/Toasty";
import React from "react";
import { useSelector } from "react-redux";
import whereIam from "utils/location";

const Layout = (props) => {
  const isConnected = useSelector((state) => state.user.isConnected);
  const verified = useSelector((state) => state.user.user?.verified);
  const dontShowVerificationEmailModalEverAgain = useSelector(
    (state) => state.user.user?.dontShowVerificationEmailModalEverAgain
  );
  const [displayVerifiedModal, setDisplayVerifiedModal] = React.useState();
  const [skipped, setSkipped] = React.useState(false);

  React.useEffect(() => {
    if (!skipped) {
      setDisplayVerifiedModal(!verified);
    }
  }, [verified]);

  React.useEffect(() => {
    if (skipped) {
      setDisplayVerifiedModal(false);
    }
  }, [skipped]);

  return (
    <section className={classes["layout-component"]}>
      <div className={isConnected ? classes["children-container"] : classes["children-container-connected"]}>
        {props.children}
      </div>
      <Toasty />
    </section>
  );
};

export default Layout;

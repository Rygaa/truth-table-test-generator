import CustomButton from "components/common/CustomButton/CustomButton";
import classes from "./Sidebar.module.scss";
import Icon from "../icons/Icon";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { userActions } from "store/user/user-slice";

const buttons = [
  {
    value: "/types",
    label: "Types",
    icon: <Icon name="PRESET" iconsize="17.5px" />,
  },
  {
    value: "/dashboard",
    label: "Dashboard",
    icon: <Icon name="PRESET" iconsize="17.5px" />,
  },
  {
    value: "/projects",
    label: "Projects",
    icon: <Icon name="PRESET" iconsize="17.5px" />,
  },
];

const Sidebar = () => {
  const [open, setOpen] = React.useState(true);
  const history = useHistory();
  const user = useSelector((store) => store.user.user);
  const dispatch = useDispatch();

  function disconnect() {
    dispatch(userActions.setLoading(true));

    localStorage.setItem("jwtoken", undefined);
    history.push("/login");
    window.location.reload();
  }

  const navbarClosed = (
    <aside
      onClick={() => setOpen(!open)}
      className={open ? classes["sidebar-component-open"] : classes["sidebar-component-closed"]}
    >
      <div onClick={() => setOpen(!open)}>
        <Icon name="ARROW_DOWN_SIGN_TO_NAVIGATE" degRotate="270deg" iconsize="17.5px" />
      </div>
    </aside>
  );

  const navbarOpened = (
    <aside className={open ? classes["sidebar-component-open"] : classes["sidebar-component-closed"]}>
      <div onClick={() => setOpen(!open)}>
        <Icon name="ARROW_DOWN_SIGN_TO_NAVIGATE" degRotate="90deg" iconsize="17.5px" />
      </div>
      <div>
        {buttons.map((el) => {
          if (el.value == "/filler" || el.value == "/admin-page") {
            if (user.email !== "rygaa@protonmail.com") {
              return;
            }
          }
          if (el.childs && history.location.pathname.includes(el.value)) {
            return (
              <div>
                <CustomButton
                  type="shadow"
                  disableColor={
                    history.location.pathname !== el.value &&
                    !history.location.pathname.includes(el.value + "/")
                  }
                  key={el.value}
                  onClick={() => {}}
                  text={el.label}
                  icon={el.icon}
                  expand
                />
                {el.childs.map((el) => {
                  return (
                    <p
                      className={
                        history.location.pathname.includes(el.value)
                          ? classes["suboption-active"]
                          : classes["suboption"]
                      }
                      key={el.value}
                      onClick={() => history.push(el.value)}
                    >
                      {el.label}
                    </p>
                  );
                })}
              </div>
            );
          } else if (el.childs) {
            return (
              <div>
                <CustomButton
                  type="shadow"
                  disableColor={
                    history.location.pathname !== el.value &&
                    !history.location.pathname.includes(el.value + "/")
                  }
                  key={el.value}
                  onClick={() => history.push(el.childs[0].value)}
                  text={el.label}
                  icon={el.icon}
                  expand
                />
              </div>
            );
          } else {
            return (
              <CustomButton
                type="shadow"
                disableColor={
                  history.location.pathname !== el.value &&
                  !history.location.pathname.includes(el.value + "/")
                }
                key={el.value}
                onClick={() => history.push(el.value)}
                text={el.label}
                icon={el.icon}
                expand
              />
            );
          }
        })}
      </div>
      <div>
        <CustomButton
          type="shadow"
          disableColor={true}
          onClick={() => {
            history.push("login");
            disconnect();
          }}
          text={"Logout"}
          icon={<Icon name="LOGOUT" iconsize="17.5px" />}
          expand
        />
      </div>
    </aside>
  );

  return open ? navbarOpened : navbarClosed;
};

export default Sidebar;

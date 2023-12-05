import React, { useState } from "react";
import Dashboard from "pages/Dashboard/Dashboard";
import Signup from "pages/Signup/Signup";
import Login from "pages/Login/Login";
import { Route, useLocation, Switch, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { autoLogin } from "store/user/user-actions";
import Layout from "pages/Layout/Layout";
import Sidebar from "pages/Sidebar/Sidebar";
import ThemeSelector from "components/ThemeSelector";
import Types from "pages/Types/Types";
import Projects from "pages/Projects/Projects";

function App() {
  const history = useHistory();
  const dispatch = useDispatch();
  const isConnected = useSelector((state) => state.user.isConnected);
  const location = useLocation();

  function isJwtokenExist() {
    const localJwtoken = localStorage.getItem("jwtoken");
    return (
      localJwtoken !== null &&
      localJwtoken !== undefined &&
      localJwtoken !== "undefined" &&
      localJwtoken !== "null"
    );
  }

  function rename() {
    if (isJwtokenExist()) {
      dispatch(autoLogin(history));
    }
  }

  React.useEffect(() => {
    rename();
  }, [dispatch, history]);

  return (
    <Layout>
      {isConnected && <Sidebar />}
      <ThemeSelector />
      <Switch location={location} key={location.key}>
        <Route path="/dashboard" exact={true}>
          <Dashboard />
        </Route>
        <Route path="/types" exact={true}>
          <Types />
        </Route>
        <Route path="/projects" exact={true}>
          <Projects />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;

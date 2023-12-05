import { axiosPost } from "utils/axiosPost";
import { userActions } from "./user-slice";
import { toast } from "react-toastify";
import axios from "axios";

const { REACT_APP_API_URL } = process.env;

export function signup(username, password) {
  return async (dispatch) => {
    console.log(`${REACT_APP_API_URL}/signup`);
    await axios
      .post(`${REACT_APP_API_URL}/signup`, {
        username,
        password,
      })
      .then((response) => {
        toast.success(response.data.message);
      })
      .catch((response) => {
        toast.error(response);
      });

    return true;
  };
}

export function login(username, password) {
  return async (dispatch) => {
    await axios
      .post(`${REACT_APP_API_URL}/login`, {
        username,
        password,
      })
      .then((response) => {
        toast.success(response.data.message);
        dispatch(userActions.setJwtoken(response.data.jwtoken));
        dispatch(userActions.setUser_id(response.data.userId));
        dispatch(userActions.setUser(response.data.user));
        // history.push("/dashboard");
        localStorage.setItem("jwtoken", response.data.jwtoken);
      })
      .catch((response) => {
        toast.error(response);
      });
    return;
    // toast(message);
  };
}

export function autoLogin(history) {
  return async (dispatch) => {
    dispatch(userActions.setIsConnected(null));

    const jwtoken = localStorage.getItem("jwtoken");
    await axios
      .post(`${REACT_APP_API_URL}/auto-login`, {
        jwtoken,
      })
      .then((response) => {
        toast.success(response.data.message);
        dispatch(userActions.setJwtoken(response.data.jwtoken));
        dispatch(userActions.setUser_id(response.data.userId));
        dispatch(userActions.setIsConnected(true));
        dispatch(userActions.setUser(response.data.user));
        dispatch(userActions.setTypes(response.data.user.types));
        dispatch(userActions.setProjects(response.data.user.projects));
        localStorage.setItem("jwtoken", response.data.jwtoken);
      })
      .catch((response) => {
        toast.error(response);
      });

    return true;
  };
}

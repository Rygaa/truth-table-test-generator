import axios from "axios";
import { toast } from "react-toastify";
import { userActions } from "store/user/user-slice";
const { REACT_APP_API_URL } = process.env;

export function create_project(jwtoken, newProject) {
  return async (dispatch) => {
    await axios
      .post(`${REACT_APP_API_URL}/create-project`, {
        jwtoken,
        newProject,
      })
      .then((response) => {
        toast.success(response.data.message);
        dispatch(userActions.setTypes(response.data.fetchedTypes));
      })
      .catch((response) => {
        toast.error(response);
      });
    return;
  };
}

export function delete_project(jwtoken, projectId) {
  return async (dispatch) => {
    await axios
      .post(`${REACT_APP_API_URL}/delete-project`, {
        jwtoken,
        projectId,
      })
      .then((response) => {
        toast.success(response.data.message);
        dispatch(userActions.setTypes(response.data.fetchedTypes));
      })
      .catch((response) => {
        toast.error(response);
      });
    return;
  };
}


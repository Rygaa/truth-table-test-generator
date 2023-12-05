import axios from "axios";
import { toast } from "react-toastify";
import { userActions } from "store/user/user-slice";
const { REACT_APP_API_URL } = process.env;

export function create_condition(jwtoken, projectId, conditionKey, conditionValue) {
  return async (dispatch) => {
    await axios
      .post(`${REACT_APP_API_URL}/create-condition`, {
        jwtoken,
        projectId,
        conditionKey,
        conditionValue,
      })
      .then((response) => {
        toast.success(response.data.message);
        dispatch(userActions.setProjects(response.data.fetchedProjects));
      })
      .catch((response) => {
        toast.error(response);
      });
    return;
  };
}

export function delete_condition(jwtoken, conditionId) {
  return async (dispatch) => {
    await axios
      .post(`${REACT_APP_API_URL}/delete-condition`, {
        jwtoken,
        conditionId
      })
      .then((response) => {
        toast.success(response.data.message);
        dispatch(userActions.setProjects(response.data.fetchedProjects));
      })
      .catch((response) => {
        toast.error(response);
      });
    return;
  };
}

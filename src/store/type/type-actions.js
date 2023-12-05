import axios from "axios";
import { toast } from "react-toastify";
import { userActions } from "store/user/user-slice";
const { REACT_APP_API_URL } = process.env;

export function create_type(jwtoken, newType) {
  return async (dispatch) => {
    await axios
      .post(`${REACT_APP_API_URL}/create-type`, {
        jwtoken,
        newType,
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

export function delete_type(jwtoken, typeId) {
  return async (dispatch) => {
    await axios
      .post(`${REACT_APP_API_URL}/delete-type`, {
        jwtoken,
        typeId,
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


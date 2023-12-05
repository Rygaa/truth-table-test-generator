import axios from "axios";
import { toast } from "react-toastify";

export async function axiosPost(link, data, doesNotThrow, config) {
  let response = {
    data: {
      status: null,
      message: null,
      data: null,
    },
  };

  response = await axios.post(link, data, { timeout: 50000 , ...config}).catch((e) => {
    response.data.status = "timeout";
    response.data.message = "Timeout response";
  });

  if (!doesNotThrow) {
    console.log(response)
    if (response.status === "Error" || response.status === "timeout") {
      toast.error(response.data.message);
    }
  }
  return response;
}

export async function axiosGet(link, doesNotThrow) {
  let response = {
    data: {
      status: null,
      message: null,
      data: null,
    },
  };
  response = await axios.get(link, { timeout: 2000 }).catch((e) => {
    response.data.status = "timeout";
    response.data.message = "Timeout response";
  });

  if (!doesNotThrow) {
    if (response.data.status === "Error" || response.data.status === "timeout") {
      toast(response.data.message);
    }
  }
  return response;
}

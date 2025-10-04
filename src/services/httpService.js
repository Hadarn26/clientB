import axios from "axios";

export const httpGet = (url, headers = {}) => {
  return axios.get(url, { headers })
    .then(res => res.data)
    .catch(error => {
      if (error.response) {
        return error.response.data;
      } else {
        console.error("Network error in GET:", error.message);
        throw error;
      }
    });
};

export const httpPost = (url, data, headers = {}) => {
  return axios.post(url, data, { headers })
    .then(res => res.data)
    .catch(error => {
      if (error.response) {
        return error.response.data;
      } else {
        console.error("Network error in POST:", error.message);
        throw error;
      }
    });
};
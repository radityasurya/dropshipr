import axios from "axios";

const API_URL = "http://localhost:5000/api/";

const get = () => {
  return axios.get(API_URL + "accounts");
};

export default get;

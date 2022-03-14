import axios from "axios";
export default axios.create({
  baseURL: "https://baee0c5d-15e7-45e2-ae1b-392ba74406a9.mock.pstmn.io",
  headers: {
    "Content-type": "application/json"
  }
});
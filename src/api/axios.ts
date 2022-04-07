import axios from "axios";

export default axios.create({
  baseURL: "https://artisant.io/api",
  headers: {
    "Content-type": "application/json"
  }
})
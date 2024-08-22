import axios from "axios";

const apiClient = axios.create({
  //baseURL: "https://my-json-server.typicode.com/Code-Pop/Touring-Vue-Router",
  baseURL: "http://localhost:3000",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getEntries() {
    return apiClient.get("/entries");
  },
  getEntry(id) {
    return apiClient.get("/entries/" + id);
  },
};

import axios from "axios";

const apiClient = axios.create({
  //baseURL: "http://localhost:3000",
  baseURL: "https://my-json-server.typicode.com/egordudyrev/EgorDudyrev.github.io",
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

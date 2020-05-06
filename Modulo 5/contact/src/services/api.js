import axios from "axios";

const api = axios.create({
  baseURL: "https://5e82ac6c78337f00160ae496.mockapi.io/api/v1",
});

export default api;
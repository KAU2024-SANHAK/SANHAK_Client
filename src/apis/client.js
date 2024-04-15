import axios from "axios";

export const authInstance = axios.create({
    baseURL: "",
    timeout: 1000,
    withCredentials: true,
    headers:{"X-Custom-Header": ""}
})
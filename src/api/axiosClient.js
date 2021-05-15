import axios from "axios";

export const axiosClient = axios.create({
    baseURL: "https://5f8a90f68453150016706008.mockapi.io/",
    headers: {
        "Content-Type": "application/json",
    },
});

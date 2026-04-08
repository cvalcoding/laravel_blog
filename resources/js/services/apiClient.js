import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://127.0.0.1:8000/api",
    timeout: 1000,
    headers: {
        "X-Requested-With": "XMLHttpRequest",
        "Content-Type": "application/json",
    },
});

apiClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token && !config.headers["Authorization"]) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

apiClient.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        if (error.response) {
            const status = error.response.status;
            switch (status) {
                case 401:
                    console.log("Unauthenticated user, redirect to login");
                    break;
                case 400:
                    console.log("Bad request, check server");
                    break;
                case 403:
                    console.log("Forbidden");
                    break;
                case 500:
                    console.log("Server error - try again");
                    break;
                default:
                    console.log("Error, check administrator");
                    break;
            }
        }
        return Promise.reject(error.response);
    },
);

export default apiClient;

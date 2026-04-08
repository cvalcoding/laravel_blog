import apiClient from "./apiClient";

async function fetchLogin(data) {
    try {
        const response = await apiClient.post("/login", data);
        return response;
    } catch (error) {
        console.error("Error login : ", error);
    }
}

async function fetchRegister(data) {
    try {
        const response = await apiClient.post("/register", data);
        return response;
    } catch (error) {
        console.error("Error register : ", error);
    }
}

export { fetchLogin, fetchRegister };

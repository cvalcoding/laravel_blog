import apiClient from "./apiClient";

async function fetchLogin(data) {
    try {
        const response = await apiClient.post("/login", data);
        return response;
    } catch (error) {
        console.error("Error login : ", error);
        throw error;
    }
}

export { fetchLogin };

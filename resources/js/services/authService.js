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

async function fetchProfile() {
    try {
        const response = await apiClient.get("/user");
        return response;
    } catch (error) {
        console.error("Error profile : ", error);
    }
}

async function fetchLogOut() {
    try {
        const response = await apiClient.post("/user/logout");
        return response;
    } catch (error) {
        console.error("Error logout : ", error);
    }
}

export { fetchLogin, fetchRegister, fetchProfile, fetchLogOut };

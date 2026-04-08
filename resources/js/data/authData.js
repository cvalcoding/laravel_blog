import { fetchLogin, fetchRegister } from "../services/authService";

async function loginData(data) {
    try {
        const response = await fetchLogin(data);
        return response?.data;
    } catch (error) {
        console.error("Error data login : ", error);
    }
}

async function registerData(data) {
    try {
        const response = await fetchRegister(data);
        return response?.data;
    } catch (error) {
        console.error("Error data register : ", data);
    }
}

export { loginData, registerData };

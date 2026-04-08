import { fetchLogin } from "../services/authService";

async function loginData(data) {
    try {
        const response = await fetchLogin(data);
        return response.data;
    } catch (error) {
        console.error("Error data login : ", error);
    }
}

export { loginData };

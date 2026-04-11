import {
    fetchLogin,
    fetchLogOut,
    fetchProfile,
    fetchRegister,
} from "../services/authService";

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
        console.error("Error data register : ", error);
    }
}

async function getProfileData() {
    try {
        const response = await fetchProfile();
        return response?.data;
    } catch (error) {
        console.error("Error data profile : ", error);
    }
}

async function postLogOutData() {
    try {
        const response = await fetchLogOut();
        return response?.data;
    } catch (error) {
        console.error("Error logout data : ", error);
    }
}

export { loginData, registerData, getProfileData, postLogOutData };

import axios from 'axios';

// for developement purpose
// const ServerUrl = "http://localhost:3000";
// for production
const ServerUrl = "https://kagazpatra-backend-wqjr.onrender.com"


const api = axios.create({ baseURL: ServerUrl });

// authentication
export const login = async (loginData) => {
    try {
        const response = await api.post('/login', loginData, { withCredentials: true });
        return (response.data);
    } catch (error) {
        console.log("Error occured while login!!!");
    }
};

export const register = async (registerData) => {
    try {
        const response = await api.post('/register', registerData, { withCredentials: true });
        return (response.data);
    } catch (error) {
        console.log("Error occured while signing in!!!");
    }
}

export const logout = async () => {
    try {
        const response = await api.get('/logout', { withCredentials: true });
        return (response.data);
    } catch (error) {
        console.log("Error occured while logging out");
    }
}

export const verifyUser = async () => {
    try {
        const response = await api.get('/verifyUser', { withCredentials: true });
        return (response.data);
    } catch (error) {
        console.log("Error occured while verifying user");
    }
}
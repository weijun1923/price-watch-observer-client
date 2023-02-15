import axios from "axios";
const API_URL = "https://price-watch-observer-server.onrender.com/api/user";

class AuthService {
    login(email,password) {
        return axios.post(API_URL + "/login" , {
            email,password
        });
    }
    register(username, email, password,) {
        return axios.post(API_URL + "/register", {
            username, email, password,
        });
    }
}

export default new AuthService();
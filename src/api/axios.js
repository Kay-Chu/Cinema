import axios from "axios";

export default axios.create({
    // baseURL: "https://demo.code.chu.ljc42.com/api/"
    baseURL: "http://localhost:3000/api"
});
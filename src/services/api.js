import axios from "axios";

const Api = axios.create(
    {
        baseURL : "https://kenziehub.herokuapp.com"
    })
export default Api
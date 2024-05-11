import axios from "axios";


//API https://viacep.com.br/ws/75960000/json/

const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"

})


export default api;
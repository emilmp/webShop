import Axios from 'axios'

const API = Axios.create({
    baseURL:'http://localhost:5000/',
    withCredentials:true,

})

export default API;
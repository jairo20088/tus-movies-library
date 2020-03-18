import axios from 'axios';

const axiosIntances = axios.create({
    baseURL:"https://api.themoviedb.org/3/"
})
export default axiosIntances;
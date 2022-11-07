import axios from 'axios'

const url = 'https://reqres.in'

const axiosInstance = axios.create({
    baseURL: url
})

axios.interceptors.request.use((req) => {
    return req
}, (err) => {
    return Promise.reject(err)
})

axios.interceptors.response.use((res) => {
    return res
}, (err) => {
    return Promise.reject(err)
})


export default axiosInstance
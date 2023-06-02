import axios from "axios";

const http=axios.create({
    baseURL:"http://localhost:5260",
    timeout:10000,
})

// 请求拦截器
http.interceptors.request.use(function(config){
    // 请求之前做什么
    return config
},function(err){
    // 错误
    return Promise.reject(err)
})

// 相应拦截器
http.interceptors.response.use(function(response){
    // 相应参数操作
    return response
},function(err){
    // 响应错误操作
    return Promise.reject(err)
})

export default http
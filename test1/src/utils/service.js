import axios from 'axios'

// 创建axios实例
const service=axios.create({
    baseURL:"http://localhost:8080/ordds",
    timeout:3000,
    headers:{
        "content-type":"application/json;charset=utf-8"
    }

})
// 请求拦截
service.interceptors.request.use((config)=>{
    return config

},
//响应拦截
service.interceptors.response.use((response)=>{
    return response.data

},error=>{

})

)

export const get=config=>{
    return service({
        ...config,
        method:"get",
        params:config.data
    })
}

export const  post= config=>{
    return service({
        ...config,
        method:"post",
        data:config.data
    })
}
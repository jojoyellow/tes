import{ get, post} from "./service"

// 查询订单列表
export const OrderApi=data=>{
    return get({
        url:"queryOrder",      
        data

        
    })

}

export const bacthAdd=data=>{
    return post({
        url:"add1",
        data
    })
}
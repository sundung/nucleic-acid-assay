
// 导入封装 get post 请求
import {get,post} from './api.js'
// 查询预约
function getCheckOrderByCode(params) {
    return get('/users/checkOrderByCode',params);
}

// 预约核酸检测
// http://127.0.0.1:3000/users/order

function getOrder(params){
    return post('/users/order',params);
}

// 预约成功返回的信息
function getOrderInfoById(params){
    return get('/users/getOrderInfoById',params)
}
export {
    getCheckOrderByCode,
    getOrder,
    getOrderInfoById
}
import request from '@/utils/request'
const baseURL = 'http://127.0.0.1:8082'

export function fetchList(){
    return request({
        url: `${baseURL}/wx/swiper/list`,
        method: 'get'
    })
}

export function fetchTrueUrl(params){
    return request({
        url: `${baseURL}/wx/swiper/trueList`,
        data: {
            ...params
        },
        method: 'post'
    })
}

export function del(params){
    return request({
        params,
        url: `${baseURL}/swiper/del`,
        method: 'get'
    })
}
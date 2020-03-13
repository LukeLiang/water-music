import request from '@/utils/request'
const baseURL = 'http://127.0.0.1:8082'

export function fetchBlogList(params){
    return request({
        url: `${baseURL}/wx/blog/list`,
        method: 'get',
        params: {
            params
        }
    })
}

export function del(params){
    return request({
        url: `${baseURL}/wx/blog/del`,
        data: {
            ...params
        },
        method: 'post'
    })
}
import request from '@/utils/request'
const baseURL = 'http://127.0.0.1:8082'

export function fetchList(params){
    return request({
        params,
        url: `${baseURL}/wx/playlist`,
        method: 'get',
        headers: {'Access-Control-Allow-Origin': '*'}
    })
}

export function fetchById(params){
    return request({
        params,
        url: `${baseURL}/wx/getById`,
        method: 'get'
    })
}

export function update(params){
    return request({
        url: `${baseURL}/wx/updatePlaylist`,
        data: {
            ...params
        },
        method: 'post'
    })
}

export function delDatabase(params){
    return request({
        params,
        url: `${baseURL}/wx/delDatabase`,
        method: 'get'
    })
}
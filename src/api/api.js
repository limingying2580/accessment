import http from '../utils/http.js'

export function login(params){
    return http.post('/api/admin/login',params)
}

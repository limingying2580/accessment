import request from "./request.js/axios"

export default {
    get(url,params){
        const config = {
            method: 'get',
            url: url,
        }
        if(params) config.params = params
        return request(config)
    },
    post(url,params){
        const config = {
            method: 'post',
            url: url,
            config: config,
        }
        if(params) config.data = params
        return request(config)
    },
    postFile(url,params){
        const config = {
            method: 'post',
            url: url,
        }
        if(params) config.data = params
        return request(config)
    },
    upPic(url,params){
        const config = {
            method: 'post',
            url: 'https://files.ondemandcn.net/pic/ups',
        }
        if(params) config.data = params
        return request(config)
    },
};

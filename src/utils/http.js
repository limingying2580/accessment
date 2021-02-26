// import request from "@/utils/request.js"
import axios from "@/utils/request.js";
let config={
    headers: {
        'Content-Type': 'application/json'
    }
}

const http = {
    get(url,params){
        const config = {
            method: 'get',
            url: url,
        }
        if(params) config.params = params
        return axios(config)
    },
    post(url,params){
        const config = {
            method: 'post',
            url: url,
            config: config,
        }
        if(params) config.data = params
        return axios(config)
    },
    postFile(url,params){
        const config = {
            method: 'post',
            url: url,
        }
        if(params) config.data = params
        return axios(config)
    },
    upPic(url,params){
        const config = {
            method: 'post',
            url: 'https://files.ondemandcn.net/pic/ups',
        }
        if(params) config.data = params
        return axios(config)
    },
    upVideo(url,params,onUploadProgress,cancel){
        const config = {
            method: 'post',
            url: 'https://files.ondemandcn.net/vod/ups',
            onUploadProgress,
            cancelToken: new axios.CancelToken(function executor(c) {
                cancel.cancel= c
            })
        }
        if(params) config.data = params
        return axios(config)
    },
}

export default http

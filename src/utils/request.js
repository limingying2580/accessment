import axios from "axios";
import { ElMessage} from 'element-plus';

axios.defaults.timeout = 3000; // 请求超时
axios.defaults.baseURL = "/api"; // 增加请求默认路径前缀

// 请求拦截
axios.interceptors.request.use(
    config => {
        // 1. 这个位置就请求前最后的配置
        // 2. 当然你也可以在这个位置 加入你的后端需要的用户授权信息
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// 响应拦截
axios.interceptors.response.use(
    response => {
        // 请求成功
        // 1. 根据自己项目需求定制自己的拦截
        // 2. 然后返回数据
        return response.data;
    },
    error => {
        // 请求失败
        if (error && error.response) {
            switch (error.response.status) {
                case 400:
                    // 对400错误您的处理
                    console.log("错误请求");
                    break;
                case 401:
                    error.message = '未授权，请重新登录'
                    break;
                case 403:
                    // 对 403 错误进行处理
                    console.log("拒绝访问");
                    break;
                case 404:
                    // 对 404 错误进行处理
                    console.log("请求错误,未找到该资源");
                    break;
                case 405:
                    error.message = '请求方法未允许'
                    break;
                case 408:
                    error.message = '请求超时'
                    break;
                case 500:
                    error.message = '服务器端出错'
                    break;
                case 501:
                    error.message = '网络未实现'
                    break;
                case 502:
                    error.message = '网络错误'
                    break;
                case 503:
                    error.message = '服务不可用'
                    break;
                case 504:
                    error.message = '网络超时'
                    break;
                case 505:
                    error.message = 'http版本不支持该请求'
                    break;
                default:
                    error.message = `连接错误${error.response.status}`
            }
        } else {
            console.log("连接到服务器失败");
        }
        ElMessage.error(error.message)
        /***** 处理结束 *****/
        //如果不需要错误处理，以上的处理过程都可省略
        return Promise.resolve(error.response)
    }
);

import Cookies from 'js-cookie'
const util = {
    cookies: {
    },
}
util.cookies.setCookie=function(name,value,setting) {
    const cookieSetting = {
        expires: 1
    }
    if(setting){
        Object.assign(cookieSetting, setting)
    }
    Cookies.set(name, value, cookieSetting)
},
    util.cookies.getCookie=function(name) {
        if(Cookies.get(name)!=undefined){
            return Cookies.get(name)
        }
    },
    util.cookies.getJsonCookie=function(name) {
        if(Cookies.getJSON(name)!=undefined){
            return Cookies.getJSON(name)
        }
    },
    util.cookies.deleteCookie=function(name) {
        return Cookies.remove(name)
    }
util.cookies.deleteCookie=function(name) {
    return Cookies.remove(name)
}
util.copyText=function(text) {
    let ua=navigator.userAgent
    if(/Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent)){
        var input = document.createElement('input');
        input.setAttribute('readonly', 'readonly');
        input.setAttribute('value', text);
        document.body.appendChild(input);
        input.setSelectionRange(0, 9999);
        if (document.execCommand('copy')) {
            document.execCommand('copy');
            message({
                message:'复制成功',
                type: 'success'
            })
        }
        document.body.removeChild(input);
    }else{
        var save = function (e) {
            e.clipboardData.setData('text/plain', text);
            e.preventDefault();//阻止默认行为
        }
        document.addEventListener("copy", save);
        document.execCommand("copy"); //使文档处于可编辑状态，否则无效
        message({
            message:'复制成功',
            type: 'success'
        })
    }
}
util.fileDownload=function (selector,name) {
    var image = new Image()
    // 解决跨域 Canvas 污染问题
    image.setAttribute('crossOrigin', 'anonymous')
    image.onload = function () {
        var canvas = document.createElement('canvas')
        canvas.width = image.width
        canvas.height = image.height

        var context = canvas.getContext('2d')
        context.drawImage(image, 0, 0, image.width, image.height)
        var url = canvas.toDataURL('image/png')

        // 生成一个a元素
        var a = document.createElement('a')
        // 创建一个单击事件
        var event = new MouseEvent('click')

        // 将a的download属性设置为我们想要下载的图片名称，若name不存在则使用‘下载图片名称’作为默认名称
        a.download = name || '小程序码'
        // 将生成的URL设置为a.href属性
        a.href = url

        // 触发a的单击事件
        a.dispatchEvent(event)
    }

    image.src = document.querySelector(selector).src
}
export default util

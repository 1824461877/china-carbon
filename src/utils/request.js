import axios from 'axios'
import {getToken} from '@/utils/auth'
import {h} from 'vue'
import {ElMessage} from 'element-plus'
import router from '@/router/index'

const router_url = ["/admin_s/admin_login_in", "/admin_s/admin_phone_verification_code", "/admin_s/admin_register"]

// create an axios instance
const service = axios.create({
    baseURL: "https://www.hniee.top/back_api",
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 3000 // request timeout
})

// request interceptor
service.interceptors.request.use(config => {
    // do something before request is sent
    let allow = false
    for (let i = 0; i < router_url.length; i++) {
        if (config.url === router_url[i]) {
            allow = true
        }
    }
    if (!allow) {
        let token = getToken()
        if (token !== "") {
            config.headers['Authorization'] = token
        }
    }
    return config
}, error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
})

// response interceptor
service.interceptors.response.use(/**
     * If you want to get http information such as headers or status
     * Please return  response => response
     */

    /**
     * Determine the request status by custom code
     * Here is just an example
     * You can also judge the status by HTTP Status Code
     */response => {
        const res = response.data
        // if the custom code is not 0, it is judged as an error.
        if (res.code !== 200) {
            // Token 过期操作
            if (res.code === 99997) {
                localStorage.removeItem("user")
                router.push({path: '/index'})
            }
            return res
        } else {
            return res
        }
    }, error => {
        // console.log('err' + error) // for debug
        // Message({
        //   message: error.errmsg,
        //   type: 'error',
        //   duration: 5 * 1000
        // })@
        return error
    })

export default service

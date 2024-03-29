import request from '@/utils/request'

export function sign_up(data) {
    return request({
        url: "api/admin_s/admin_register", method: 'post', data: data,
    })
}

export function sign_up_email(data) {
    return request({
        url: "api/admin_s/admin_register_email", method: 'post', data: data,
    })
}

export function sign_in(data) {
    return request({
        url: "api/admin_s/admin_login_in", method: 'post', data: data,
    })
}

export function verification_code(params) {
    return request({
        url: "api/admin_s/admin_phone_verification_code", method: 'get', params: params,
    })
}



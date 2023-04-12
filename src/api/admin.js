import request from "@/utils/request";


export function admin_info(params) {
    return request({
        url: "/admin/admin_info", method: 'get', params: params,
    })
}

export function admin_set(data) {
    return request({
        url: "/admin/admin_set", method: 'post', data: data,
    })
}

export function admin_update(data) {
    return request({
        url: "/admin/admin_update", method: 'post', data: data,
    })
}

export function admin_bind_email(data) {
    return request({
        url: "/admin/admin_bind_email", method: 'post', data: data,
    })
}

export function admin_phone_verification_code_confirmation(params) {
    return request({
        url: "/admin/admin_phone_verification_code_confirmation", method: 'get', params: params,
    })
}

export function admin_update_cell_phone(data) {
    return request({
        url: "/admin/admin_update_cell_phone", method: 'post', data: data,
    })
}

export function admin_update_password(data) {
    return request({
        url: "/admin/admin_update_password", method: 'post', data: data,
    })
}

export function admin_update_email(data) {
    return request({
        url: "/admin/admin_update_email", method: 'post', data: data,
    })
}

export function verification_email_code(params) {
    return request({
        url: "/admin_s/admin_email_verification_code", method: 'get', params: params,
    })
}
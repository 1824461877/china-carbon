import request from "@/utils/request";


export function admin_info(params) {
    return request({
        url: "/admin/admin_info",
        method: 'get',
        params: params,
    })
}

export function admin_set(data) {
    return request({
        url: "/admin/admin_set",
        method: 'post',
        data: data,
    })
}
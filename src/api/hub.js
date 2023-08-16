import request from "@/utils/request";

export function asset_list(params) {
    return request({
        url: "hub/exchange/asset_list", method: 'get', params: params,
    })
}

export function asset_personal_list(params) {
    return request({
        url: "hub/personal/asset_list", method: 'get', params: params,
    })
}

export function wallet_list(params) {
    return request({
        url: "hub/user_wallet/list", method: 'get', params: params,
    })
}

export function personal_sell(data) {
    return request({
        url: "hub/personal/sell", method: 'post', data: data,
    })
}

export function personal_retire(data) {
    return request({
        url: "hub/personal/retire", method: 'post', data: data,
    })
}

export function personal_get_retire() {
    return request({
        url: "hub/personal/get_retire", method: 'get',
    })
}

export function asset_transaction(data) {
    return request({
        url: "hub/exchange/asset_transaction", method: 'post', data: data,
    })
}
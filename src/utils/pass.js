export function passwordValid(pass) {
    let pwdRegex = new RegExp('(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^a-zA-Z0-9]).{8,30}');
    if (!pwdRegex.test(pass)) {
        return "您的密码复杂度太低（密码中必须包含大小写字母、数字、特殊字符），请及时修改密码！";
    }
    return "correct";
}

export function emailValid(email) {
    var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    return reg.test(email);
}
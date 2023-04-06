/* 密码要求有 数字、大写字母、小写字母 特殊字符 任选3种 的组合, 密码最小长度最少要求有8位，最大20位

* 新密码中不能够包含帐户。

* 密码中不能包含有连续四位及以上顺序(或逆序)数字(如：密码中不能包含1234或3210等)。

* 密码中不能包含有连续四位及以上顺序(或逆序)字母，字母不区分大小写(如：密码中不能包含abcd或ABCD或AbcD或DcbA等)。

* 密码中不能包含有连续四位及以上重复字符，字母不区分大小写(如：密码中不能包含8888、aaaa 或AAAA或BbbB或 $$$$等四位及以上的重复字符)。

* 禁忌词不区分大小写不能作为密码的一部分存在于密码中(如：admin, pass)。

*/
export function passwordValid(pass) {
    let passLower = pass.toLocaleLowerCase();
    let flag = " ";
    if (
        pass === null ||
        pass.length < 8 ||
        pass.length > 20 ||
        pass.length === ""
    ) {
        flag = "密码位数不对，长度最少8位，最大20位";
        return flag;
    }

    // 是数字
    let isDigit = /^.*[0-9]+.*/;
    // isLowerCase 小写字母
    let isLowerCase = /^.*[a-z]+.*/;
    // isUpperCase 大写字母
    let isUpperCase = /^.*[A-Z]+.*/;
    // 特殊字符
    let regEx = /^.*[^a-zA-Z0-9]+.*/;
    // 记录匹配的次数
    let num = 0;
    if (isDigit.test(pass)) {
        num = num + 1;
    }
    if (isLowerCase.test(pass)) {
        num = num + 1;
    }
    if (isUpperCase.test(pass)) {
        num = num + 1;
    }
    if (regEx.test(pass)) {
        num = num + 1;
    }
    if (num <= 2) {
        flag =
            "密码复杂度不足,\n(1)大写字母\n(2)小写字母\n(3)数字\n(4)特殊符号\n密码至少需包含上述情形中的三种";
        return flag;
    }

    //密码中不能包含有连续四位及以上顺序(或逆序)数字(如：密码中不能包含1234或3210等)。
    let numberSequence = false;
    for (let i = 0; i < pass.length - 3; i++) {
        if (
            !isDigit.test(pass.substring(i, i + 1)) ||
            !isDigit.test(pass.substring(i + 1, i + 2) + "") ||
            !isDigit.test(pass.substring(i + 2, i + 3) + "") ||
            !isDigit.test(pass.substring(i + 3, i + 4) + "")
        ) {
            continue;
        }
        let no1 = Number(pass.substring(i, i + 1));
        let no2 = Number(pass.substring(i + 1, i + 2));
        let no3 = Number(pass.substring(i + 2, i + 3));
        let no4 = Number(pass.substring(i + 3, i + 4));
        if (no1 + 1 === no2 && no2 + 1 === no3 && no3 + 1 === no4) {
            numberSequence = true;
        }
        if (no2 + 1 === no1 && no3 + 1 === no2 && no4 + 1 === no3) {
            numberSequence = true;
        }
    }

    if (numberSequence) {
        flag =
            "密码中不能包含有连续四位及以上顺序(或逆序)数字";
        return flag;
    }

    //密码中不能包含有连续四位及以上顺序(或逆序)字母，字母不区分大小写(如：密码中不能包含abcd或ABCD或AbcD或DcbA等)。
    let letterSequence = false;
    for (let i = 0; i < passLower.length - 3; i++) {
        if (
            !isLowerCase.test(passLower.substring(i, i + 1)) ||
            !isLowerCase.test(passLower.substring(i + 1, i + 2) + "") ||
            !isLowerCase.test(passLower.substring(i + 2, i + 3) + "") ||
            !isLowerCase.test(passLower.substring(i + 3, i + 4) + "")
        ) {
            continue;
        }
        let no1 = passLower.charAt(i).charCodeAt() + 0;
        let no2 = passLower.charAt(i + 1).charCodeAt() + 0;
        let no3 = passLower.charAt(i + 2).charCodeAt() + 0;
        let no4 = passLower.charAt(i + 3).charCodeAt() + 0;
        if (no1 + 1 === no2 && no2 + 1 === no3 && no3 + 1 === no4) {
            letterSequence = true;
        }
        if (no2 + 1 === no1 && no3 + 1 === no2 && no4 + 1 === no3) {
            letterSequence = true;
        }
    }

    if (letterSequence) {
        flag =
            "密码中不能包含有连续四位及以上顺序(或逆序)字母";
        return flag;
    }

    //密码中不能包含有连续四位及以上重复字符，字母不区分大小写(如：密码中不能包含8888、aaaa 或AAAA或BbbB或 $$$$等四位及以上的重复字符)。
    let fourOrMoreSame = false;
    for (let i = 0; i < pass.length - 3; i++) {
        if (
            passLower.charAt(i) === passLower.charAt(i + 1) &&
            passLower.charAt(i + 1) === passLower.charAt(i + 2) &&
            passLower.charAt(i + 2) === passLower.charAt(i + 3)
        ) {
            fourOrMoreSame = true;
        }
    }
    if (fourOrMoreSame) {
        flag =
            // "密码中不能包含有连续四位及以上重复字符，字母不区分大小写(如：密码中不能包含8888、aaaa 或AAAA或BbbB或 $$$$等四位及以上的重复字符";
            "密码中不能包含有连续四位及以上重复字符";
        return flag;
    }
    let cont = /^.*admin.*$/;
    let cont2 = /^.*pass.*$/;
    //禁忌词不区分大小写不能作为密码的一部分存在于密码中(如：admin, pass)。
    if (cont.test(passLower) || cont2.test(passLower)) {
        flag =
            "禁忌词不区分大小写不能作为密码的一部分存在于密码中(如：admin, pass)";
        return flag;
    }
    return "correct";
}

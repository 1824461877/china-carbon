<template>
    <headers></headers>
    <div class="user">
        <div class="user-body">
            <div class="user-left">
                <div class="user-left-tou">
                    <img src="@/assets/tou.jpg"/>
                    <h2 class="tou-name">{{ user.name }}</h2>
                    <p class="tou-des">{{ user.introduction }}</p>
                </div>
                <ul>
                    <li @click="show = 1">
                        设置用户信息
                    </li>
                    <li @click="show = 2">
                        个人资料
                    </li>
                </ul>
            </div>
            <div class="user-right">
                <div v-show="show === 1">
                    <h2>登录账号</h2>
                    <div class="user-box">
                        <p>绑定手机号</p>
                        <div class="user-do">
                            <input class="" disabled="disabled" :value="user.admin_info.cell_phone_number"/>
                            <div class="user-button" @click="win_show=1;next = false">更换号码</div>
                        </div>
                    </div>
                    <div class="user-box">
                        <p>登录密码</p>
                        <div class="user-do">
                            <input class="" disabled="disabled" :value="user.admin_info.password"/>
                            <div class="user-button" @click="win_show=2">修改密码</div>
                        </div>
                    </div>
                    <div class="user-box">
                        <p>绑定邮箱</p>
                        <div class="user-do">
                            <input class="" disabled="disabled" :value="user.email"/>
                            <div class="user-button" @click="win_show=3;next2 = false">
                                {{ user.email === '' ? '设置邮箱' : '修改邮箱' }}
                            </div>
                        </div>
                    </div>
                </div>
                <div v-show="show === 2">
                    <h2>用户个人信息</h2>
                    <div class="user-box">
                        <p>名字</p>
                        <div class="user-do">
                            <input class="" v-model="update_user_info.name"/>
                        </div>
                    </div>
                    <div class="user-box">
                        <p>描述</p>
                        <div class="user-do">
                            <textarea v-model="update_user_info.introduction"/>
                        </div>
                    </div>
                    <div class="user-button on" @click="admin_update_info()">点击设置</div>
                </div>
            </div>
        </div>
        <div class="show-windows" v-show="win_show !== 0">
            <div class="show-win-box" v-show="win_show === 1">
                <div class="show-win-out" @click="win_show=0">
                    <img src="@/assets/out.svg" />
                </div>
                <div class="" v-show="!next">
                    <h3>帐号安全验证</h3>
                    <h4>你正在进行敏感操作，继续操作前请验证您的身份</h4>
                    <div class="ts">
                        更换号码后，你将无法通过 「原手机号码+密码」 登录
                    </div>
                    <div class="user-box">
                        <p>短信验证 (接收手机号 {{ user.admin_info.cell_phone_number }})</p>
                        <div class="user-do">
                            <input class="" v-model="phone.old_verification_code" :disabled="disabled1"/>
                            <div class="user-button"
                                 @click="get_phone_verification_code(1,user.admin_info.cell_phone_number)">
                                {{ count === 0 ? '获取验证码' : count }}
                            </div>
                        </div>
                    </div>
                    <div class="user-button-item">
                        <div class="user-button next-no" @click="win_show=0">取消</div>
                        <div class="user-button next" @click="next_do(1)">点击下一步</div>
                    </div>
                </div>
                <div class="" v-show="next">
                    <h3>帐号安全验证</h3>
                    <h4>你正在进行敏感操作，继续操作前请验证您的身份</h4>
                    <div class="ts">
                        更换号码后，你将无法通过 「原手机号码+密码」 登录
                    </div>
                    <div class="user-box">
                        <p>新手机号</p>
                        <div class="user-do">
                            <input class="" @keyup="check_phone" v-model="this.phone.new_cell_phone_number"/>
                        </div>
                        <p v-show="!phone_mode" class="errs">** 您输入的手机号码格式错误</p>
                    </div>
                    <div class="user-box">
                        <p>短信验证</p>
                        <div class="user-do">
                            <input class="" v-model="this.phone.new_verification_code" :disabled="disabled2"/>
                            <div class="user-button"
                                 @click="get_phone_verification_code(2,this.phone.new_cell_phone_number)">
                                {{ count2 === 0 ? '获取验证码' : count2 }}
                            </div>
                        </div>
                    </div>
                    <div class="user-button-item">
                        <div class="user-button next-no" @click="win_show=0">取消</div>
                        <div class="user-button next" @click="phone_update()">确定更改</div>
                    </div>
                </div>
            </div>
            <div class="show-win-box" v-show="win_show === 2">
                <div class="show-win-out" @click="win_show=0">
                    <img src="@/assets/out.svg" />
                </div>
                <div class="" v-show="!next">
                    <h3>帐号安全验证</h3>
                    <h4>你正在进行敏感操作，继续操作前请验证您的身份</h4>
                    <div class="ts">
                        更换密码后，你将无法通过 「原密码」 进行登录
                    </div>
                    <div class="user-box">
                        <p>旧密码</p>
                        <div class="user-do">
                            <input class="" @keyup="check_pass(1,password.old_password)"
                                   v-model="password.old_password"/>
                        </div>
                        <p v-show="!password_mode.old" class="errs">** {{ password_mode.old_err }}</p>
                    </div>
                    <div class="user-box">
                        <p>新密码</p>
                        <div class="user-do">
                            <input class="" @keyup="check_pass(2,password.new_password)"
                                   v-model="password.new_password"/>
                        </div>
                        <p v-show="!password_mode.new" class="errs">** {{ password_mode.new_err }}</p>
                    </div>
                    <div class="user-button-item">
                        <div class="user-button next-no" @click="win_show=0">取消</div>
                        <div class="user-button next" @click="password_update()">点击修改</div>
                    </div>
                </div>
            </div>
            <div class="show-win-box" v-show="win_show===3">
                <div class="show-win-out" @click="win_show=0">
                    <img src="@/assets/out.svg" />
                </div>
                <div v-show="user.email === ''">
                    <div class="" v-show="!next">
                        <h3>帐号邮箱绑定</h3>
                        <h4>你正在进行邮箱绑定操作</h4>
                        <div class="user-box">
                            <p>邮箱绑定</p>
                            <div class="user-do">
                                <input class="" @keyup="check_email(2,email.new_email)"
                                       v-model="email.new_email"/>
                            </div>
                            <p v-show="!email_mode.new" class="errs">** 请输入正确的邮箱格式</p>
                            <p>根据邮箱获取验证码</p>
                            <div class="user-do">
                                <input class="" v-model="email.email_verification_code" :disabled="disabled_email2"/>
                                <div class="user-button"
                                     @click="get_email_verification_code(2,email.new_email)">
                                    {{ count_email2 === 0 ? '获取验证码' : count_email2 }}
                                </div>
                            </div>
                        </div>
                        <div class="user-button-item">
                            <div class="user-button next-no" @click="win_show=0">取消</div>
                            <div class="user-button next" @click="email_bind()">点击绑定</div>
                        </div>
                    </div>
                </div>
                <div v-show="user.email !== ''">
                    <div class="" v-show="!next2">
                        <h3>帐号更改邮箱绑定</h3>
                        <div class="ts">
                            更换邮箱后，你将无法通过 「原邮箱」 进行登录
                        </div>
                        <div class="user-box">
                            <p>短信验证 (接收手机号 {{ user.admin_info.cell_phone_number }})</p>
                            <div class="user-do">
                                <input class="" v-model="email.verification_code" :disabled="disabled_email1"/>
                                <div class="user-button"
                                     @click="get_phone_verification_code(1,user.admin_info.cell_phone_number)">
                                    {{ count === 0 ? '获取验证码' : count }}
                                </div>
                            </div>
                        </div>
                        <div class="user-button-item">
                            <div class="user-button next-no" @click="win_show=0">取消</div>
                            <div class="user-button next" @click="next_do(2)">点击下一步</div>
                        </div>
                    </div>
                    <div class="" v-show="next2">
                        <h3>帐号邮箱绑定</h3>
                        <h4>你正在进行邮箱绑定操作</h4>
                        <div class="user-box">
                            <p>邮箱绑定</p>
                            <div class="user-do">
                                <input class="" @keyup="check_email(2,email.new_email)"
                                       v-model="email.new_email"/>
                            </div>
                            <p v-show="!email_mode.new" class="errs">** 请输入正确的邮箱格式</p>
                            <p>根据邮箱获取验证码</p>
                            <div class="user-do">
                                <input class="" v-model="email.email_verification_code" :disabled="disabled_email2"/>
                                <div class="user-button"
                                     @click="get_email_verification_code(2,email.new_email)">
                                    {{ count_email2 === 0 ? '获取验证码' : count_email2 }}
                                </div>
                            </div>
                        </div>
                        <div class="user-button-item">
                            <div class="user-button next-no" @click="win_show=0">取消</div>
                            <div class="user-button next" @click="email_update()">点击绑定</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <bottoms></bottoms>
</template>

<script>
import header from "../components/header.vue"
import bottom from "../components/bottom.vue"
import {verification_code} from "@/api/sign.js"
import {
    admin_phone_verification_code_confirmation,
    admin_update_cell_phone,
    admin_update_password,
    verification_email_code,
    admin_bind_email,
    admin_update_email,
    admin_info,
    admin_update
} from '@/api/admin.js'
import {removeToken} from "@/utils/auth";
import {ElMessage} from "element-plus";
import {h} from "vue";
import {emailValid, passwordValid} from "@/utils/pass";

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "user",
    components: {
        headers: header,
        bottoms: bottom,
    },
    data() {
        return {
            show: 2,
            win_show: 0,
            update_user_info: {
                avatar: "",
                introduction: "",
                name: ""
            },
            user: {
                admin_info: {},
            },
            next: false,
            next2: false,
            disabled1: true,
            disabled2: true,
            disabled_email1: true,
            disabled_email2: true,
            count: 0,
            count2: 0,
            count_email: 0,
            count_email2: 0,
            time: 60,
            phone_mode: true,
            email_mode: {
                old: true,
                old_err: "",
                new: true,
                new_err: "",
            },
            password_mode: {
                old: true,
                old_err: "",
                new: true,
                new_err: "",
            },
            email: {
                verification_code: "",
                new_email: "",
                email_verification_code: ""
            },
            password: {
                old_password: "",
                new_password: ""
            },
            phone: {
                old_cell_phone_number: "",
                old_verification_code: "",
                new_cell_phone_number: "",
                new_verification_code: ""
            }
        }
    },
    created() {
        this.user_infos()
    },
    methods: {
        admin_update_info() {
            if (this.update_user_info.name === "" || this.update_user_info.introduction === "") {
                ElMessage({
                    message: h('p', null, [
                        h('a', {style: 'color: teal'}, '设置用户的信息不能为空！'),
                    ]),
                })
                return
            }
            const formData = Object.assign({}, this.update_user_info)
            admin_update(formData).then(response => {
                if (response.code === 200) {
                    ElMessage({
                        message: h('p', null, [
                            h('a', {style: 'color: teal'}, '设置用户信息成功！'),
                        ]),
                    })
                    this.win_show = 0
                    this.user_infos()
                }
            })
        },
        user_infos() {
            admin_info().then(response => {
                if (response.code === 200) {
                    localStorage.setItem("user", JSON.stringify(response.data))
                    this.user = response.data;
                }
            })
        },
        next_do(index) {
            let that = this
            let code = ""
            if (index === 1) {
                if (this.phone.old_verification_code === "" || this.phone.old_verification_code == null) {
                    return
                } else {
                    code = this.phone.old_verification_code
                }
            } else if (index === 2) {
                if (this.email.verification_code === "" || this.email.verification_code == null) {
                    return
                } else {
                    code = this.email.verification_code
                }
            }
            let query = {
                "verification_code": code,
            }
            admin_phone_verification_code_confirmation(query).then(response => {
                if (response.code === 200) {
                    if (index === 1) {
                        that.phone.old_cell_phone_number = that.user.admin_info.cell_phone_number
                        that.next = true
                    } else if (index === 2) {
                        that.email.phone_number = that.user.admin_info.cell_phone_number
                        that.next2 = true
                    }
                } else {
                    ElMessage({
                        message: h('p', null, [
                            h('a', {style: 'color: teal'}, '请输入正确的验证码！'),
                        ]),
                    })
                }
            })
        },
        email_update() {
            const formData = Object.assign({}, this.email)
            admin_update_email(formData).then(response => {
                if (response.code === 200) {
                    ElMessage({
                        message: h('p', null, [
                            h('a', {style: 'color: teal'}, '用户更新邮箱成功！'),
                        ]),
                    })
                    this.user_infos()
                    this.win_show = 0
                }
            })
        },
        email_bind() {
            if (this.email_mode.new && this.email.new_email !== "") {
                let data = {
                    "email": this.email.new_email,
                    "code": this.email.email_verification_code,
                }
                const formData = Object.assign({}, data)
                admin_bind_email(formData).then(response => {
                    if (response.code === 200) {
                        ElMessage({
                            message: h('p', null, [
                                h('a', {style: 'color: teal'}, '用户绑定邮箱成功！'),
                            ]),
                        })
                        this.user_infos()
                        this.win_show = 0
                    } else if(response.code === 400) {
                        ElMessage({
                            message: h('p', null, [
                                h('a', {style: 'color: teal'}, '请输入正确的验证码！'),
                            ]),
                        })
                    }
                })
            }
        },
        password_update() {
            if (this.password_mode.old &&
                this.password_mode.new) {
                const formData = Object.assign({}, this.password)
                admin_update_password(formData).then(response => {
                    if (response.code === 200) {
                        localStorage.removeItem("user")
                        removeToken()
                        ElMessage({
                            message: h('p', null, [
                                h('a', {style: 'color: teal'}, '修改密码成功，请重新登录'),
                            ]),
                        })
                        this.$router.push({path: '/index'})
                    } else if (response.code === 401) {
                        ElMessage({
                            message: h('p', null, [
                                h('a', {style: 'color: teal'}, '请输入正确的旧密码'),
                            ]),
                        })
                    }
                })
            }
        },
        phone_update() {
            if (this.phone_mode) {
                if (this.phone.new_cell_phone_number !== "" ||
                    this.phone.new_verification_code !== "" ||
                    this.phone.old_cell_phone_number !== "" ||
                    this.phone.old_verification_code !== "") {
                    let data = {
                        "new_cell_phone_number": this.phone.new_cell_phone_number.toString(),
                        "new_verification_code": this.phone.new_verification_code.toString(),
                        "old_cell_phone_number": this.phone.old_cell_phone_number.toString(),
                        "old_verification_code": this.phone.old_verification_code.toString()
                    }
                    const formData = Object.assign({}, data)
                    admin_update_cell_phone(formData).then(response => {
                        if (response.code === 200) {
                            ElMessage({
                                message: h('p', null, [
                                    h('a', {style: 'color: teal'}, '用户替换手机号成功,请重新登录！'),
                                ]),
                            })
                            localStorage.removeItem("user")
                            removeToken()
                            this.$router.push({path: '/index'})
                        } else if (response.code === 400) {
                            ElMessage({
                                message: h('p', null, [
                                    h('a', {style: 'color: teal'}, '请输入正确的验证码！'),
                                ]),
                            })
                        }
                    })
                }
            }
        },
        check_phone() {
            let reg = /^1[3|4|5|7|8][0-9]{9}$/;
            if (reg.test(this.phone.new_cell_phone_number)) {
                this.phone_mode = true
            } else {
                this.phone_mode = false
            }
        },
        check_email(index, email) {
            if (index === 1) {
                if (emailValid(email)) {
                    this.email_mode.old = true
                } else {
                    this.email_mode.old = false
                }
            } else if (index === 2) {
                if (emailValid(email)) {
                    this.email_mode.new = true
                } else {
                    this.email_mode.new = false
                }
            }
        },
        check_pass(index, password) {
            let pv = passwordValid(password)
            if (index === 1) {
                if (pv === "correct") {
                    this.password_mode.old = true
                } else {
                    this.password_mode.old = false
                }
                this.password_mode.old_err = pv
            } else if (index === 2) {
                if (pv === "correct") {
                    this.password_mode.new = true
                } else {
                    this.password_mode.new = false
                }
                this.password_mode.new_err = pv
                if (this.password.old_password === password) {
                    this.password_mode.new = false
                    this.password_mode.new_err = "旧密码和新密码不能一致"
                }
            }
        },
        get_phone_verification_code(index, num) {
            let that = this
            if (num != null && num !== "") {
                let query = {
                    "cell_phone": num,
                }
                verification_code(query).then(response => {
                    if (response.code === 200) {
                        that.verification(index)
                        if (index === 1) {
                            that.disabled1 = false
                            that.disabled_email1 = false
                        } else if (index === 2) {
                            that.disabled2 = false
                        }
                    }
                })
            }
        },
        get_email_verification_code(index, email) {
            let that = this
            if (email != null && email !== "") {
                let query = {
                    "email": email,
                }
                verification_email_code(query).then(response => {
                    if (response.code === 200) {
                        that.verification_email(index)
                        if (index === 1) {
                            that.disabled_email1 = false
                        } else if (index === 2) {
                            that.disabled_email2 = false
                        }
                    }
                })
            }
        },
        verification_email(index) {
            if (index === 1) {
                this.count_email = this.time * 3
                let times = setInterval(() => {
                    this.count_email--; //递减
                    if (this.count_email <= 0) {
                        // <=0 变成获取按钮
                        this.disabled_email1 = true;
                        clearInterval(times);
                    }
                }, 1000); //1000毫秒后执行
            } else if (index === 2) {
                this.count_email2 = this.time * 3
                let times = setInterval(() => {
                    this.count_email2--; //递减
                    if (this.count_email2 <= 0) {
                        // <=0 变成获取按钮
                        this.disabled_email2 = true;
                        clearInterval(times);
                    }
                }, 1000); //1000毫秒后执行
            }
        },
        verification(index) {
            if (index === 1) {
                this.count = this.time
                let times = setInterval(() => {
                    this.count--; //递减
                    if (this.count <= 0) {
                        // <=0 变成获取按钮
                        this.disabled1 = true;
                        clearInterval(times);
                    }
                }, 1000); //1000毫秒后执行
            } else if (index === 2) {
                this.count2 = this.time
                let times = setInterval(() => {
                    this.count2--; //递减
                    if (this.count2 <= 0) {
                        // <=0 变成获取按钮
                        this.disabled2 = true;
                        clearInterval(times);
                    }
                }, 1000); //1000毫秒后执行
            }

        },
    }
}
</script>

<style scoped>
.user {
    padding: 150px 8% 50px 8%;
    min-height: 580px;
}

.user .errs {
    font-size: 12px;
    color: #d14b4b;
}

@media screen and (max-width: 700px) {
    .user-body {
        flex-direction: column;
    }

    .user-box input {
        width: auto !important;
    }

    .user-left {
        padding-top: 40px !important;
        border-right: 0 !important;
    }

    .user-right {
        padding: 20px 6% 20px 3% !important;
    }

    .show-win-box {
        width: 100%;
        min-width: auto !important;
    }

    .user-right h2 {
        text-align: center;
        margin-left: -6%;
    }

    .user-left ul {
        display: flex;
        margin: 0;
        padding: 0;
    }

    .user {
        padding: 70px 0 50px 0;
    }

    .user-left ul li {
        margin: 0 20px;
    }
}

.user-body {
    max-width: 800px;
    display: flex;
    margin: 0 auto;
    background: white;
    padding: 5%;

}

.show-win-out {
    background: #25403b36;
    float: right;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding: 5px;
    margin-top: 8px;
}

.show-win-out img {
    width: 20px;
}

.ts {
    background: #25403b14;
    padding: 20px;
    color: #ab5e11;
}

.user-left-tou {
    text-align: center;
}

.user-left {
    padding: 0 10% 0 5%;
    border-right: 3px #eaeaea dashed;
}

.user-button-item {
    display: flex;
    margin: 30px 0 10px 0;
    justify-content: end;
}

.user-button-item div {
    margin-left: 20px;
}

.next {
    height: 40px;
    width: 70px;
    font-size: 13px;
}

.next-no {
    height: 40px;
    width: 70px;
    font-size: 13px;
    background: #25403b2e !important;
    color: #25403b !important;
}

.show-windows {
    position: fixed;
    height: 100%;
    top: 0;
    right: 0;
    width: 100%;
    background: #2a433f47;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
}

.show-win-box {
    padding: 20px 40px;
    background: white;
    min-width: 430px;
}

.show-win-box h3 {
    margin: 10px 0 15px 0;
    padding-bottom: 20px;
    border-bottom: 3px solid #25403b1a;
}

.user-left-tou img {
    border: 5px solid #55756e;
    padding: 5px;
    width: 150px;
    border-radius: 30px;
}

.tou-name {
    color: #2f2f2f;
}

.tou-des {
    color: #5d5d5d;
}

.user-right {
    width: 100%;
    padding: 20px 0 20px 6%;
}

.user-left ul {
    list-style: none;
}

.user-left ul li {
    cursor: pointer;
    width: 110px;
    border-bottom: 3px solid #365952;
    padding: 20px 0 10px 0;
    text-align: center;
}

.user-box {
    margin-top: 30px;
    font-weight: 600;
    font-size: 15px;
    color: #25403bde;
}

.user-box input {
    padding: 10px;
    font-size: 15px;
    width: 70%;
    border: none;
    background: #36595221;
    border-bottom: 3px solid #21403b;
}

.user-box input:focus-visible {
    outline: none;
}

.user-button {
    background: #25403b;
    padding: 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: 400;
    cursor: pointer;
    font-size: 13px;
    min-width: 80px;
}

.user-do {
    display: flex;
}

.user-do textarea {
    height: 110px;
    width: 70%;
    border: 3px solid #21403b;
    padding: 5px;
    background: #36595221;
    font-size: 14px;
}

.on {
    height: 40px;
    width: 100px;
    margin-top: 40px;
}
</style>
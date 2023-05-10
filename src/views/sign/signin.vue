<template>
    <div class="sign-in">
        <div class="sign-in-box">
            <div class="sign-logo">
                <img class="logo" @click="index()" src="@/assets/logo-black.png"/>
                <div class="sign-in-tit">登录</div>
            </div>
            <div class="sign-in-box-body">
                <div class="sign-in-box-left">
                    <img src="@/assets/undraw_drag_re_shc0.svg"/>
                    <div class="sign-in-box-tit">- SIGN IN -</div>
                </div>
                <div class="sign-in-box-right">
                    <div class="sign-yzm" v-if="show">
                        <ul class="sign-in-option">
                            <li :class="num===1?'':'sign-show'" @click="num=1;user.em_username=''">登录验证码验证</li>
                        </ul>
                        <div class="adj-info">
                            <p>一条包含验证码的信息已发送至你的 手机 {{ phone }}</p>
                            <p>请核对识别码后输入验证码以继续</p>
                        </div>
                        <div class="row-center captcha_input_wrapper">
                            <input
                                    v-for="(item,index) in captchas"
                                    :key="index"
                                    v-model="item.num"
                                    :id="'captcha'+index"
                                    @input="inputFinash(index)"
                                    @focus="adjust(index)"
                                    @keydown="inputDirection(index)"
                                    class="captcha_input_box row-center"
                                    :class="perr?'captcha_input_box_err':''"
                                    type="tel"
                                    maxlength="1"
                            />
                        </div>
                        <div class="mode">
                            <p class="f-password" @click="sign_in_path()">点击返回登录页面</p>
                            <p class="f-sign-up" @click="get_verification_code(this.phone)">没有收到验证码？请点击</p>
                        </div>
                    </div>
                    <div class="sign-in-box-right-bg" v-if="!show">
                        <ul class="sign-in-option">
                            <li :class="num===1?'':'sign-show'" @click="num=1;user.username=''">手机号登录</li>
                            <li :class="num===2?'':'sign-show'" @click="num=2;user.username=''">邮箱登录</li>
                        </ul>
                        <div class="sign-in-user" v-show="num===1">
                            <p>手机号 | Cell-phone number</p>
                            <MazPhoneNumberInput
                                :class="user_show.phone?'':'err'"
                                v-model="user.username"
                                :preferred-countries="['FR', 'BE', 'DE', 'US', 'GB']"
                                :noExample=true
                                :translations= "{
                                    countrySelector: {
                                        placeholder: '',
                                        error: 'Choose country',
                                    }
                                  }"
                            />
<!--                            <input name="cell-phone" :class="user_show.phone?'':'err'" v-model="user.username"-->
<!--                                   @keyup="check_phone"-->
<!--                                   placeholder="请输入手机号" type="text"/>-->
                        </div>
                        <div class="sign-in-user" v-show="num===2">
                            <p>邮箱 | Email</p>
                            <input name="cell-phone" :class="user_show.email?'':'err'" v-model="user.em_username"
                                   @keyup="check_email"
                                   placeholder="请输入邮箱" type="text"/>
                            <p v-show="!user_show.email" class="errs">** 您输入的邮箱格式错误</p>
                        </div>
                        <div class="sign-in-user">
                            <p>密码 | Password</p>
                            <el-input type="password" show-password :class="user_show.password?'':'err'"
                                      v-model="user.password" placeholder="请输入你账号密码"
                                      @keyup="check_pass"/>
                            <p v-show="!user_show.password" class="errs">** {{ user_show.err_info }}</p>
                        </div>
                        <div class="button-submit" @click="sign_in(0)">
                            登录
                        </div>
                        <div class="mode">
                            <p class="f-password" @click="password_new()">忘记密码</p>
                            <p class="f-sign-up" @click="sign_up()">用户注册</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MazPhoneNumberInput from 'maz-ui/components/MazPhoneNumberInput'
import {sign_in, verification_code} from "@/api/sign";
import {setToken} from '@/utils/auth'
import {passwordValid, emailValid} from "@/utils/pass";
import {ElMessage} from "element-plus";
import {h} from "vue";

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "sign-in",
    components: {
        MazPhoneNumberInput:MazPhoneNumberInput,
    },
    data() {
        return {
            value:"",
            show: false,
            num: 1,
            user: {
                username: "",
                em_username: "",
                password: "",
            },
            phone: "",
            user_show: {
                phone: true,
                email: true,
                password: true,
            },
            verification_code:"",
            captchas: [
                {num: ""},
                {num: ""},
                {num: ""},
                {num: ""},
                {num: ""},
                {num: ""},
            ],
        }
    },
    methods: {
        index() {
            this.$router.push({path: '/index'})
        },
        sign_up() {
            this.$router.push({path: '/sign_up'})
        },
        sign_in_path() {
            this.$router.push({path: '/sign_in'})
        },
        password_new() {
            this.$router.push({path: '/password/new'})
        },
        check_email() {
            if (emailValid(this.user.em_username)) {
                this.user_show.email = true
            } else {
                this.user_show.email = false
            }
        },
        check_pass() {
            let pv = passwordValid(this.user.password)
            if (pv === "correct") {
                this.user_show.password = true
            } else {
                this.user_show.password = false
            }
            this.user_show.err_info = pv
        },
        sign_in(index) {
            let data;
            let username;
            if (this.num === 1) {
                username = this.user.username
            } else if(this.num === 2) {
                username = this.user.em_username
            } else {
                return
            }

            if (index === 0) {
                data = {
                    username: username,
                    password: this.user.password,
                }
            } else if (index === 1) {
                data = {
                    username: username,
                    password: this.user.password,
                    verification_code: this.verification_code,
                }
            }

            const formData = Object.assign({}, data)
            sign_in(formData).then(response => {
                if (response.code === 200) {
                    localStorage.removeItem("user")
                    setToken(response.data.token)
                    ElMessage({
                        message: h('p', null, [
                            h('a', {style: 'color: teal'}, '登录成功，欢迎您的到来'),
                        ]),
                    })
                    this.$router.push({path: '/index'})
                } else if (response.code === 9993) {
                    let result = response.errmsg
                    this.phone = result
                    this.get_verification_code(result)
                    this.show = true
                } else {
                    if (index===1) {
                        ElMessage({
                            message: h('p', null, [
                                h('a', {style: 'color: teal'}, '请输入正确的验证码！'),
                            ]),
                        })
                    } else {
                        ElMessage({
                            message: h('p', null, [
                                h('a', {style: 'color: teal'}, '请输入正确的账号密码！'),
                            ]),
                        })
                    }

                }
            })
        },
        get_verification_code(phone) {
            if (phone !== "") {
                let query = {
                    "cell_phone": phone,
                }
                verification_code(query).then(response => {
                    if (response.code === 200) {
                        ElMessage({
                            message: h('p', null, [
                                h('a', {style: 'color: teal'}, '发送验证码成功！'),
                            ]),
                        })
                    } else {
                        ElMessage({
                            message: h('p', null, [
                                h('a', {style: 'color: teal'}, '您频繁获取验证码，请您稍后再获取验证码！'),
                            ]),
                        })
                    }
                })
            }
        },
        adjust(index) {
            let dom = document.getElementById("captcha" + this.activeInput);
            if (index !== this.activeInput && dom) {
                dom.focus();
            }
        },
        inputDirection(index) {
            let val = this.captchas[index].num;
            // 回退键处理
            if (event.keyCode === 8 && val === "") {
                // 重新校准
                let dom = document.getElementById("captcha" + (index - 1));
                this.activeInput = index - 1;
                if (dom) dom.focus();
            }
            if (event.keyCode !== 8 && val !== "") {
                let dom = document.getElementById("captcha" + (index + 1));
                this.activeInput = index + 1;
                if (dom) dom.focus();
            }
        },
        // 输入框相互联动
        inputFinash(index) {
            this.perr = false
            let val = this.captchas[index].num;
            this.activeInput = val ? index + 1 : index - 1;
            let dom = document.getElementById("captcha" + this.activeInput);
            if (dom) dom.focus();
            if (index === this.captchas.length - 1) {
                let code = this.captchas.map((x) => x.num).join("");
                if (code.length === 6) {
                    this.verification_code = code
                    this.sign_in(1)
                }
            }
        }
    }
}
</script>

<style scoped>
.sign-in {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.sign-show {
    color: #2846417d;
}

.sign-in-box-body {
    height: 490px;
    width: 780px;
    display: flex;
    flex-wrap: wrap;
}

.sign-in-box-left {
    width: 50%;
    height: 100%;
    text-align: center;
}

.adj-info {
    padding: 20px 40px 10px 50px;
    font-size: 14px;
}

@media screen and (max-width: 750px) {
    .sign-in-box-left {
        width: 100% !important;
        text-align: center;
        padding: 5% 0;
    }

    .sign-in-box-right {
        width: 100% !important;
    }

    .sign-in-box-right-bg {
        min-height: auto !important;
    }

    .sign-logo {
        position: fixed;
        top: 0 !important;
        cursor: pointer;
        width: 100% !important;
        background: #ffffffde !important;
    }

    .sign-in-box {
        box-shadow: none !important;
    }

    .sign-in-box-left img {
        margin: 230px auto 10px auto !important;
    }

    .sign-in-option {
        justify-content: center;
    }

    .sign-in-box {
        width: 100% !important;
        min-width: auto !important;
    }

    .sign-in-box-body {
        height: auto !important;
        width: auto !important;
        min-width: auto !important;
    }
}


.sign-in-box-right {
    background: #f7f7f7;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.mode {
    display: flex;
    justify-content: space-around;
}

.sign-in-tit {
    padding-left: 20px;
    border-left: 2px solid #284641;
    color: #284641;
    display: flex;
    align-items: center;
    font-weight: 600;
}

.sign-in-box-left img {
    width: 70%;
    max-width: 300px;
    margin: 150px auto 0 auto;
}

.f-password, .f-sign-up {
    font-size: 14px;
    text-align: right;
    cursor: pointer;
}

.sign-in-box-tit {
    width: 100%;
    font-size: 25px;
    text-align: center;
    color: #284641;
    margin-top: 45px;
    margin-bottom: 55px;
    font-weight: 600;
}

.logo {
    height: 40px;
    cursor: pointer !important;
}

.sign-logo {
    position: absolute;
    margin-top: 15px;
    display: flex;
    margin-left: 15px;
}

.sign-in-box {
    background: white;
    box-shadow: 1px 1px 10px 1px #e3e3e3;
    min-width: 600px;
}

.sign-in-option {
    list-style: none;
    padding: 0;
    color: #284641;
    cursor: pointer;
    display: flex;
    font-size: 19px;
    margin: 20px 0 0 50px;
}

.button-submit {
    background: #284641;
    padding: 13px;
    text-align: center;
    cursor: pointer;
    margin: 35px auto 0 auto;
    color: white;
    width: 65%;
}

.sign-in-option li {
    margin-right: 30px;
}

.sign-in-box-right-bg {
    width: 100%;
    background: #f7f7f7;
}

.sign-yzm {
    width: 100%;
    background: #f7f7f7;
}


.sign-yzm .mode {
    margin-top: 20px;
    margin-bottom: 60px;
    flex-direction: column;
    align-items: baseline;
    margin-left: 60px;
}

.sign-yzm .mode p {
    margin: 5px 0;
}

.sign-in-user {
    display: flex;
    align-content: center;
    flex-direction: column;
    padding: 20px 50px 0 50px;
}

.sign-in-user input {
    padding: 13px;
    font-size: 17px;
    border: none;
    background: none;
    border-bottom: 2px solid #21403b;
}

.sign-in-user input:focus-visible {
    outline: none;
}

.err {
    border-bottom: 2px solid #a95050 !important;
}

.errs {
    font-size: 12px;
    color: #d14b4b;
    margin-bottom: -10px;
    max-width: 320px;
}

.row-center {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
}

.adj-info {
    color: #40485b;
    font-weight: 600;
}

.captcha_input_wrapper {
    width: 100%;
}

.captcha_input_box {
    width: 2.1vw;
    min-width: 20px;
    min-height: 33px;
    height: 3.0vw;
    margin-right: 0.3vw;
    border-radius: 4px;
    border: 2px solid #23403b;
    font-size: 15px;
    text-align: center;
    color: #23403b !important;
}

.captcha_input_box:focus-visible {
    background: #5a8c8347;
}
</style>


<style>
.sign-in .el-input__wrapper {
    box-shadow: none !important;
    background: none !important;
    padding: 0 !important;
    border-bottom: 2px solid #21403b;
    border-radius: 0 !important;
}

.sign-in .el-input__inner {
    height: 45px;
    padding: 13px 0 13px 13px;
}

.sign-in .el-input__suffix-inner {
    margin-right: 8px;
}
.m-select-list {
    background: white !important;
}

.m-input-wrapper.--default-border{
    outline: none !important;
    border: none !important;
    border-bottom: 2px solid #21403b !important;
}

.maz-border-primary {
    outline: none !important;
    border: none !important;
    border-bottom: 2px solid #21403b !important;
}

.m-phone-number-input__country-flag {
    bottom: 18px !important;
}

.m-input-wrapper {
    border: none !important;
    border-bottom: 2px solid #21403b !important;
}
</style>

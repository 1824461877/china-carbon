<template>
    <div class="sign-in">
        <div class="sign-in-box">
            <div class="sign-logo">
                <img class="logo" src="@/assets/logo-black.png"/>
                <div class="sign-in-tit">登录</div>
            </div>
            <div class="sign-in-box-body">
                <div class="sign-in-box-left">
                    <img src="@/assets/undraw_drag_re_shc0.svg"/>
                    <div class="sign-in-box-tit">- SIGN IN -</div>
                </div>
                <div class="sign-in-box-right">
                    <div class="sign-in-box-right-bg">
                        <ul class="sign-in-option">
                            <li :class="num===1?'':'sign-show'" @click="num=1">手机号登录</li>
                        </ul>
                        <div class="sign-in-user">
                            <p>手机号 | Cell-phone number</p>
                            <input name="cell-phone" :class="user_show.phone?'':'err'" v-model="user.username"
                                   @keyup="check_phone"
                                   placeholder="请输入手机号" type="text"/>
                            <p v-show="!user_show.phone" class="errs">** 您输入的手机号码格式错误</p>
                        </div>
                        <div class="sign-in-user">
                            <p>密码 | Password</p>
                            <el-input type="password" show-password :class="user_show.password?'':'err'"
                                      v-model="user.password" placeholder="请输入你账号密码"
                                      @keyup="check_pass"/>
                            <p v-show="!user_show.password" class="errs">** {{ user_show.err_info }}</p>
                        </div>
                        <div class="button-submit" @click="sign_in()">
                            登录
                        </div>
                        <div class="mode">
                            <p class="f-password">忘记密码</p>
                            <p class="f-sign-up" @click="sign_up()">用户注册</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {sign_in} from "@/api/sign";
import {setToken} from '@/utils/auth'
import {passwordValid} from "@/utils/pass";
import {ElMessage} from "element-plus";
import {h} from "vue";

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "sign-in",
    data() {
        return {
            num: 1,
            user: {
                username: "",
                password: "",
            },
            user_show: {
                phone: true,
                password: true,
                err_info: "",
            },
        }
    },
    methods: {
        check_phone() {
            let reg = /^1[3|4|5|7|8][0-9]{9}$/;
            if (reg.test(this.user.username)) {
                this.user_show.phone = true
            } else {
                this.user_show.phone = false
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
        sign_in() {
            let data = {
                username: this.user.username,
                password: this.user.password,
            }
            const formData = Object.assign({}, data)
            sign_in(formData).then(response => {
                if (response.code === 200) {
                    setToken(response.data.token)
                    ElMessage({
                        message: h('p', null, [
                            h('a', {style: 'color: teal'}, '登录成功，欢迎您的到来'),
                        ]),
                    })
                    this.$router.push({path: '/index'})
                }
            })
        },
        sign_up() {
            this.$router.push({path: '/sign_up'})
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
    display: flex;
    height: 100%;
    width: 100%;
    flex-wrap: wrap;
    min-width: 600px;
}

.sign-in-box-left {
    width: 50%;
    height: 100%;
    text-align: center;
}

@media screen and (max-width: 700px) {
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
        min-width: auto !important;
    }
}


.sign-in-box-right {
    background: #23403b;
    height: 100%;
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
    font-weight: 600;
}

.logo {
    height: 40px;
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
    width: 52vw;
    min-width: 600px;
}

.sign-in-option {
    list-style: none;
    padding: 0;
    color: #284641;
    cursor: pointer;
    display: flex;
    font-size: 19px;
    margin: 50px 0 0 50px;
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
    height: 98%;
    width: 100%;
    background: #f7f7f7;
    padding-bottom: 35px;
}

.sign-in-user {
    display: flex;
    align-content: center;
    flex-direction: column;
    padding: 20px 50px 0 50px;
}

.sign-in-user input {
    width: 90%;
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
</style>

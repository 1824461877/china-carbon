<template>
    <div class="sign-up">
        <div class="sign-up-box">
            <div class="sign-logo">
                <img class="logo" @click="index()" src="@/assets/logo-black.png"/>
                <div class="sign-up-tit">注册</div>
            </div>
            <div class="sign-up-box-body">
                <div class="sign-up-box-left">
                    <img src="@/assets/undraw_futuristic_interface_re_0cm6.svg"/>
                    <div class="sign-up-box-tit">- SIGN UP -</div>
                </div>
                <div class="sign-up-box-right">
                    <div class="sign-up-box-right-bg">
                        <ul class="sign-up-option" v-show="!show2">
                            <li :class="num===2?'':'sign-show'" @click="num=2">
                                {{ si === 1 ? '手机号注册' : '输入手机号验证码' }}
                            </li>
                        </ul>
                        <div v-show="!show">
                            <div class="sign-up-user">
                                <p>手机号 | Cell-phone number</p>
                                <input name="cell-phone" :class="user_show.phone?'':'err'" v-model="user.cell_phone"
                                       @keyup="check_phone"
                                       placeholder="请输入手机号" type="text"/>
                                <p v-show="!user_show.phone" class="errs">** 您输入的手机号码格式错误</p>
                            </div>
                            <div class="sign-up-user">
                                <p>设置密码 | Set Password</p>
                                <el-input type="password" show-password :class="user_show.password?'':'err'"
                                          v-model="user.password" placeholder="请设置你账号密码"
                                          @keyup="check_pass"/>
                                <p v-show="!user_show.password" class="errs">** {{ user_show.err_info }}</p>
                            </div>
                        </div>
                        <p class="s-des" v-show="show&&!show2">
                            请输入发送至 +86{{ filter_cell_phone }} 的 6位验证码
                        </p>
                        <div class="row-center captcha_input_wrapper" v-show="show&&!show2">
                            <input
                                    v-for="(item,index) in captchas"
                                    :key="index"
                                    v-model="item.num"
                                    :id="'captcha'+index"
                                    @input="inputFinash(index)"
                                    @focus="adjust(index)"
                                    @keydown="inputDirection(index)"
                                    class="captcha_input_box row-center"
                                    type="tel"
                                    maxlength="1"
                            />
                        </div>
                        <p class="s-des" v-show="show&&!show2">
                            {{ count }} 秒后可重新获取验证码
                        </p>
                        <div class="button-submit" @click="next()" v-show="show&&!show2">
                            点击下一步
                        </div>
                        <p class="s-des" style="text-align: center;font-size: 14px" v-show="show&&!show2">
                            账号已停用？找回账号
                        </p>

                        <div class="finish" v-show="show2">
                            <img src="@/assets/undraw_Completed_03xt.png"/>
                            <p class="finish-des">注册成功</p>
                            <p class="s-des">稍等一会儿，马上跳转到登录页面</p>
                        </div>
                        <div v-show="!show">
                            <div class="button-submit" @click="get_verification_code()">
                                获取验证码
                            </div>
                            <p class="f-sign-in" @click="sign_in()">用户登录</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {passwordValid} from "@/utils/pass.js"
import {verification_code, sign_up} from "@/api/sign.js"
import {h} from 'vue'
import {ElMessage} from 'element-plus'

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "sign-up",
    data() {
        return {
            num: 2,
            show: false,
            show2: false,
            si: 1,
            count: 0,
            time: 60,
            user: {
                cell_phone: "",
                password: "",
                verification_code: "",
            },
            user_show: {
                phone: true,
                password: true,
                err_info: "",
            },
            filter_cell_phone: "",
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
        next() {
            let that = this
            let data = {
                cell_phone_number: this.user.cell_phone,
                password: this.user.password,
                verification_code: this.user.verification_code,
            }
            const formData = Object.assign({}, data)
            sign_up(formData).then(response => {
                if (response.code === 200) {
                    that.show2 = true
                    let times = setInterval(() => {
                        that.$router.push({path: '/sign_in'})
                        clearInterval(times);
                    }, 1500)
                } else if (response.code === 400) {
                    let times = setInterval(() => {
                        that.show = false
                        ElMessage({
                            message: h('p', null, [
                                h('a', {style: 'color: teal'}, '该手机号已经注册'),
                            ]),
                        })
                        clearInterval(times);
                    }, 1000)
                }
            })
        },
        check_phone() {
            let reg = /^1[3|4|5|7|8][0-9]{9}$/;
            if (reg.test(this.user.cell_phone)) {
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
        get_verification_code() {
            let that = this
            if (that.user_show.phone || that.user_show.password) {
                if (that.user.password !== "" && that.user.cell_phone !== "") {
                    let query = {
                        "cell_phone": this.user.cell_phone,
                    }
                    verification_code(query).then(response => {
                        if (response.code === 200) {
                            that.show = true
                            that.si = 2
                            that.verification()
                            that.filter_cell_phone = that.phoneFilter(that.user.cell_phone)
                        }
                    })
                }
            }
        },
        phoneFilter(val) {
            let reg = /^(.{3}).*(.{4})$/;
            return val.replace(reg, "$1****$2");
        },
        sign_up() {

        },
        verification() {
            this.count = this.time
            var times = setInterval(() => {
                this.count--; //递减
                if (this.count <= 0) {
                    // <=0 变成获取按钮
                    this.show = false;
                    clearInterval(times);
                }
            }, 1000); //1000毫秒后执行
        },
        sign_in() {
            this.$router.push({path: '/sign_in'})
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
            let val = this.captchas[index].num;
            this.activeInput = val ? index + 1 : index - 1;
            let dom = document.getElementById("captcha" + this.activeInput);
            if (dom) dom.focus();
            if (index === this.captchas.length - 1) {
                let code = this.captchas.map((x) => x.num).join("");
                if (code.length === 6) {
                    this.user.verification_code = code.toString()
                }
            }
        }
    }
}
</script>

<style scoped>
.sign-up {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.finish {
    margin-top: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.finish img {
    width: 130px;
}

.finish-des {
    font-size: 18px;
    font-weight: 600;
    color: #365952;
}

@media screen and (max-width: 700px) {
    .sign-up-box-left {
        width: 100% !important;
        text-align: center;
        padding: 5% 0;
    }

    .sign-up-box-right {
        width: 100% !important;
    }

    .sign-up-box-right-bg {
        min-height: auto !important;
    }

    .sign-logo {
        position: fixed;
        top: 0 !important;
        width: 100% !important;
        background: #ffffffde !important;
    }

    .sign-up-box {
        box-shadow: none !important;
    }

    .finish {
        margin: 20% auto !important;
    }

    .sign-up-box-left img {
        margin: 100px auto 10px auto !important;
    }

    .sign-up-box {
        width: 100% !important;
        min-width: auto !important;
    }

    .sign-up-box-body {
        min-width: auto !important;
    }

    .captcha_input_box {
        min-width: auto !important;
        width: 8vw !important;
        height: 9.5vw !important;
        margin: 0 1vw !important;
        min-height: auto !important;
        font-size: 4vw;
    }
}

.s-des {
    padding: 10px 50px;
    color: #3e3e3e;
}

.err {
    border-bottom: 2px solid #a95050 !important;
}

.errs {
    font-size: 12px;
    color: #d14b4b;
    margin-bottom: -10px;
}

.sign-show {
    color: #2846417d;
}

.sign-up-box-body {
    display: flex;
    height: 100%;
    width: 100%;
    min-width: 600px;
    flex-wrap: wrap;
}


.sign-up-box-left {
    width: 50%;
    height: 100%;
    text-align: center;
}

.sign-up-box-right {
    background: #23403b;
    height: 100%;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.sign-up-tit {
    padding-left: 20px;
    border-left: 2px solid #284641;
    color: #284641;
    display: flex;
    align-items: center;
    font-weight: 600;
}

.sign-up-box-left img {
    width: 45%;
    margin: 150px auto 0 auto;
    max-width: 190px;
}

.f-sign-in {
    margin-right: 50px;
    font-size: 14px;
    text-align: right;
    cursor: pointer;
}

.sign-up-box-tit {
    width: 100%;
    font-size: 25px;
    text-align: center;
    color: #284641;
    margin-top: 45px;
    font-weight: 600;
}

.logo {
    height: 40px;
    cursor: pointer;
}

.sign-logo {
    position: absolute;
    margin-top: 15px;
    display: flex;
    margin-left: 15px;
}

.sign-up-box {
    background: white;
    box-shadow: 1px 1px 10px 1px #e3e3e3;
    width: 52vw;
    min-width: 600px;
}

.sign-up-option {
    list-style: none;
    padding: 0;
    color: #284641;
    cursor: pointer;
    display: flex;
    font-size: 19px;
    margin: 50px 0 20px 50px;
}

.button-submit {
    background: #284641;
    padding: 13px 5px;
    text-align: center;
    cursor: pointer;
    margin: 10px auto 0 auto;
    color: white;
    width: 70%;
}

.sign-up-option li {
    margin-right: 30px;
}

.sign-up-box-right-bg {
    height: 98%;
    width: 100%;
    min-height: 470px;
    padding-bottom: 15px;
    background: #f7f7f7;
}

.sign-up-user {
    display: flex;
    align-content: center;
    flex-direction: column;
    padding: 0 50px 20px 50px;
}

.sign-up-user input {
    width: 90%;
    padding: 13px;
    font-size: 17px;
    border: none;
    background: none;
    border-bottom: 2px solid #21403b;
}

.sign-up-user input:focus-visible {
    outline: none;
}

.row-center {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
}

.captcha_input_wrapper {
    width: 100%;
}

.captcha_input_box {
    width: 2.3vw;
    min-width: 20px;
    min-height: 33px;
    height: 2.8vw;
    margin-right: 0.5vw;
    border-radius: 4px;
    border: 2px solid #23403b;
    font-size: 15px;
    text-align: center;
    color: #1e243a;
}

.captcha_input_box:focus-visible {
    background: #5a8c8347;
}
</style>

<style>
.sign-up .el-input__wrapper {
    box-shadow: none !important;
    background: none !important;
    padding: 0 !important;
    border-bottom: 2px solid #21403b;
    border-radius: 0 !important;
}

.sign-up .el-input__inner {
    height: 45px;
    padding: 13px 0 13px 13px;
}

.sign-up .el-input__suffix-inner {
    margin-right: 8px;
}
</style>

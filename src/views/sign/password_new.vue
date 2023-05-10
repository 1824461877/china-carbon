<template>
    <headers></headers>
    <div class="password_new">
        <img src="@/assets/logo.png"/>
        <h2>个人碳资产重置密码</h2>
        <div v-if="!show">
            <p>请通过输入<a>"手机号码"重置</a>你的<a>个人碳资产帐号密码</a></p>
            <div class="p_n_i">
                <div class="p_n_i_phone p_n_i_no">
                    <MazPhoneNumberInput
                        v-model="phone"
                        :preferred-countries="['FR', 'BE', 'DE', 'US', 'GB']"
                        :noExample=true
                        :translations= "{
                            countrySelector: {
                                placeholder: '',
                                error: 'Choose country',
                            }
                          }"
                    />
<!--                    <img src="@/assets/phone.png"/>-->
<!--                    <input @keyup="check_phone" v-model="phone" placeholder="请输入您的手机号">-->
                </div>
                <p class="pshow" v-if="!phone_show">*** {{phone_show_err}}</p>
                <div class="p_n_i_phone" style="margin-top: 20px;">
                    <img src="@/assets/password.png" style="height: 16px;padding: 12px 17px"/>
                    <input @keyup="check_pass" v-model="password" placeholder="请输入您新的密码">
                </div>
                <p class="pshow" v-if="!password_show">*** {{ password_show_err }}</p>
            </div>
            <div class="phone_rest" @click="get_verification_code()">重置密码</div>
        </div>
        <div class="p-show" v-if="show">
            <div  class="row-center captcha_input_wrapper">
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
            <p v-if="perr" class="perr">请输入正确的验证码</p>
            <div class="adj-info">
                <p>一条包含验证码的信息已发送至你的 手机 {{phone}}</p>
                <p>请核对识别码后输入验证码以继续</p>
                <p class="yz" @click="get_verification_code()">未收到验证码？请点击</p>
            </div>
        </div>
    </div>
    <bottoms></bottoms>
</template>

<script>
import header from "../components/header.vue"
import bottom from "../components/bottom.vue"
import MazPhoneNumberInput from "maz-ui/components/MazPhoneNumberInput";
import {user_registration_status, verification_update_password} from "@/api/admin";
import {verification_code} from "@/api/sign";
import {passwordValid} from "@/utils/pass";
import {ElMessage} from "element-plus";
import {h} from "vue";

export default {
    name: "password_new",
    components: {
        headers: header,
        bottoms: bottom,
        MazPhoneNumberInput:MazPhoneNumberInput
    },
    data() {
        return {
            show: false,
            phone: "",
            password: "",
            phone_show: true,
            phone_show_err: "",
            password_show: true,
            password_show_err: "",
            perr: false,
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
        check_pass() {
            // let pv = passwordValid(this.user.password)
            let pv = passwordValid(this.password)
            if (pv === "correct") {
                this.password_show = true
            } else {
                this.password_show = false
            }
            this.password_show_err = pv
        },
        get_verification_code_func() {
            let that = this
            if (that.phone_show && that.phone !== "") {
                let query = {
                    "cell_phone": that.phone,
                }
                verification_code(query).then(response => {
                    if (response.code === 200) {
                        that.show = true
                        ElMessage({
                            message: h('p', null, [
                                h('a', {style: 'color: teal'}, '获取验证码成功！'),
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
        get_verification_code() {
            if (this.phone_show && this.phone !== "") {
                let query = {
                    "cell_phone_number": this.phone,
                }
                user_registration_status(query).then(response => {
                    if (response.code === 9992) {
                        this.phone_show = false
                        this.phone_show_err = "您输入的手机号未注册"
                    } else {
                        this.get_verification_code_func()
                    }
                })
            }
        },
        verification_update_password(verification_code) {
            let data = {
                cell_phone_number: this.phone,
                new_password: this.password,
                verification_code: verification_code,
            }
            const formData = Object.assign({}, data)
            verification_update_password(formData).then(response => {
                if (response.code === 200) {
                    ElMessage({
                        message: h('p', null, [
                            h('a', {style: 'color: teal'}, '修改密码成功'),
                        ]),
                    })
                    this.$router.push({path: '/sign_up'})
                } else {
                    this.perr = true
                }
            })
        },
        check_phone() {
            let reg = /^1[3|4|5|7|8][0-9]{9}$/;
            if (reg.test(this.phone)) {
                this.phone_show = true
            } else {
                this.phone_show = false
                this.phone_show_err = "请输入正确的手机号格式"
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
                    this.verification_update_password(code)
                }
            }
        }
    }
}
</script>

<style scoped>
.password_new {
    padding: 180px 0;
    text-align: center;
    color: #8C92A4;
}

.password_new img {
    height: 70px;;
}

.password_new h2 {
    color: #444444;
}

.p_n_i input {
    border: none;
    padding: 10px;
    outline: none;
    font-size: 15px;
    background: none;
    width: 100%;
}

.yz {
    color: #797979;
    font-size: 13px;
    cursor: pointer;
}

.perr {
    color: #bc4e4e;
}

.pshow {
    color: #bc4e4e;
    font-size: 10px;
}

.p_n_i {
    display: flex;
    margin-top: 50px;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

.p_n_i_phone {
    display: flex;
    justify-content: center;
    width: 300px;
    border-bottom: 2px solid #25403b;
}

.p_n_i_phone img {
    height: 25px;
    padding: 8px 13px;
}

.phone_rest {
    background: #25403b;
    padding: 13px;
    width: 280px;
    color: white;
    border-radius: 3px;
    cursor: pointer;
    margin: 25px auto;
}

.password_new a {
    color: #25403b;
    font-weight: 600;
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
    width: 2.8vw;
    min-width: 20px;
    min-height: 33px;
    height: 3.3vw;
    margin-right: 0.8vw;
    border-radius: 4px;
    border: 2px solid #23403b;
    font-size: 15px;
    text-align: center;
    color: #23403b !important;
}

.captcha_input_box:focus-visible {
    background: #5a8c8347 ;
}

.captcha_input_box_err {
    border: 2px solid #bc4e4e;
    color: #bc4e4e;
    outline: none;
}

.captcha_input_box_err:focus-visible {
    background: #fdc0c0;
    outline: none;
}

.p_n_i_no {
    border: none !important;
}
</style>

<style>
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
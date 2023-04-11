<template>
    <div class="header">
        <div class="log-div" @click="index()">
            <div class="logo-title">
                <img src="@/assets/logo-black.png"/>
            </div>
        </div>
        <div class="navbar">
            <ul>
                <li @click="offset()">
                    <p>抵消航程碳足迹</p>
                    <p>Offset Flight</p>
                </li>
                <li @click="approach()">
                    <p>我们的方法</p>
                    <p>Our approach</p>
                </li>
                <li @click="project()">
                    <p>我们的项目</p>
                    <p>Our project</p>
                </li>
                <li>
                    <p>了解更多</p>
                    <p>Learn more</p>
                </li>
                <li class="user_box" v-show="user_show" @mouseover="show3=true" @mouseleave="show3=false">
                    <div class="user_box-left"></div>
                    <img src="@/assets/tou.jpg"/>
                </li>
                <li v-show="!user_show" class="login" @click="sign_in()">
                    <p>登录</p>
                    <p>Sign in</p>
                </li>
            </ul>
        </div>
        <div class="user_box_info" v-show="show3" @mouseover="show3=true" @mouseleave="show3=false">
            <ul>
                <li @click="user_path()"><img src="@/assets/set.png"/> 设置</li>
                <li @click="out()"><img src="@/assets/out.png"/> 登出</li>
            </ul>
        </div>
        <div class="navbar-dis">
            <img @click="ndc" src="@/assets/nav.png"/>
            <div class="user_box dis" v-show="user_show" @mouseover="show3=true" @mouseleave="show3=false">
                <img src="@/assets/tou.jpg"/>
            </div>
        </div>

        <div class="navbar-dis-body" v-show="ndb">
            <div class="out" @click="ndb = false">返回</div>
            <ul>
                <li @click="offset()" :class="s_index===2?'i_show':''">
                    <p>抵消航程碳足迹</p>
                    <p>Offset Flight</p>
                </li>
                <li @click="approach()" :class="s_index===3?'i_show':''">
                    <p>我们的方法</p>
                    <p>Our approach</p>
                </li>
                <li @click="project()" :class="s_index===4?'i_show':''">
                    <p>我们的项目</p>
                    <p>Our project</p>
                </li>
                <li>
                    <p>了解更多</p>
                    <p>Learn more</p>
                </li>
                <li class="login" @click="sign_in()" :class="s_index===5?'i_show':''">
                    <p>登录</p>
                    <p>Sign in</p>
                </li>
            </ul>
        </div>
        <div class="show-windows" v-show="show_set">
            <div class="show-win-box">
                <div class="">
                    <h3>帐号设置用户信息</h3>
                    <div class="ts">
                        ** 必需要设置用户基本信息 **
                    </div>
                    <div class="user-box">
                        <p>用户姓名</p>
                        <input class="" v-model="user_info.name"/>
                    </div>
                    <div class="user-box">
                        <p>用户基本描述</p>
                        <textarea v-model="user_info.introduction"/>
                    </div>
                    <div class="user-button-item">
                        <div class="user-button next" @click="admin_set_info()">点击设置</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import {admin_info, admin_set} from '@/api/admin'
import {removeToken} from "@/utils/auth";
import {ElMessage} from "element-plus";
import {h} from "vue";

export default {
    name: 'header-mode',
    data() {
        return {
            is_login: false,
            show: false,
            show3: false,
            user_show: false,
            s_index: 1,
            ndb: false,
            user: "",
            show_set: false,
            user_info: {
                avatar: "",
                introduction: "",
                name: ""
            },
        }
    },
    created() {
        var path = this.$route.path
        if (path == '/index') {
            this.s_index = 1
        } else if (path == '/offset') {
            this.s_index = 2
        } else if (path == '/approach') {
            this.s_index = 3
        } else if (path == '/project') {
            this.s_index = 4
        } else if (path == '/sign_in') {
            this.s_index = 5
        }

        this.user_infos()
    },
    methods: {
        admin_set_info() {
            const formData = Object.assign({}, this.user_info)
            admin_set(formData).then(response => {
                if (response.code === 200) {
                    ElMessage({
                        message: h('p', null, [
                            h('a', {style: 'color: teal'}, '设置用户基本信息成功'),
                        ]),
                    })
                    this.show_set = false
                    this.user_infos()
                }
            })
        },
        user_infos() {
            let user = localStorage.getItem("user")
            if (user === undefined || user === "" || user === null) {
                admin_info().then(response => {
                    if (response.code === 200) {
                        localStorage.setItem("user", JSON.stringify(response.data))
                        this.user = JSON.parse(user);
                        this.user_show = true
                    } else if (response.code === 400 && response.errmsg === "record not found") {
                        this.show_set = true
                    }
                })
            } else {
                this.user = JSON.parse(user);
                this.user_show = true
            }
        },
        ndc() {
            this.ndb = true
        },
        out() {
            localStorage.removeItem("user")
            removeToken()
            this.user = ""
            this.user_show = false
            this.index()
        },
        index() {
            this.$router.push({path: '/index'})
        },
        user_path() {
            this.$router.push({path: '/user'})
        },
        offset() {
            this.$router.push({path: '/offset'})
        },
        approach() {
            this.$router.push({path: '/approach'})
        },
        project() {
            this.$router.push({path: '/project'})
        },
        sign_in() {
            this.$router.push({path: '/sign_in'})
        }
    }
}
</script>

<style>
.header {
    padding: 21px 3% 21px 3%;
    display: flex;
    position: fixed;
    top: 0;
    z-index: 999;
    width: 94%;
    justify-content: space-between;
    align-items: center;
    background: #ffffffeb;
}

.user-box {
    margin-top: 30px;
    font-weight: 600;
    font-size: 15px;
    color: #25403bde;
}

.user-button-item {
    display: flex;
    margin: 30px 0 10px 0;
    justify-content: end;
}

.ts {
    background: #25403b14;
    padding: 20px;
    color: #ab5e11;
}


.user-button {
    background: #25403b;
    padding: 10px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: 400;
    cursor: pointer;
    font-size: 13px;
    min-width: 80px;
}

.show-win-box {
    padding: 20px 40px;
    background: white;
    min-width: 430px;
}

.user-box textarea {
    height: 110px;
    width: 96%;
    border: 3px solid #21403b;
    padding: 5px;
    background: #36595221;
    font-size: 14px;
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


.user-box input {
    padding: 10px;
    font-size: 15px;
    width: 95%;
    border: none;
    background: #36595221;
    border-bottom: 3px solid #21403b;
}

.user-box input:focus-visible {
    outline: none;
}

.navbar-dis-body {
    position: fixed;
    right: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background: white;
    z-index: 999;
}


.navbar-dis {
    display: none;
    margin-right: 10px;
}

.out {
    padding: 25px;
    border-bottom: 3px solid #ececec;
}

.navbar-dis img {
    width: 28px;
}

.user_box_info {
    position: fixed;
    right: 2.2vw;
    top: 10px;
    background: white;
    box-shadow: 1px 1px 10px 1px #e8e8e8;
    height: 155px;
    border-radius: 15px;
    z-index: 99;
    width: 80px;
}

.user_box_info ul {
    list-style: none;
    text-align: center;
    margin-top: 65px;
    padding: 0;
}

.user_box_info img {
    width: 15px;
    margin-right: 4px;
    margin-top: 2px;

}

.user_box_info ul li {
    color: #375751;
    padding: 9px 0;
    font-size: 15px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
}

.user_box img {
    width: 32px;
    height: 32px;
    border-radius: 10px;
    border: 4px solid #55756e !important;
    padding: 2px;
}

.navbar-dis-body li {
    margin: 30px auto 30px auto;
    width: 50%;
    transition: border-bottom 0.2s, margin-top 0.2s;
    border-bottom: 2px solid #ffffffeb;
    padding: 10px 10px;
}

.i_show {
    border-bottom: 3px solid #365952 !important;
}

.navbar-dis-body ul p {
    margin: 5px 0;
    font-size: 6vw;
}

.navbar-dis-body ul {
    margin: 0;
    padding: 0;
}

.navbar-dis-body ul p:nth-of-type(2) {
    font-size: 4vw;
    text-align: center;
    margin: 0;
    font-weight: 600;
    color: #365952;
}

.navbar-dis-body ul {
    list-style: none;
    text-align: center;
}

.log-div {
    display: flex;
}

.navbar {
    display: flex;
    font-size: 17px;
    font-weight: 600;
}

.navbar li:hover {
    border-bottom: 2px solid #365952;
    margin-top: -5px;
    cursor: pointer;
}

.user_box {
    display: flex;
    position: relative;
    z-index: 100;
    align-items: center;
    border-bottom: 2px solid #ffffff00 !important;
    margin: 0 !important;
}

.user_box-left {
    width: 3px;
    height: 30px;
    border-radius: 2px;
    background: #517f75ba;
    margin-right: 15px;
}

.navbar ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
}

.navbar li {
    margin: 0 20px;
    text-align: center;
    transition: border-bottom 0.2s, margin-top 0.2s;
    border-bottom: 2px solid #ffffffeb;
    padding: 2px 7px;
}

.navbar ul p {
    margin: 5px 0;
    font-size: 15px;
}

.navbar ul p:nth-of-type(2) {
    font-size: 8px;
    text-align: center;
    margin: 0;
    color: #365952;
}

.log-div {
    cursor: pointer;
    display: flex;
    justify-items: center;
    align-items: center;
}

.logo-title {
    margin-left: 12px;
    font-size: 30px;
    color: #2e2e44;
    font-weight: 700;
}

@media screen and (max-width: 450px) {
    .logo-title img {
        height: 40px !important;
    }
}

.logo-title img {
    height: 50px;
}

.logo-tou img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
}

.exhibit img {
    border-radius: 5px;
    width: 55px;
    height: 55px;
}

.h-u-e p {
    font-size: 16px;
    margin: 20px 0px 5px 0;
}

.h-u-e p:nth-of-type(2) {
    color: #999393;
    margin: 0;
    padding: 0;
    font-size: 15px;
}

.my-balance p:nth-of-type(2) {
    color: #143b6ef2;
    font-weight: 600;
}

.logo-title {
    display: flex;
    align-items: center;
}

.logo-title div:nth-of-type(2) {
    font-size: 15px;
}


.gihtub img {
    width: 100px;
    height: 100px;
    margin-top: 30px;
}

.logo-jifen img {
    width: 18px;
    height: 18px;
}

@media screen and (max-width: 1100px) {
    .navbar {
        display: none;
    }

    .navbar-dis {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .dis {
        border-bottom: 0px solid #ffffff00 !important;
        margin-left: 20px !important;
    }

    .user_box img {
        width: 29px;
        height: 29px;
    }

    .user_box_info {
        width: 69px !important;
        right: 2.46vw !important;
    }

}

</style>

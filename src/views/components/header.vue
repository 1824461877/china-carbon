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
                <li><img src="@/assets/out.png"/> 登出</li>
            </ul>
        </div>
        <div class="navbar-dis" @click="ndc">
            <img src="@/assets/nav.png"/>
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
    </div>
</template>


<script>
import {admin_info} from '@/api/admin'

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

        let user = localStorage.getItem("user")
        if (user === undefined || user === "" || user === null) {
            admin_info().then(response => {
                if (response.code === 200) {
                    localStorage.setItem("user", JSON.stringify(response.data))
                }
            })
        }
        this.user = JSON.parse(user);
        this.user_show = true
    },
    methods: {
        ndc() {
            this.ndb = true
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
    width: 30px;
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

.navbar img {
    width: 32px;
    height: 32px;
    border-radius: 10px;
    border: 4px solid #517f75ba !important;
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

@media screen and (max-width: 1100px) {
    .navbar {
        display: none;
    }

    .navbar-dis {
        display: block;
    }
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

</style>

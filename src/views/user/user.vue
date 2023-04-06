<template>
    <headers></headers>
    <div class="user">
        <div class="user-body">
            <div class="user-left">
                <div class="user-left-tou">
                    <img src="@/assets/tou.jpg"/>
                    <h2 class="tou-name">COMS</h2>
                    <p class="tou-des">this is good boy</p>
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
                            <input class=""/>
                            <div class="user-button">更换号码</div>
                        </div>
                    </div>
                    <div class="user-box">
                        <p>登录密码</p>
                        <div class="user-do">
                            <input class=""/>
                            <div class="user-button">修改密码</div>
                        </div>
                    </div>
                    <div class="user-box">
                        <p>绑定邮箱</p>
                        <div class="user-do">
                            <input class=""/>
                            <div class="user-button">更换邮箱</div>
                        </div>
                    </div>
                </div>
                <div v-show="show === 2">
                    <h2>用户个人信息</h2>
                    <div class="user-box">
                        <p>名字</p>
                        <div class="user-do">
                            <input class=""/>
                        </div>
                    </div>
                    <div class="user-box">
                        <p>描述</p>
                        <div class="user-do">
                            <textarea/>
                        </div>
                    </div>
                    <div class="user-button on">点击设置</div>
                </div>
            </div>
        </div>
    </div>
    <bottoms></bottoms>
</template>

<script>
import header from "../components/header.vue"
import bottom from "../components/bottom.vue"

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
        }
    }
}
</script>

<style scoped>
.user {
    padding: 150px 8% 50px 8%;
}

.user-body {
    max-width: 800px;
    height: 450px;
    display: flex;
    margin: 0 auto;
    background: white;
    padding: 5%;

}

.user-left-tou {
    text-align: center;
}

.user-left {
    padding: 0 10% 0 5%;
    border-right: 3px #eaeaea dashed;
}

.user-left-tou img {
    border: 5px solid #365952;
    padding: 5px;
    width: 150px;
    border-radius: 50%;
}

.tou-name {
    color: #2f2f2f;
}

.tou-des {
    color: #5d5d5d;
}

.user-right {
    width: 100%;
    padding: 20px 6%;
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
    width: 65%;
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
}

.user-do {
    display: flex;
}

.user-do textarea {
    height: 110px;
    width: 100%;
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
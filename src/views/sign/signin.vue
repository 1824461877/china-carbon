<template>
  <div class="sign-in">
    <div class="sign-in-box">
      <div class="sign-logo">
        <img class="logo" src="@/assets/logo-black.png"/>
        <div class="sing-in-tit">登录</div>
      </div>
      <div class="sign-in-box-body">
        <div class="sign-in-box-left">
          <img src="@/assets/undraw_drag_re_shc0.svg"/>
          <div class="sing-in-box-tit">- SIGN IN -</div>
        </div>
        <div class="sign-in-box-right">
          <div class="sign-in-box-right-bg">
            <ul class="sign-in-option">
              <li :class="num===1?'':'sign-show'" @click="num=1">账号登录</li>
              <li :class="num===2?'':'sign-show'" @click="num=2">手机号登录</li>
            </ul>
            <div class="sing-in-user">
              <p>帐号 | Username</p>
              <input name="username" placeholder="请输入帐号" type="text"/>
              <p>密码 | Password</p>
              <input name="password" placeholder="请输入密码" type="password"/>
            </div>
            <div class="button-submit">
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
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "sign-in",
  data() {
    return {
      num: 1,
    }
  },
  methods: {
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
}

.sign-in-box-left {
  width: 55%;
  height: 100%;
  text-align: center;
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

.sing-in-tit {
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

.sing-in-box-tit {
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
  min-width: 400px;
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
  padding: 10px;
  text-align: center;
  cursor: pointer;
  margin: -40px auto 0 auto;
  color: white;
  width: 75%;
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

.sing-in-user {
  display: flex;
  align-content: center;
  flex-direction: column;
  padding: 30px 50px 60px 50px;
}

.sing-in-user input {
  width: 90%;
  padding: 13px;
  font-size: 17px;
  border: none;
  margin-bottom: 20px;
  background: none;
  border-bottom: 2px solid #21403b;
}

.sing-in-user input:focus-visible {
  outline: none;
}
</style>

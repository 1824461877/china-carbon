<template>
  <div class="sing-up">
    <div class="sing-up-box">
      <div class="sign-logo">
        <img class="logo" src="@/assets/logo-black.png"/>
        <div class="sing-up-tit">注册</div>
      </div>
      <div class="sing-up-box-body">
        <div class="sing-up-box-left">
          <img src="@/assets/undraw_futuristic_interface_re_0cm6.svg"/>
          <div class="sing-up-box-tit">- SIGN UP -</div>
        </div>
        <div class="sing-up-box-right">
          <div class="sing-up-box-right-bg">
            <ul class="sing-up-option">
              <li :class="num===2?'':'sign-show'" @click="num=2">手机号注册</li>
            </ul>
            <div class="sing-up-user">
              <p>手机号 | Cell-phone number</p>
              <input name="cell-phone" placeholder="请输入手机号" type="text"/>
            </div>
            <div class="button-submit">
              获取验证码
            </div>
            <p class="f-sign-in" @click="sign_in()">用户登录</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "sing-up",
  data() {
    return {
      num: 2,
    }
  },
  methods: {
    sign_in() {
      this.$router.push({path: '/sign_in'})
    }
  }
}
</script>

<style scoped>
.sing-up {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.sign-show {
  color: #2846417d;
}

.sing-up-box-body {
  display: flex;
  height: 100%;
  width: 100%;
}

.sing-up-box-left {
  width: 55%;
  height: 100%;
  text-align: center;
}

.sing-up-box-right {
  background: #23403b;
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.sing-up-tit {
  padding-left: 20px;
  border-left: 2px solid #284641;
  color: #284641;
  display: flex;
  align-items: center;
  font-weight: 600;
}

.sing-up-box-left img {
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

.sing-up-box-tit {
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

.sing-up-box {
  background: white;
  box-shadow: 1px 1px 10px 1px #e3e3e3;
  width: 52vw;
  min-width: 400px;
}

.sing-up-option {
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

.sing-up-option li {
  margin-right: 30px;
}

.sing-up-box-right-bg {
  height: 98%;
  width: 100%;
  min-height: 470px;
  padding-bottom: 35px;
  background: #f7f7f7;
}

.sing-up-user {
  display: flex;
  align-content: center;
  flex-direction: column;
  padding: 30px 50px 60px 50px;
}

.sing-up-user input {
  width: 90%;
  margin-top: 10px;
  padding: 13px;
  font-size: 17px;
  border: none;
  margin-bottom: 20px;
  background: none;
  border-bottom: 2px solid #21403b;
}

.sing-up-user input:focus-visible {
  outline: none;
}
</style>

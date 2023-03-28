<template>
  <div class="header">
    <div class="log-div" @click="index()">
      <div class="logo-title">
        <div>Trade-Exchange</div>
      </div>
    </div>
    <div class="navbar">
      <ul>
        <p>偏移航班</p>
        <p>Offset Flight</p>
      </ul>
      <ul>
        <p>我们的方法</p>
        <p>Our approach</p>
      </ul>
      <ul>
        <p>我们的项目</p>
        <p>Our project</p>
      </ul>
      <ul>
        <p>了解更多</p>
        <p>Learn more</p>
      </ul>
      <ul class="login">
        <p>登录</p>
        <p>Sign in</p>
      </ul>
    </div>
  </div>
</template>


<script>
export default {
  name: 'header-mode',
  data() {
    return {
      is_login: false,
      show: false,
    }

  },
  methods: {
    get_creation() {
      this.$router.push({path: '/creation'})
    },
    index() {
      this.$router.push({path: '/index'})
    },
    get_user() {
      this.$router.push({path: '/user_collection'})
    },
    get_history() {
      this.$router.push({path: '/history'})
    }
  }
}
</script>

<style>
  .header {
    padding: 27px 3% 27px 3%;
    display: flex;
    z-index: 99;
    position: fixed;
    top: 0;
    z-index: 999;
    width: 94%;
    justify-content: space-between;
    align-items: center;
    background: white;
    box-shadow: 1px 1px 13px 1px #cccccc
  }

  .log-div {
    display: flex;
  }

  .navbar {
    display: flex;
    font-size: 17px;
    margin-left: 150px;
    font-weight: 600;
  }

  .navbar ul {
    margin: 0 20px;
  }

  .navbar ul p {
    margin: 5px 0;
  }

  .navbar ul p:nth-of-type(2) {
    font-size: 13px;
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
    font-size: 35px;
    color: #2e2e44;
    font-weight: 700;
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

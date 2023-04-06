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
        <li class="login" @click="sign_in()">
          <p>登录</p>
          <p>Sign in</p>
        </li>
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
    index() {
      this.$router.push({path: '/index'})
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
  padding: 27px 3% 27px 3%;
  display: flex;
  position: fixed;
  top: 0;
  z-index: 999;
  width: 94%;
  justify-content: space-between;
  align-items: center;
  background: white;
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
}


.navbar li:hover {
  border-bottom: 2px solid #365952;
  margin-top: -5px;
  cursor: pointer;
}

.navbar ul {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}

.navbar li {
  margin: 0 25px;
  transition: border-bottom 0.2s, margin-top 0.2s;
  border-bottom: 2px solid white;
  padding: 5px 10px;
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
  height: 60px;
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

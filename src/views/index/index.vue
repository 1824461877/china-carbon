<template>
  <div class="index">
    <headers></headers>
    <div class="index-left">
      <div class="index-box1 i-box i-box-t">
        <div class="sm-box">
          <div class="sm-box-s sm-box-ss"></div>
        </div>
      </div>
      <div class="index-box1 i-box">
        <div class="sm-box">
          <div class="sm-box-s sm-box-ss"></div>
        </div>
      </div>
      <div class="index-box1 i-box i-box-b">
        <div class="sm-box">
          <div class="sm-box sm-box-ss">
          </div>
        </div>
      </div>
    </div>
    <div class="index-right">
      <h1><a>系统性变革</a>从你我开始</h1>
      <p>Systematic change starts with you and me</p>
      <h2> 保护气候做贡献 -- </h2>
      <p style="font-size: 20px"> Contribute to climate protection -- </p>
      <div class="index-right-info">
        <div>
          <p>330K+</p>
          <p>二氧化碳抵消量</p>
        </div>
        <div>
          <p>4.9</p>
          <p>TrustPilot 评分</p>
        </div>
        <div>
          <p>$4.5M+</p>
          <p>筹集资金</p>
        </div>
        <div>
          <p>700K+</p>
          <p>贡献</p>
        </div>
      </div>
      <div class="index-button">
        <div class="index-button-s">
          <div class="index-button-ss">
            让我们了解更多
          </div>
        </div>
      </div>
    </div>
    <actions></actions>
  </div>
</template>

<script>
import header from "../components/header.vue"
import action from "./components/action.vue"

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Index",
  components: {
    headers: header,
    actions: action,
  },
  data() {
    return {}
  }
}
</script>

<style scoped>
.index {
  height: 100%;
  width: 100%;
  position: absolute;
}

.index-left {
  height: 100%;
  float: left;
}

.index-right {
  float: left;
  width: 94%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: end;
  padding: 7% 3%;
}

.index-right h1 {
  font-size: 65px;
  margin: 130px 0 3px 0;
  font-weight: 400;
}

.index-right p {
  font-weight: 600;
  padding: 0;
  margin: 0;
  font-size: 30px;
}

.index-right h2 {
  font-size: 40px;
  margin: 100px 0 0 0;
  font-weight: 400;
}

.index-right h5 {
  font-size: 20px;
  margin: 25px 0 0 0;
  font-weight: 400;
}

.index-right a {
  color: #387336eb;
  font-weight: 600;
}

.index-right-info {
  margin-top: 30px;
  display: flex;
  align-items: center;
}

.index-right-info div {
  width: 110px;
  text-align: center;
  margin: 0 10px;
  color: #387336eb;
}

.index-right-info p {
  font-size: 35px;
  font-weight: 600;
}

.index-right-info p:nth-of-type(2) {
  font-size: 14px;
  color: #242424;
}

.i-box-t {
  transform: rotate(-70deg) !important;
  left: -30vw !important;
  bottom: 7vh !important;
}

.i-box {
  background: #9fbf7c;
  width: 63vw;
  height: 30vw;
  display: flex;
  border-radius: 50%;
  align-items: center;
  transform: rotate(-40deg);
  position: fixed;
  bottom: -20px;
  box-shadow: 1px -1px 15px 1px #00000045;
  left: -18vw;
}

.i-box-b {
  transform: rotate(-13deg);
  width: 78%;
  height: 37vw;
  position: fixed;
  bottom: -20vw;
  left: -10vw;
}

.sm-box {
  height: 70%;
  width: 86%;
  border-radius: 50%;
  display: flex;
  align-items: center;
  background: #63934a;
}

.sm-box-ss {
  height: 70%;
  width: 86%;
  border-radius: 50%;
  background: #3c7336;
}

.index-button {
  width: 300px;
}

.index-button-s {
  background: #9fbf7c;
  padding: 5%;
  margin-top: 100px;
  border-radius: 15px;
}

.index-button-ss {
  background: #63934a;
  text-align: center;
  font-size: 18px;
  padding: 10px;
  font-weight: 600;
  color: white;
  border-radius: 10px;
}
</style>

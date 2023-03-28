<template>
  <div class="common">
    <div class="common-title">
      <h1>常见问题</h1>
    </div>
    <div class="common-collapse">
      <el-collapse v-model="activeNames" @change="handleChange" accordion>
        <el-collapse-item title="订阅后会发生什么？" name="1">
          <div>
            作为订阅用户，您可以资助碳减排项目。 每个月，我们都会给您发送一封名为“您的贡献”的电子邮件，分享您资助的项目所取得的进展。
            您可以访问我们的项目页面，了解有关我们项目的更多信息。
          </div>
        </el-collapse-item>
        <el-collapse-item title="抵消我的碳足迹需要多少费用？" name="2">
          <div>
            抵消碳足迹的成本取决于您生活中产生的碳排放量，以及从大气中去除碳的成本。Wren 用户抵消其碳足迹的成本约为 23 美元。
            许多人选择抵消一半或两倍的碳足迹。
          </div>
        </el-collapse-item>
        <el-collapse-item title="为了防止气候危机，我还能做些什么？" name="3">
          <div>
            抵消碳足迹的成本取决于您生活中产生的碳排放量，以及从大气中去除碳的成本。Wren 用户抵消其碳足迹的成本约为 23 美元。
            许多人选择抵消一半或两倍的碳足迹。
          </div>
        </el-collapse-item>
        <el-collapse-item title="商业模式？" name="4">
          <div>
            您订阅费用的 80% 会直接捐赠给气候项目，这些项目包括植树、保护雨林和从大气中吸取碳。 剩下的钱用于维持 Wren
            的日常运营：支付薪水、寻找气候项目，以及支付营销费用以帮助尽可能多的人参与到气候变化的行动中。 我们的支付提供商
            Stripe 会收取额外的手续费，以支付手续费，具体费用因支付方式而异。
            我们的费用意味着我们能够聘请世界上最优秀的人才，并和他们一起为气候变化做出贡献。 我们这一代最聪明的人正在优化谷歌和
            Facebook 的广告。 只有付得起薪水，我们才能雇用这些人。
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
    <div class="common-help">
      <img src="@/assets/undraw_Personal_info_re_ur1n.png"/>
      <h2>我们都有责任发挥作用。 今天就采取气候行动。</h2>
      <div class="common-button">让我们开始吧</div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "common",
  data() {
    return {
      activeName: 1,
    }
  }
}
</script>

<style scoped>
.common {
  width: 100%;
  background: white;
  padding: 30px 0 150px 0;
}

.common h1 {
  margin-bottom: 30px;
}

.common h2 {
  padding: 0;
  margin: 0;
}

.common-collapse {
  width: 60%;
  margin: 0 auto;
}

.common-title {
  background: #365952;
  height: 230px;
  width: 350px;
  display: flex;
  justify-content: center;
  color: white;
  margin: -190px auto 50px auto;
  border: 10px solid #387065;
  align-items: flex-end;
}

.common-desc {
  margin: -20px 0 60px 0;
}

.common-help {
  margin-top: 100px;
}

.common-help img {
  width: 40vw;
}

.common-button {
  background: #365952;
  width: 120px;
  padding: 15px;
  margin: 30px auto;
  font-weight: 600;
  color: white;
}
</style>

<style>
.el-collapse-item__header {
  font-weight: 600 !important;
  font-size: 15px !important;
  padding: 5px !important;
}

.el-collapse-item__content {
  text-align: left !important;
  font-size: 15px !important;
}
</style>

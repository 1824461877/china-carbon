<template>
  <div class="invest">
    <img src="@/assets/portfolio-mix.avif"/>
    <h1>成员通过以下方式资助气候解决方案的组合气候投资组合</h1>
    <div class="invest-list">
      <div class="invest-box">
        <div class="invest-box-img">
          <img src="@/assets/manage_project.svg"/>
        </div>
        <p>自动托管</p>
      </div>
      <div class="invest-box">
        <div class="invest-box-img">
          <img src="@/assets/optimize_project.svg"/>
        </div>
        <p>优化影响</p>
      </div>
      <div class="invest-box">
        <div class="invest-box-img">
          <img src="@/assets/diversified_project.svg"/>
        </div>
        <p>项目多元化</p>
      </div>
      <div class="invest-box">
        <div class="invest-box-img">
          <img src="@/assets/affordable_project.svg"/>
        </div>
        <p>价格实惠</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "invest"
}
</script>

<style scoped>
.invest {
  margin-top: 140px;
  padding: 100px;
  background: white;
}
.invest-list {
  display: flex;
  justify-content: center;
  margin-top: 60px;
}

.invest-list img {
  height: 30px;
  width: 30px;
}

.invest-box-img {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px;
  background: rgb(232, 252, 240);
  margin: 0 4vw;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
</style>

<template>
  <div class="stricture">
    <h1>我们所有的工作都是公开的。</h1>
    <p>具有法律约束的章程，保证绝对的透明。</p>
    <div class="stricture-box">
      <div class="stricture-box-item">
        <img src="@/assets/transparency-1.avif"/>
        <h3>我们公开每一笔交易</h3>
        <p>查看我们的进展, 每笔交易都有相应记录。</p>
      </div>
      <div class="stricture-box-item">
        <img src="@/assets/transparency-2.avif"/>
        <h3>我们公开每一个项目</h3>
        <p>在我们的回顾中了解我们的收入和资金流向。</p>
      </div>
      <div class="stricture-box-item">
        <img src="@/assets/transparency-3.avif"/>
        <h3>我们公布每一张收据</h3>
        <p>在我们的分类账上查看购买的每个碳信用额度。</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "stricture",
  data() {
    return {}
  }
}
</script>

<style scoped>
.stricture {
  margin-top: 100px;
  background: #365952;
  width: 100%;
  z-index: 99;
  position: relative;
  padding: 40px 0 120px 0;
  color: white;
}

@media screen and (max-width: 750px) {
  .stricture-box {
    flex-wrap: wrap;
  }
  .stricture-box-item {
    width: 100%;
    margin-bottom: 80px !important;
  }
}

.stricture-box {
  display: flex;
  margin-top: 100px;
  justify-content: center;
}

.stricture-box img {
  height: 70px;
}

.stricture-box-item {
  margin: 0 50px;
}
</style>

<template>
  <headers></headers>
  <div class="approach">
    <div class="approach-t">
      <h1>我们打造  是为了让您更轻松地应对气候危机。</h1>
      <img src="@/assets/undraw_woman_ffrd.svg"/>
      <h2>没有一个人可以独自结束气候危机，但改变总是始于关心的人。</h2>
      <p class="approach-des">气候危机是压倒一切的。 每周都会有更多的洪水、火灾和饥荒的故事发生，因为我们的大气变暖了。
        幸运的是，我们不乏解决方案——我们只需要实施它们。 从植树和生态系统保护到可再生能源和以植物为基础的饮食，专家们已经确定了
        100 多种应对气候危机的解决方案，可立即付诸行动。
        我们为数百万想要提供帮助但不确定他们可以在哪些方面产生真正影响的人打造 。</p>
    </div>
    <div class="approach-box">
      <div class="approach-box-item">
        <h2> 帮助您资助关键解决方案</h2>
        <p>- 通过资金抵消、保护和政策产生影响。</p>
        <p>对于那些有钱的人来说，资助气候解决方案是最简单的帮助方式。  通过我们的月度订阅使这一切变得简单：在 5
          分钟内注册，以资助从事植树、保护、技术研发和政策工作的最佳团体。</p>
        <img src="@/assets/graph.png"/>
        <p>我们专门寻找在没有外部资金的情况下无法实现的解决方案。 太阳能电池板和电动汽车等解决方案无需我们的资金即可获利，但雨林保护和碳清除技术等其他关键解决方案无法创收。
          我们资助的政策工作也必须完全依赖慈善资金，但它在应对气候变化方面可以发挥非常大的影响力。</p>
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
  name: "approach",
  components: {
    headers: header,
    bottoms: bottom,
  }
}
</script>

<style scoped>
.approach {
  animation: approach-show 0.3s;
  animation-fill-mode: forwards;
}

@keyframes approach-show {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.approach-t {
  padding: 180px 0;
  width: 60%;
  text-align: center;
  margin: 0 auto;
}

.approach img {
  width: 30vw;
}

.approach-des {
  line-height: 36px;
  color: #3f3e3e;
  text-align: left;
  font-size: 20px;
}

@keyframes approach-show {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}


.approach h2 {
  margin-top: 40px;
}

.approach-box {
  text-align: center;
  padding: 45px 40px 120px 40px;
  background: white;
}

.approach-box-item {
  width: 50%;
  margin: 0 auto;
  text-align: left;
}
</style>

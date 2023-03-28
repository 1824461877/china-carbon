<template>
  <div class="action">
    <h1>我们的目标是针对气候危机采取简单有效的行动</h1>
    <div class="action-show">
      <el-carousel height="600px" direction="vertical" :autoplay="false">
        <el-carousel-item v-for="item in 4" :key="item">
          <div class="vertical-box">
            <img src="@/assets/protect-rainforest.avif"/>
            <div class="vertical-box-info">
              <!--              <h2>我们在全球范围内寻找最具潜力的气候项目。</h2>-->
              <h2>项目都符合三个严格的标准</h2>
              <div class="vertical-box-item">
                <h3>精准追踪</h3>
                <p>我们仔细检查每个项目抵消了多少二氧化碳，因此我们可以向您保证产生持久的影响。</p>
              </div>
              <div class="vertical-box-item">
                <h3>定期更新</h3>
                <p>我们直接从实地项目中获取数据，因此您可以逐月跟踪您的影响。</p>
              </div>
              <div class="vertical-box-item">
                <h3>每一美元都会有所作为</h3>
                <p>没有您的支持，我们的项目就不会发生。 有了 Wren，您的钱就会产生真正的影响。</p>
              </div>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <strictures></strictures>
    <commons></commons>
  </div>
</template>

<script>
import stricture from "./stricture.vue"
import common from "./common.vue"

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "action",
  components: {
    strictures: stricture,
    commons: common,
  },
  data() {
    return {
      item: {}
    }
  }
}
</script>


<style scoped>
.action {
  position: absolute;
  top: 0;
  padding-top: 100px;
  text-align: center;
  width: 100%;
  min-height: 100%;
  background: #f0f0f0;
}

.vertical-box {
  display: flex;
}

.vertical-box img {
  width: 50%;
}

.action-show {
  width: 80%;
  margin: 20px auto;
}

.action h1 {
  margin: 70px 0;
}

.vertical-box-info {
  width: 46%;
  background: white;
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.vertical-box-item {
  text-align: left !important;
  margin: 5%;
  padding: 30px 30px 10px 30px;
  /*box-shadow: 1px 1px 10px 1px #e9e9e9;*/
}

.action .vertical-box-item h3 {
  margin: 0;
  line-height: 10px;
  text-align: left !important;
}

.vertical-box-info h2 {
  text-align: left;
  padding: 20px 0 10px 40px;
}
</style>

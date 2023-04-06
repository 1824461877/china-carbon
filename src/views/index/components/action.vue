<template>
    <div class="action">
        <h1>投资碳指标是投资世界共同的未来</h1>
        <div class="action-show">
            <img class="a-s-img" src="@/assets/ss.jpg"/>
            <el-carousel height="550px" direction="vertical" :autoplay="false">
                <el-carousel-item v-for="item in 1" :key="item">
                    <div class="vertical-box">
                        <img src="@/assets/ss.jpg"/>
                        <div class="vertical-box-info">
                            <h2>我们在全球范围内寻找最具潜力的自愿碳指标项目。</h2>
                            <div class="vertical-box-item">
                                <h3>项目选择原则</h3>
                                <p>本平台上交易的所有碳资产，都是在全球唯一登记系统中签发的，并寄存在本平台账户中</p>
                            </div>
                            <div class="vertical-box-item">
                                <h3>交易活跃</h3>
                                <p>选取现行国家市场中需求量大、交易活跃的碳指标品种，以保证您的资产流动性</p>
                            </div>
                            <div class="vertical-box-item">
                                <h3>合法合规</h3>
                                <p>
                                    本项目运营方在海南国际碳排放权交易中心是中国受家获批交易国际碳排减排产品交易所，是著名央企大唐集团控股企业</p>
                            </div>
                        </div>
                    </div>
                </el-carousel-item>
            </el-carousel>
        </div>
        <stricture></stricture>
        <common></common>
        <bottom></bottom>
    </div>
</template>

<script>
import stricture from "./stricture.vue"
import common from "./common.vue"
import bottom from "../../components/bottom.vue"

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "action",
    components: {
        stricture: stricture,
        common: common,
        bottom: bottom,
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
    top: 100%;
    padding-top: 140px;
    text-align: center;
    width: 100%;
    min-height: 100%;
    z-index: 111;
    background: #f0f0f0;
}


.vertical-box {
    display: flex;
}

.vertical-box img {
    width: 45%;
}

.action-show {
    width: 80%;
    margin: 20px auto;
}

.action h1 {
    margin: 70px 7%;
}

.vertical-box-info {
    width: 46%;
    background: white;
}

.el-carousel__item h3 {
    color: #162623;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
    text-align: center;
}

.vertical-box-item {
    text-align: left !important;
    margin: 2%;
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
    padding: 20px 40px 10px 40px;
}

.a-s-img {
    display: none;
}

@media screen and (max-width: 1000px) {
    .vertical-box-info {
        width: 100%;
    }

    .a-s-img {
        display: block;
        width: 100%;
    }

    .vertical-box img {
        display: none;
    }

}
</style>

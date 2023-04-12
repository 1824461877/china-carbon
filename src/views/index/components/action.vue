<template>
    <div class="action">
        <h1>我们在全球范围内寻找最具有潜力的碳指标项目</h1>
        <div class="action-show">
            <img src="@/assets/ggt.jpg" class="action-img"/>
            <el-carousel height="600px" direction="vertical" :autoplay="false">
                <el-carousel-item v-for="item in 1" :key="item">
                    <div class="vertical-box">
                        <img src="@/assets/ggt.jpg"/>
                        <div class="vertical-box-info">
                            <h2>项目选取原则</h2>
                            <div class="vertical-box-item">
                                <h3>资产真实</h3>
                                <p>本平台上交易的所以碳资产，都是全球唯一登记系统中签发，并寄存在本平台账号中</p>
                            </div>
                            <div class="vertical-box-item">
                                <h3>交易活跃</h3>
                                <p>选取现行国际市场中需求量大、交易活跃的碳指标品种，以保证您的资产流动性</p>
                            </div>
                            <div class="vertical-box-item">
                                <h3>合法合规</h3>
                                <p>本项目运营方海南国际碳排放权交易中心是中国首家获批交易国际碳减排产品的交易所，是著名央企大唐集团控股企业</p>
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
    z-index: 999;
}

.action-img {
    width: 100%;
    display: none;
}

@media screen and (max-width: 750px) {
    .action-img {
        display: block;
    }

    .action h1 {
        margin: 50px 20px !important;
    }

    .vertical-box img {
        display: none;
    }

    .vertical-box-info {
        width: 100% !important;
    }
}


.vertical-box {
    display: flex;
}

.vertical-box img {
    width: 55%;
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

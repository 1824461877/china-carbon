<template>
    <headers></headers>
    <div class="approach">
        <div class="approach-t">
            <h1>自愿碳指标，是让世界更低成本实现碳中和的重要手段。</h1>
            <img src="@/assets/undraw_woman_ffrd.svg"/>
            <h2>碳减排项目虽然远在他国，但减排贡献可以来自于每一个关心气候变化的人。</h2>
            <p class="approach-des">
                气候危机是一种无法抗拒的压力。随着大气变暖，每周都会发生更多的洪水、火灾和饥荒。幸运的是，我们有很多解决方案，只需要付诸实践。专家已经确定了100多种应对气候危机的方案，从植树和生态系统保护到可再生能源和以植物为基础的饮食，这些方案可以立即实施。我们为数百万想要提供帮助但不确定可以在哪些方面产生真正影响的人提供支持。
            </p>
        </div>
        <div class="approach-box">
            <div class="approach-box-item">
                <h2> 为您提供一举多得的路径</h2>
                <p>- 我们为您选取高质量的自愿碳减排项目，并储备这些项目的碳指标。</p>
                <p>- 您可通过平台购入自愿碳指标，并通过注销而获得国际上通用的抵消凭证。</p>
                <p>
                    -如您觉得暂时不需要获得抵消凭证，可以在账户中持有，并在您或朋友需要时实施注销，或将其卖给其他注册用户。
                </p>
                <img src="@/assets/undraw_Team_up_re_84ok.png"/>
            </div>
        </div>
        <div class="approach-box" style="background-color: #244d46;color: white">
            <div class="approach-box-item">
                <h2> 加入《气候宣言》 </h2>
                <p style="line-height: 35px">
                    来自51个行业和29个国家的300多家企业现已加入《气候宣言》（The Climate Pledge），并承诺比《巴黎协定》（Paris Agreement）提前10年实现零碳净排放。
                    亚马逊和Global Optimism宣布，目前已有300多家公司签署了气候承诺，标志着签署者在过去一年中增长了近600%。在近100个新加入的签署方中，有世界上最大的集装箱运输公司马士基；领先的企业软件开发商SAP；北美天伯伦公司Weyerhaeuser；美国最大的住宅太阳能公司Sunrun以及联网汽车和音频服务的领先品牌HARMAN。
                    Sunrun的系统已经阻止了810万公吨的碳排放，这相当于一辆普通客车行驶了200亿英里。
                    Sunrun首席执行官Mary Powell说:“在Sunrun，人和地球是我们的北极星。“自成立以来，我们已经帮助美国超过660，000名客户改用清洁能源，并通过我们的家用太阳能和电池存储系统减少他们的碳排放，而我们才刚刚开始。我们致力于寻找更多的方法使家庭电气化，并使所有美国人能够采取行动应对气候变化，降低能源成本，并获得能源独立。我们很自豪能够通过与其他可持续发展领导者一起签署气候承诺来证明这一承诺。”
                    《气候宣言》还邀约了几家之前通过20亿美元气候宣言基金(Climate Pledge Fund)获得投资的公司，该基金是亚马逊的企业风险投资基金，投资于可以帮助加快实现《气候宣言》的公司。这些公司包括电动航空航天公司BETA Technologies和可再生燃料技术公司Infinium，这两家公司都旨在支持全球交通部门的脱碳努力。2020年，该部门的碳排放量约为73亿公吨。近13%的签署者代表运输、航空和物流部门，这发出了一个重要信号，即这一关键部门对有助于减少碳排放的产品和服务的需求将快速增长。
                </p>
                <div class="img">
                    <h3>目前亚马逊的气候承诺友好认证计划包括2个亚马逊官方认证以及43个外部公司认证</h3>
                    <img src="@/assets/aws.jpg" style="width: 600px" />
                </div>
            </div>
        </div>
        <div class="asimg">
            <img src="@/assets/undraw_Blooming_re_2kc4.png"/>
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
    color: #323232;
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

@media screen and (max-width: 750px) {
    .approach-box-item {
        width: 100% !important;
        font-size: 20px;
        line-height: 35px;
    }

    .approach-t {
        width: 80%;
        padding: 160px 0;
    }

    .approach-t img {
        width: 70%;
        margin-top: 20px;
    }

    .approach-box-item img {
        width: 100%;
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
    width: 70%;
    margin: 0 auto;
    text-align: left;
}

.img {
    margin: 0 auto;
    text-align: center;
    width: 600px;
    padding-top: 30px;
}

.asimg {
    background: white;
    text-align: center;
    padding: 50px 0;
}

.asimg img {
    width: 200px;
}
</style>

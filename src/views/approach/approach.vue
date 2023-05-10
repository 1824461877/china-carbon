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

</style>

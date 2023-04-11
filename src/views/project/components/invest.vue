<template>
    <div class="invest">
        <img style="width: 45%" src="@/assets/undraw_empty_street_re_atjq.svg"/>
        <h1>通过以下方式实现碳资产投资收益</h1>
        <div class="invest-list">
            <div class="invest-box">
                <div class="invest-box-img">
                    <img src="@/assets/manage_project.svg"/>
                </div>
                <p>开设账户</p>
            </div>
            <div class="invest-box">
                <div class="invest-box-img">
                    <img src="@/assets/optimize_project.svg"/>
                </div>
                <p>购入资产</p>
            </div>
            <div class="invest-box">
                <div class="invest-box-img">
                    <img src="@/assets/diversified_project.svg"/>
                </div>
                <p>销售询价</p>
            </div>
            <div class="invest-box">
                <div class="invest-box-img">
                    <img src="@/assets/affordable_project.svg"/>
                </div>
                <p>售出资产</p>
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

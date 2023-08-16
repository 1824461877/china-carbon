<template>
    <div class="bottom">
        <div class="bottom-info">
            <div class="bottom-logo">
                <p>H N C E X</p>
            </div>
            <div class="lx-box">
                <div class="lx">
                    <p class="lx-t"> - 关于我们 - </p>
                    <p class="b-des">联系我们</p>
                    <p class="b-des">关于我们</p>
                    <p class="b-des">碳排计划</p>
                    <p class="b-des">安全问题反馈</p>
                </div>
                <div class="lx">
                    <p class="lx-t"> - 联系我们 - </p>
                    <p class="b-des">联系地址：海南省海口市美兰区国兴大道5号海南大厦25层2212A-1室03号</p>
                    <p class="b-des">工作时间: 周一至周五 9:00-20:00</p>
<!--                    <p class="b-des">客服邮箱: </p>-->
                </div>
            </div>
            <div class="ICP">
                <p class="b-des">2023-2024 琼ICP备2023002595号 版权所有 海南深石碳数字通证有限公司 琼ICP备2023002595号-1</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'bottom-mode',
    data() {
        return {
            bg: "bg.jpg",
        }
    }
}
</script>

<style scoped>
.bottom {
    background: #25403b;
    color: white;
    font-weight: 600;
    justify-content: space-between;
    padding: 3% 8% 0 8%;
    border-top: 10px solid #49776f;
    flex-wrap: wrap;
}

.bottom-info {
    font-size: 17px;
}

.bottom-logo {
    display: flex;
    align-items: center;
}

.b-des {
    font-size: 13px;
}

.bottom-logo img {
    height: 30px;
    margin: 0 5px;
}

.ICP {
    margin-top: 40px;
    display: flex;
    width: 100% !important;
    border-top: 1px solid #adacac;
}

.ICP p {
    margin-right: 5px;
    color: #adacac;
    font-weight: 300;
}

.lx-box {
    display: flex;
}

.lx {
    font-weight: 400;
    color: #adacac;
    margin-left: 30px;
    margin-top: 20px;
    min-width: 90px;
    margin-right: 30px;
}

.lx-t {
    margin-left: -10px !important;
    color: white;
    font-size: 14px;
}
</style>

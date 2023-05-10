<template>
    <div class="common">
        <div class="common-title">
            <h1>常见问题</h1>
        </div>
        <div class="common-collapse">
            <el-collapse v-model="activeNames" @change="handleChange" accordion>
                <el-collapse-item title="我们如何与注册用户联系？" name="1">
                    <div>
                        我们将通过您注册的邮箱或手机号码，定期推送邮件或短信息。如您觉得不需要，可点击退订按钮以取消。
                    </div>
                </el-collapse-item>
                <el-collapse-item title="如何让朋友知道我已抵消自己的碳足迹？" name="2">
                    <div>
                        您可在个人抵消凭证（英文）上点击“分享Share”到微信等社交工具。如需中文凭证，本网站可对应一键生成。
                    </div>
                </el-collapse-item>
                <el-collapse-item title="如何让朋友知道我的投资收益？" name="3">
                    <div>
                        您可在个人账户中的投资收益页面上点击“分享Share”到微信等社交工具。
                    </div>
                </el-collapse-item>
                <el-collapse-item title="我们是什么样的商业模式？" name="4">
                    <div>
                        您支付金额的 80% 会成为我们从国际市场中的采购成本，剩余部分为平台运营成本。
                    </div>
                </el-collapse-item>
            </el-collapse>
        </div>
        <div class="common-help">
            <img src="@/assets/undraw_Personal_info_re_ur1n.png"/>
            <h2>我们都有责任发挥作用。 今天就采取气候行动。</h2>
            <div class="common-button">让我们开始吧</div>
        </div>
    </div>
    <bottom></bottom>
</template>

<script>
import bottom from "../../components/bottom.vue"

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "common",
    data() {
        return {
            activeName: 1,
        }
    },
    components:{
        bottom:bottom
    }
}
</script>

<style scoped>
.common {
    color: #323232;
    width: 100%;
    background: white;
    padding: 30px 0 150px 0;
}

.common h1 {
    margin-bottom: 30px;
}

.common h2 {
    padding: 0;
    margin: 0;
}

.common-collapse {
    width: 60%;
    margin: 0 auto;
}

.common-title {
    background: #365952;
    height: 230px;
    width: 350px;
    display: flex;
    justify-content: center;
    color: white;
    margin: -190px auto 50px auto;
    border: 10px solid #387065;
    align-items: flex-end;
}

.common-desc {
    margin: -20px 0 60px 0;
}

.common-help {
    margin-top: 100px;
}

.common-help img {
    width: 40vw;
}

.common-button {
    background: #365952;
    width: 120px;
    padding: 15px;
    margin: 30px auto;
    cursor: pointer;
    font-weight: 600;
    transition: transform 0.2s;
    color: white;
}

.common-button:hover {
    transform: scale(1.1, 1.1);
}

@media screen and (max-width: 750px) {
    .common-title {
        width: 200px !important;
        font-size: 3vw;
    }

    .common-help {
        padding: 0 40px;
    }

    .common-collapse {
        width: 85%;
    }
}
</style>

<style>
.el-collapse-item__header {
    font-weight: 600 !important;
    font-size: 15px !important;
    padding: 5px !important;
}

.el-collapse-item__content {
    text-align: left !important;
    font-size: 15px !important;
}
</style>

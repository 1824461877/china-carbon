<template>
    <div class="select">
        <h1>通过以下方式实现碳资产投资收益</h1>
        <p class="select-des">
            每个项目在货架上都只有一定量的产品，如遇售罄，则需要等待产品重新上架
        </p>
        <div class="select-box">
            <img src="@/assets/buen-jardin-detailed-map.jpg"/>
            <p>↑ 显示了孟加拉国的大气环境。</p>
            <div class="select-box-list">
                <div class="select-box-info">
                    <h1>减排量可计量</h1>
                    <p>
                        我们的项目以同行评审的科学为基础，以确保碳抵消量的准确性。
                        以植树项目为例：我们通过测量项目的一些参数（例如树干的直径）来计算抵消的碳量，这种关系明确且直接。
                        不同的项目有不同的总碳抵消计算方法。比如，社区植树项目每18个月测量一次地面上的树干，并将测量结果与GPS坐标和种植农民的姓名联系起来。
                        比如，森林保护项目则从科学文献中收集数据，再通过分析全球森林观察的卫星图像来检测森林损失。
                        我们只有在对项目的监控计划有信心的情况下才会与项目合作，因为每个项目都有其独特的要求。
                    </p>
                </div>
                <div class="select-box-option">
                    <h3>我们如何选择我们的项目</h3>
                    <ol>
                        <li class="s-s">{{ list.a }}</li>
                        <li>{{ list.b }}</li>
                        <li>{{ list.c }}</li>
                        <li>{{ list.d }}</li>
                    </ol>
                </div>
            </div>
        </div>
        <div class="select-box">
            <img src="@/assets/Forest-grass-fog-dawn.jpg"/>
            <p>↑ 俄罗斯森林背景</p>
            <div class="select-box-list">
                <div class="select-box-info">
                    <h1>预留足够的缓冲量</h1>
                    <p>
                        对于预期有长期减碳能力的项目，比如植树造林，我们确保采取了适当的保护措施，以避免这些树木被砍伐、焚烧或以其他方式遭受破坏。即使存在不可避免的风险，我们也会设置一个“缓冲区”，质押一定数量的指标，以平抑这些风险。一般来说，大多数植树项目需要10-20%的缓冲区。但在野火或疾病风险较高的地区，缓冲区可能需要更大的范围。
                    </p>
                </div>
                <div class="select-box-option">
                    <h3>我们如何选择我们的项目</h3>
                    <ol>
                        <li>{{ list.a }}</li>
                        <li class="s-s">{{ list.b }}</li>
                        <li>{{ list.c }}</li>
                        <li>{{ list.d }}</li>
                    </ol>
                </div>
            </div>
        </div>
        <div class="select-box">
            <img src="@/assets/wom.jpg"/>
            <p>↑ 这些整齐排列的木头。</p>
            <div class="select-box-list">
                <div class="select-box-info">
                    <h1>超出商业行为的额外性</h1>
                    <p>
                        如果一个项目在没有碳指标资助的情况下仍能够实现盈利，那么项目将无法获得碳指标。例如，如果土地所有者已经保护他们的森林数十年，期间没有砍伐许可或者计划的话，将不会获得碳指标。因为这意味着项目本身就是商业行为或者行政要求，不需要碳指标收益支持就能维持。同样，如今的大多数国家，可再生能源项目都具有盈利能力，因此，一般情况下，这类项目都不会获得碳指标。
                        碳指标的签发及销售所得的资金将用于购买设备和支付团队成员的费用，以维持这些项目的稳定实施。
                    </p>
                </div>
                <div class="select-box-option">
                    <h3>我们如何选择我们的项目</h3>
                    <ol>
                        <li>{{ list.a }}</li>
                        <li>{{ list.b }}</li>
                        <li class="s-s">{{ list.c }}</li>
                        <li>{{ list.d }}</li>
                    </ol>
                </div>
            </div>
        </div>
        <div class="select-box">
            <img src="@/assets/led.jpg"/>
            <p>↑ 对于大多数项目，碳信用额度的唯一购买者之一，从而限制了重复计算信用额度的风险。</p>
            <div class="select-box-list">
                <div class="select-box-info">
                    <h1>无重复计算</h1>
                    <p>
                        当您持有若干数量碳指标，则其他人无法获得此同一字段的指标。这意味着，如果任何公司不能通过您所持有或消耗的碳指标实现抵消，除非经您授权。
                        为了确保不会出现重复计算，我们将在充分隐私保护的情况下，公开每个被购买碳资产的持有情况，以及注销的情况。
                    </p>
                </div>
                <div class="select-box-option">
                    <h3>我们如何选择我们的项目</h3>
                    <ol>
                        <li>{{ list.a }}</li>
                        <li>{{ list.b }}</li>
                        <li>{{ list.c }}</li>
                        <li class="s-s">{{ list.d }}</li>
                    </ol>
                </div>
            </div>
        </div>
        <div class="select-common">
            <div class="common-help">
                <img src="@/assets/undraw_Personal_info_re_ur1n.png"/>
                <h2>气候危机需要采取大规模行动，您可以从抵消您的碳足迹来改变现状</h2>
                <p>单靠碳抵消并不能结束气候危机，但计算和抵消您的碳足迹是改变现状的好方法。</p>
                <div class="common-button" @click="let_me_do">让我们开始吧</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "select",
    data() {
        return {
            list: {
                a: "减排量可计量",
                b: "预留足够的缓冲量",
                c: "超出商业行为的额外性",
                d: "无重复计算"
            }
        }
    },
    methods: {
        let_me_do() {
            this.$router.push({path: '/offset'})
        }
    }
}
</script>

<style scoped>
.select {
    padding: 130px 80px;
}

.select-des {
    width: 45%;
    font-size: 18px;
    margin: 40px auto 60px auto;
}

.s-s {
    color: #355a53;
    font-weight: 600;
}

.select-box img {
    max-height: 450px;
    width: 100%;
    object-fit: cover;
}

.select-box-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    text-align: left;
    padding: 100px 30px 140px 30px;
    align-items: center;
    background: white;
    margin-top: -57px;
}

.select-box-info {
    width: 45%;
}

.select-box-info p {
    font-size: 18px;
    color: #282828;
    line-height: 38px;
}

.common-help {
    padding: 60px 0;
    border-top: 5px #355a53 dashed;
}

.common-help img {
    width: 40vw;
}

.common-button {
    background: #365952;
    cursor: pointer;
    width: 118px;
    padding: 15px;
    margin: 30px auto;
    font-weight: 600;
    color: white;
}

.select-box-option {
    width: 250px;
    padding-left: 18px;
}

.select-box-option li {
    font-size: 17px;
    margin-top: 7px;
}

.select-common {
    background: white;
}

@media screen and (max-width: 1200px) {
    .select {
        padding: 50px;
    }
}

@media screen and (max-width: 800px) {
    .select-box-list {
        flex-direction: column-reverse !important;
    }

    .select {
        padding: 50px 0;
    }

    .select-box-list {
        /*align-items: baseline !important;*/
    }

    .select-box-info {
        width: 100% !important;
    }

    .select-box-option {
        margin-bottom: 30px;
        width: 90%;
        padding: 10px 5%;
        background: #355a530f;
    }
}
</style>

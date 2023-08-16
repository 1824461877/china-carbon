<template>
    <headers></headers>
    <div class="project">
        <h1 class="project-tit">拯救我们的地球，改变人生的项目</h1>
        <img src="@/assets/undraw_counting_stars_re_smvv.svg"/>
        <ul class="project-tit-box">
            <li>我们的项目</li>
            <li>气候投资组</li>
            <li>选择我们</li>
        </ul>
        <div class="project-box-item">
            <h2>可持续发展目标呼吁所有国家行动起来，在促进经济繁荣的同时保护地球。</h2>
            <p class="p-b-des">
                可持续发展目标呼吁所有国家（不论该国是贫穷、富裕还是中等收入）行动起来，在促进经济繁荣的同时保护地球。目标指出，消除贫困必须与一系列战略齐头并进，包括促进经济增长，解决教育、卫生、社会保护和就业机会的社会需求，遏制气候变化和保护环境。</p>
            <div class="pbi-box">
                <div class="pib-right">
                    <h1>思瑞恩科技的太阳能热能</h1>
                    <p>
                        该项目涉及向河南省镇平县的农村家庭分发50000个太阳能炊具。镇平的大多数农村家庭使用燃煤炉灶烧水和做饭。
                        使用堆芯炉灶不仅会导致大量温室气体排放，还会造成空气污染，这对居民的健康构成了高风险。此外，使用核心炉灶需要家庭花钱购买煤炭。该项目活动将使农村家庭能够有效地用太阳能替代日常烹饪和沸水中使用的化石燃料（煤炭），避免化石燃料消耗产生的二氧化碳排放。
                    </p>
                    <div class="pib-right-option">
                        <div class="pib-right-o-item">
                            <a>√</a>良好健康与福祉
                        </div>
                        <div class="pib-right-o-item">
                            <a>√</a>性别平等工作现状
                        </div>
                        <div class="pib-right-o-item">
                            <a>√</a>体面的就业机会
                        </div>
                        <div class="pib-right-o-item">
                            <a>√</a>应对气候变化
                        </div>
                    </div>
                    <div class="pib-right-more" @click="more('1001')">
                        了解更多
                    </div>
                </div>
                <img src="@/assets/re.png"/>
            </div>
            <div class="pbi-box">
                <img src="@/assets/project-1.png"/>
                <div class="pib-right">
                    <h1>土耳其的垃圾焚烧发电设施</h1>
                    <p>
                        该项目涉及在Odayeri和Komurcoda垃圾填埋场开发和建设两个垃圾焚烧发电设施。
                        该项目的目标是建造、运营和维护两个垃圾填埋场废物转化能源系统，包括垃圾填埋气（LFG）收集系统、燃烧站和与发电机相连的燃气发动机以发电。
                        燃气发动机将燃烧LFG来发电，任何多余的LFG都将燃烧。</p>
                    <div class="pib-right-option">
                        <div class="pib-right-o-item">
                            <a>√</a>清洁饮用水和卫生设施
                        </div>
                        <div class="pib-right-o-item">
                            <a>√</a>清洁能源和可再生能源
                        </div>
                        <div class="pib-right-o-item">
                            <a>√</a>体面的就业机会
                        </div>
                        <div class="pib-right-o-item">
                            <a>√</a>应对气候变化
                        </div>
                    </div>
                    <div class="pib-right-more" @click="more('1002')">
                        了解更多
                    </div>
                </div>
            </div>
            <div class="pbi-box">
                <div class="pib-right">
                    <h1>厄立特里亚的减碳供水</h1>
                    <p>
                        厄立特里亚的 Zoba Debub社区钻孔项目符合黄金标准方法论技术和实践，以取代2.0版的分散热能消耗。该项目将支持使用钻孔技术为Zoba
                        Debub的数千户家庭提供安全用水。通过提供安全的水，从而消除了烧水的需要，该项目将确保家庭在水净化过程中消耗更少的木柴，从而减少二氧化碳。
                    </p>
                    <div class="pib-right-option">
                        <div class="pib-right-o-item">
                            <a>√</a>良好健康与福祉
                        </div>
                        <div class="pib-right-o-item">
                            <a>√</a>性别平等工作现状
                        </div>
                        <div class="pib-right-o-item">
                            <a>√</a>体面的就业机会
                        </div>
                        <div class="pib-right-o-item">
                            <a>√</a>应对气候变化
                        </div>
                    </div>
                    <div class="pib-right-more" @click="more('1003')">
                        了解更多
                    </div>
                </div>
                <img src="@/assets/future-forest.png"/>
            </div>
            <div class="pbi-box">
                <img src="@/assets/mt.jpg"/>
                <div class="pib-right">
                    <h1>俄罗斯联邦的可持续资源管理</h1>
                    <p>
                        该项目的主要目标是在工厂的中央能源发电中用生物质取代化石燃料（主要是泥炭和重油），实施木材废物的区域管理系统，并促进FSC认证的原材料供应森林管理（证书GFA-FM/COC-1257和GFA-FM/COC-001111）。
                        因此，该项目通过在中央供热过程中用二氧化碳中性生物质代替常用的化石燃料来减少温室气体排放，并通过实施区域废物管理系统来避免甲烷排放。
                        热能的产生是利用现代、高效和可靠的生物质锅炉，使用天然丰富的能源。FSC和废物管理改善了整体环境状况。</p>
                    <div class="pib-right-option">
                        <div class="pib-right-o-item">
                            <a>√</a>廉价和清洁能源
                        </div>
                        <div class="pib-right-o-item">
                            <a>√</a>体面的就业机会
                        </div>
                        <div class="pib-right-o-item">
                            <a>√</a>应对气候变化
                        </div>
                    </div>
                    <div class="pib-right-more" @click="more('1004')">
                        了解更多
                    </div>
                </div>
            </div>
            <div class="pbi-box">
                <div class="pib-right">
                    <h1>中国双胞胎的动物废弃物管理系统</h1>
                    <p>
                        广东省双胞胎畜禽粪便管理系统温室气体减排项目向双胞胎畜牧集团有限公司（以下简称“双胞胎”）旗下引入了新的动物废弃物管理系统。
                        每个附属养猪场将安装一个动物粪便管理系统。项目活动的目的是处理粪便和废水，以避免基准无盖厌氧泻湖中产生的甲烷排放。
                        使用冲洗系统自动收集粪便。所有的粪便和废水都被收集起来，然后先进行分离。分离出的固体将在好氧堆肥系统中进行处理以生产肥料，肥料将免费分配给周围的农民，以改善农民的生活条件。
                        分离的液体将通过厌氧消化进行处理，处理过程中产生的沼气将被捕获用于发电，剩余的沼气（如有）将被燃烧。厌氧消化产生的污泥将与固体一起通过好氧堆肥进行处理，出水将用作液体有机肥料，用于农业灌溉。
                    </p>
                    <div class="pib-right-option">
                        <div class="pib-right-o-item">
                            <a>√</a>廉价和清洁能源
                        </div>
                        <div class="pib-right-o-item">
                            <a>√</a>体面的就业机会
                        </div>
                        <div class="pib-right-o-item">
                            <a>√</a>应对气候变化
                        </div>
                    </div>
                    <div class="pib-right-more" @click="more('1005')">
                        了解更多
                    </div>
                </div>
                <img src="@/assets/pig.jpg"/>
            </div>
            <div class="pbi-box">
                <img src="@/assets/clean-cooking-fuel-image3.jpg"/>
                <div class="pib-right">
                    <h1>非洲卢旺达的碳治理方案</h1>
                    <p>
                        该项目将在需要时通过钻孔和化学消毒为卢旺达人民提供安全用水。
                        它将减少不可再生生物质的消耗，以保护森林生态系统并减少相关的温室气体排放。
                        此外，该项目将改善水质和室内空气质量。
                    </p>
                    <div class="pib-right-option">
                        <div class="pib-right-o-item">
                            <a>√</a>良好健康与福祉
                        </div>
                        <div class="pib-right-o-item">
                            <a>√</a>性别平等工作现状
                        </div>
                        <div class="pib-right-o-item">
                            <a>√</a>清洁饮用水和卫生设施
                        </div>
                        <div class="pib-right-o-item">
                            <a>√</a>应对气候变化
                        </div>
                    </div>
                    <div class="pib-right-more" @click="more('1006')">
                        了解更多
                    </div>
                </div>
            </div>
            <div class="pbi-box">
                <div class="pib-right">
                    <h1>孟加拉国的碳治理方案</h1>
                    <p>
                        该项目将在需要时通过钻孔和化学消毒为孟加拉国人民提供安全用水。
                        它将减少不可再生生物质的消耗，以保护森林生态系统并减少相关的温室气体排放。
                        此外，该项目将改善水质和室内空气质量。
                    </p>
                    <div class="pib-right-option">
                        <div class="pib-right-o-item">
                            <a>√</a>廉价和清洁能源
                        </div>
                        <div class="pib-right-o-item">
                            <a>√</a>体面的就业机会
                        </div>
                        <div class="pib-right-o-item">
                            <a>√</a>应对气候变化
                        </div>
                    </div>
                    <div class="pib-right-more" @click="more('1007')">
                        了解更多
                    </div>
                </div>
                <img src="@/assets/mjl.jpg"/>
            </div>

        </div>
        <invest></invest>
        <selects></selects>
    </div>
    <bottoms></bottoms>
</template>

<script>
import header from "../components/header.vue"
import bottom from "../components/bottom.vue"
import invest from "./components/invest.vue"
import select from "./components/select.vue"

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "project",
    components: {
        headers: header,
        bottoms: bottom,
        invest: invest,
        selects: select,
    },
    data() {
        return {
            show: false
        }
    },
    methods: {
        more(name) {
            this.$router.push({path: '/project/more/' + name,params:{key:name}})
        }
    }
}
</script>

<style scoped>
.project {
    color: #323232;
    padding: 180px 5% 0 5%;
    text-align: center;
    animation: project-show 0.3s;
    animation-fill-mode: forwards;
}

@keyframes project-show {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

.project p {
    font-size: 18px;
    color: #4e4e4e;
    line-height: 35px;
}

.project img {
    width: 45vw;
}

.project-tit-box {
    display: flex;
    justify-content: space-around;
    list-style: none;
    background: #284641;
    max-width: 530px;
    margin: 0 auto 0 auto;
    padding: 0;
    color: white;
    cursor: pointer;
}

.project-box-item h2 {
    margin: 60px auto 30px auto;
}

.p-b-des {
    width: 80%;
    margin: 0 auto;
    text-align: left;
}

.project-tit-box li {
    padding: 15px 10px;
}

.jim-man {
    width: 70%;
    max-width: 900px;
    margin-top: 50px;
}

.pbi-box {
    display: flex;
    width: 100%;
    margin: 70px auto;
    padding: 20px;
    background: white;
    box-shadow: 1px 1px 15px 1px #eeeeee;
}

.pbi-box img {
    max-width: 400px;
    width: 28vw;
    object-fit: cover;
}

.pbi-box h1 {
    margin: 0;
    padding-bottom: 25px;
    border-bottom: 1px solid red;
    border-bottom: 1px solid #9b9b9b;
}

.pib-right {
    text-align: left;
    padding: 40px;
}

.pib-right-option {
    display: flex;
    flex-wrap: wrap;
}

.pib-right-o-item {
    width: 45%;
    margin: 2.5%;
    color: #25403b;
    font-weight: 600;
}

.pib-right-o-item a {
    background: #355a53;
    padding: 5px 10px;
    color: white;
    font-size: 20px;
    margin-right: 10px;
}

.pib-right-more {
    padding: 15px 10px;
    background: #365952;
    width: 150px;
    text-align: center;
    color: white;
    cursor: pointer;
    margin-top: 30px;
}

.project-box-item {
    width: 80%;
    margin: 0 auto;
}

@media screen and (max-width: 1100px) {
    .project-box-item {
        width: 100%;
    }

    .p-b-des {
        width: 100%;
    }

    .pbi-box {
        flex-wrap: wrap;
    }

    .pib-right {
        padding: 40px 0;
    }

    .pbi-box {
        width: auto;
    }

    .pbi-box img {
        width: 100%;
        margin: 0 auto;
        max-width: 100%;
    }

    .pib-right-more {
        margin: 50px auto -30px auto;
        width: 90%;
    }

    .pbi-box:nth-of-type(2n+1) {
        flex-direction: column-reverse;
    }
}

@media screen and (max-width: 1000px) {
    .pib-right-o-item {
        width: 100%;
    }
}
</style>

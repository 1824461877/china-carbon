<template>
    <headers></headers>
    <div class="more">
        <div class="more-gsf-item-bd">
            <div class="more-gsf-item-tds">
                <div class="more-gsf-item-tit" style="width: 50%">
                    <h1> Gold Standard 碳信用额</h1>
                    <p style="line-height: 30px">在减少气候影响后，抵消是减少全球排放并为世界各地社区创造可持续发展效益的有效方法。为什么不志存高远呢？实现气候+，而不是简单地实现碳中和，并抵消比您的足迹更多的碳。</p>
                </div>
                <div class="img">
                    <img src="@/assets/gsf1.png" style="width: 230px;height: 140px" />
                    <!-- <img src="@/assets/gsf2.png" style="width: 230px;height: 100px" /> -->
                </div>
            </div>
            <div class="more-gsf-item">
                <div class="more-gsf-box" v-for="item in gsf_p_info">
                    <div class="more-gsf-box-top" :style="{backgroundImage:'url('+item.img+')'}">
                        <div class="more-gsf-box-info-tit"><h4>{{item.tit}}</h4></div>
                    </div>
                    <div class="more-gsf-box-info">
                        <div class="more-gsf-box-info-price">{{item.price}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <bottoms></bottoms>
</template>

<script>
import {GsfProject} from '@/utils/gsf_project.js'
import header from "@/views/components/header.vue";
import bottom from "@/views/components/bottom.vue";

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "learn_more",
    components: {
        headers: header,
        bottoms: bottom,
    },
    data() {
        return {
            myChart: "",
            gsf_p_info: GsfProject
        }
    },
    methods:{

    }
}
</script>

<style scoped>
.more {
    padding: 120px 20px;
}
.more-gsf-item {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.more-gsf-box {
    margin: 20px 15px;
    height: 280px;
    width: 310px;
    background: white;
    cursor: pointer;
}

.more-gsf-box-info div {
    padding: 10px;
    text-align: center;
}

.more-gsf-box-top {
    height: 230px;
    display: flex;
    background-repeat: no-repeat;
    background-size: cover;
    flex-direction: column-reverse;
}

.more-gsf-box-info-price {
    height: 40px;
    display: flex;
    justify-content: center;
    background: #203430;
    color: white;
    align-items: center;
    font-size: 13px;
}

.more-gsf-box-info-tit {
    text-align: center;
    height: 80px;
    padding: 5px;
    background: #131313c4;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
}

.more-gsf-item-bd {
    /* width: 1080px; */
    margin: 0 auto;
    padding-bottom: 40px;
    background: white;
}

.more-gsf-item-tds {
    display: flex;
    justify-content: space-between;
}

.img img:nth-of-type(1) {
    margin-top: 60px;
    position: relative;
    right: 90px;
    box-shadow: 1px 4px 6px 0px #e7e7e7;
}

.img img:nth-of-type(2) {
    position: relative;
    right: 60px;
    top: 50px;
    box-shadow: 1px 4px 6px 0px #e7e7e7;
}

.more-gsf-item-tit {
    padding: 40px;
}

@media screen and (max-width: 800px) {
    .more-gsf-box {
        margin: 20px 15px;
        height: 280px;
        width: 100%;
        background: white;
        cursor: pointer;
    }

    .more-gsf-item-bd {
        width: 100%;
    }

    .more-gsf-item-tds {
        flex-wrap: wrap;
    }

    .more-gsf-item-tit {
        width: 100% !important;
        padding: 20px !important;
    }

    .img img {
        right: 0 !important;
        left: 5%;
        top: 0 !important;
        margin: 0 auto !important;
        width: 90% !important;
        height: auto !important;
    }
}
</style>

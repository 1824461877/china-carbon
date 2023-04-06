<template>
    <headers></headers>
    <div class="index" :class="show?'':'index-show'">
        <div class="index-left">
            <div class="index-box1 i-box i-box-t">
                <div class="sm-box">
                    <div class="sm-box-s sm-box-ss"></div>
                </div>
            </div>
            <div class="index-box1 i-box i-box-z">
                <div class="sm-box">
                    <div class="sm-box-s sm-box-ss"></div>
                </div>
            </div>
            <div class="index-box1 i-box i-box-b">
                <div class="sm-box">
                    <div class="sm-box sm-box-ss">
                    </div>
                </div>
            </div>
        </div>
        <div class="index-right">
            <h1><a>个人碳中和</a>从你我开始</h1>
            <p> Carbon neutrality starts with you and me</p>
            <h2> 保护气候做贡献 -- </h2>
            <p style="font-size: 1.3vw"> Contribute to climate protection -- </p>
            <div class="index-right-info">
                <div>
                    <p>10+<span>个</span></p>
                    <p>自愿减排项目</p>
                </div>
                <div>
                    <p>10000+<span>吨</span></p>
                    <p>碳指标</p>
                </div>
                <div>
                    <p>50000+</p>
                    <p>注册用户</p>
                </div>
                <div>
                    <p>5000+</p>
                    <p>活跃用户</p>
                </div>
            </div>
            <div class="index-button" @click="show=true">
                <div class="index-button-s">
                    <div class="index-button-ss">
                        点击这里开始
                    </div>
                </div>
            </div>
        </div>
        <actions :class="show?'act-show':''"></actions>
    </div>
</template>

<script>
import header from "../components/header.vue"
import action from "./components/action.vue"

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "index",
    components: {
        headers: header,
        actions: action,
    },
    data() {
        return {
            show: false
        }
    },
}
</script>

<style scoped>
.index {
    height: 100%;
    width: 100%;
    position: absolute;
}

@keyframes act-show-an {
    from {
        top: 100%
    }
    to {
        top: 0;
    }
}

@media screen and (max-width: 550px) {
    .index-left {
        width: 0 !important;
    }

    .index-right {
        width: 94% !important;
        align-items: center !important;
        flex-wrap: unset !important;
    }

    .index h1 {
        font-size: 8vw !important;
        text-align: left;
    }

    .index-button-s {
        background: #d0dac573 !important;
    }

    .index p {
        font-size: 3vw !important;
    }

    .index h2 {
        margin-top: 45px !important;
        font-size: 6vw !important;
    }

    .index-right-info {
        flex-wrap: wrap;
    }

    .index-right-info div {
        width: 50% !important;
        margin: 15px 0 !important;
    }

    .index-button-s {
        margin-top: 40px !important;
    }

    .index-button {
        width: 200px !important;
    }

    .index-right-info p {
        font-size: 6.7vw !important;
    }

    .index-right-info p:nth-of-type(2) {
        font-size: 4.5vw !important;
    }

    .index-button-ss {
        font-size: 3.7vw !important;
        font-weight: 300;
    }

    .index-right-info span {
        font-size: 4.5vw !important;
    }
}

.act-show {
    animation: act-show-an 0.4s;
    animation-fill-mode: forwards;
}

.index-show {
    overflow: hidden;
}

.index-left {
    height: 100%;
    float: left;
    width: 30%;
}

.index-right {
    float: left;
    width: 60%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: end;
    padding: 8% 3%;
    position: relative;
    z-index: 99;
}

.index-right h1 {
    font-size: 45px;
    margin: 80px 0 3px 0;
    font-weight: 400;
}

.index-right p {
    font-weight: 600;
    padding: 0;
    margin: 0;
    font-size: 1.7vw;
}

.index-right h2 {
    font-size: 40px;
    margin: 70px 0 0 0;
    font-weight: 400;
}

.index-right h5 {
    font-size: 20px;
    margin: 25px 0 0 0;
    font-weight: 400;
}

.index-right a {
    color: #387336eb;
    font-weight: 600;
}

.index-right-info {
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: right;
    flex-wrap: wrap;
}

.index-right-info div {
    text-align: center;
    margin: 0 15px;
    color: #387336eb;
}

.index-right-info p {
    font-size: 30px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
}

.index-right-info p:nth-of-type(2) {
    font-size: 14px;
    color: #242424;
}

.i-box-t {
    left: -30vw !important;
    bottom: 7vh !important;
    animation: box-t-an 0.7s !important;
    animation-fill-mode: forwards !important;
}

.i-box-z {
    transform: rotate(-40deg);
    animation: box-z-an 0.6s !important;
    animation-fill-mode: forwards !important;
}

.i-box-b {
    transform: rotate(-15deg);
    width: 70% !important;
    height: 37vw !important;
    position: fixed;
    bottom: -20vw !important;
    left: -9vw !important;
    animation: box-b-an 0.5s !important;
    animation-fill-mode: forwards !important;
}


@keyframes box-t-an {
    0% {
        transform-origin: left bottom;
        transform: rotate(-100deg);
    }
    100% {
        transform: rotate(-70deg);
    }
}

@keyframes box-z-an {
    0% {
        transform-origin: left bottom;
        transform: rotate(-70deg);
    }
    100% {

        transform: rotate(-40deg);
    }
}

@keyframes box-b-an {
    0% {
        transform-origin: left bottom;
        transform: rotate(-40deg);
    }
    100% {
        transform: rotate(-15deg);
    }
}

.i-box {
    background: #9fbf7c;
    width: 63vw;
    height: 30vw;
    display: flex;
    border-radius: 50%;
    align-items: center;
    position: fixed;
    bottom: -20px;
    box-shadow: 1px -1px 15px 1px #00000045;
    left: -18vw;
}


.sm-box {
    height: 70%;
    width: 86%;
    border-radius: 50%;
    display: flex;
    align-items: center;
    background: #63934a;
}

.sm-box-ss {
    height: 70%;
    width: 86%;
    border-radius: 50%;
    background: #3c7336;
}

.index-button {
    width: 300px;
}

.index-button-s {
    background: #d0dac573;
    padding: 10px;
    margin-top: 50px;
    border-radius: 15px;
    transition: background 0.2s, transform 0.2s;
}

.index-right-info span {
    font-size: 25px;
}

.index-button-ss {
    background: #63934a;
    text-align: center;
    font-size: 17px;
    padding: 10px;
    font-weight: 600;
    color: white;
    border-radius: 10px;
    cursor: pointer;
    transition: background 0.2s;
}

.index-button-s:hover .index-button-ss {
    background: #3c7336;
}

.index-button-s:hover {
    background: #38733670;
    transform: scale(0.9, 0.9);
}

</style>

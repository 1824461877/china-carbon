<template>
    <div class="stricture">
        <h1>所有信息都接受公众监督</h1>
        <p>为投资者争取最大利益</p>
        <div class="stricture-box">
            <div class="stricture-box-item">
                <img src="@/assets/undraw_fingerprint_login_re_t71l.svg"/>
                <h3>公开碳指标的持有账户尾号</h3>
                <p>确保未在平台上重复持有</p>
            </div>
            <div class="stricture-box-item">
                <img src="@/assets/undraw_appreciate_it_re_yc8h.svg"/>
                <h3>所公开所有碳指标唯一国际串码</h3>
                <p>确保碳指标未被注销</p>
            </div>
            <div class="stricture-box-item">
                <img src="@/assets/undraw_photo_session_re_c0cp.svg"/>
                <h3>公开碳指标国际抵消凭证</h3>
                <p>让碳抵消行为全球看得见</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "stricture",
    data() {
        return {}
    }
}
</script>

<style scoped>
.stricture {
    margin-top: 100px;
    background: #365952;
    width: 100%;
    z-index: 99;
    position: relative;
    padding: 40px 0 120px 0;
    cursor: pointer;
    color: white;
}

.stricture-box-item:hover {
    transform: scale(1.1, 1.1);
}

@media screen and (max-width: 750px) {
    .stricture-box {
        flex-wrap: wrap;
    }

    .stricture-box-item {
        width: 100%;
        margin-bottom: 80px !important;
    }
}

@media screen and (max-width: 750px) {
  .stricture-box {
    flex-wrap: wrap;
  }
  .stricture-box-item {
    width: 100%;
    margin-bottom: 80px !important;
  }
}

.stricture-box {
    display: flex;
    margin-top: 100px;
    justify-content: center;
}

.stricture-box img {
    height: 100px;
}

.stricture-box-item {
    margin: 0 65px;
    max-width: 300px;
    transition: transform 0.2s;
}
</style>

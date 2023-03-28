<template>
    <div class="bottom" >
        <div class="bottom-info"> © 2021 szpt 版权所有。 该项目处于测试阶段。 </div>
       <div class="bottom-info"> 使用风险自负。隐私政策使用条款 </div>
    </div>
</template>

<script>
export default {
  name: 'bottom-mode',
  data(){
    return {
        bg: "bg.jpg",
    }
  }
}
</script>

<style scoped>
    .bottom {
        background: #242424;
        color: white;
        font-size: 14px;
        display: flex;
        justify-content: space-between;
        padding: 1.5% 3%;
    }
</style>
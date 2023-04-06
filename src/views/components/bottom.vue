<template>
  <div class="bottom">
    <div class="bottom-info"> © HNCEX 版权所有。 该项目处于测试阶段。</div>
    <div class="bottom-info"> 使用风险自负。隐私政策使用条款</div>
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
  font-size: 14px;
  display: flex;
  font-weight: 600;
  justify-content: space-between;
  padding: 1.5% 3%;
  border-top: 10px solid #49776f;
}
</style>

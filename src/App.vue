<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style>
html, body {
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
    background: #f6f6f6;
    overflow-x: hidden;
}

#app {
    height: 100%;
}
</style>

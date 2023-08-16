<template>
    <headers></headers>
    <div class="wallet">
        <div class="wallet_list">
            <div class="wallet_box" v-for="item in wallet_id_list">
                <h3>{{item.name}}</h3>
                <p>余额：{{item.amount}}</p>
                <h3>{{item.wallet_id}}</h3>
            </div>
        </div>
    </div>
    <bottom></bottom>
</template>

<script>
import header from "@/views/components/header.vue"
import bottom from "@/views/components/bottom.vue";
import {wallet_list} from "@/api/hub";

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "index",
    components: {
        headers: header,
        bottom: bottom,
    },
    data() {
        return {
            wallet_id_list:[],
        }
    },
    created() {
        this.wallet_lists()
    },
    methods: {
        wallet_lists() {
            wallet_list().then(response => {
                this.wallet_id_list =  response.wallet_id_list
            })
        },
    }
}
</script>

<style scoped>
    .wallet {
        padding: 140px 50px;
    }

    .wallet_box {
        width: 300px;
        padding: 30px;
        color: white;
        margin: 20px;
        border-radius: 10px;
        background: #25403b;
        cursor: pointer;
    }

    .wallet_list {
        display: flex;
        flex-wrap: wrap;
    }
</style>
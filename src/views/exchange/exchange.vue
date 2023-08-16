<template>
  <headers></headers>
    <div class="exchange">
        <div class="exchange-b">
        <div class="exchange_title">
            <h2>个人碳资产交易所 Personal Carbon Asset Exchange</h2>
        </div>
      <div class="exchange_list_gsf">
          <el-table :data="tableData" @expand-change="on" :border="parentBorder" style="width: 100%">
              <el-table-column type="expand">
                  <template #default="props">
                      <div class="exp-box">
                          <div class="exp-info">
                              <h2 style="padding: 0">资产信息</h2>
                              <p>日期: <span>{{ props.row.day }}</span></p>
                              <p>资产代码: <span>{{ props.row.gs }}</span></p>
                              <p>国家: <span>{{ props.row.country }}</span></p>
                              <p>项目: <span>{{ props.row.project }}</span></p>
                              <p>项目类型: <span>{{ props.row.project_type }}</span></p>
                              <p>序列号: <span>{{ props.row.serial_number }}</span></p>
                              <p>credits: <span>{{ props.row.number }}</span></p>
                          </div>
<!--                          <div :id="'chartLineBox' + props.row.cid" style="width: 95%;height: 50vh;"></div>-->
                      </div>
                  </template>
              </el-table-column>
              <el-table-column prop="day" width="150" label="日期"/>
              <el-table-column prop="amount" width="150" label="金额"/>
              <el-table-column prop="project" width="200" label="项目"/>
              <el-table-column prop="gs" width="120" label="GS"/>
              <el-table-column prop="project_type" width="150" label="项目类型"/>
              <el-table-column prop="country" width="150" label="国家"/>
              <el-table-column prop=number width="100" label="credits"/>
              <el-table-column prop=serial_number width="250" label="序列号"/>
              <el-table-column fixed="right" width="80" label="操作">
                  <template #default="props">
                      <div class="d-list">
                          <div link type="primary" style="cursor: pointer" @click="buy(props.row)">购买</div>
                      </div>
                  </template>
              </el-table-column>
          </el-table>
      </div>
        <div class="trade-body" v-if="this.show">
          <div class="trade-box">
              <div class="t-tx">
                  <h2>购买碳资产</h2>
              </div>
              <div class="rows">
                  <div>GS ID</div>
                  <div>日期</div>
                  <div>Credits</div>
                  <div>Product</div>
                  <div>Serial</div>
              </div>
              <div class="rows data">
                  <div>{{ sdata.gs }}</div>
                  <div>{{ sdata.day }}</div>
                  <div>{{ sdata.number }}</div>
                  <div>{{ sdata.product }}</div>
                  <div>{{ sdata.serial }}</div>
              </div>
              <div class="trade-dr">
                  <p class="trade-c">Project Name</p>
                  <p>{{sdata.project}}</p>
              </div>
              <div class="trade-dr">
                  <p class="trade-c">Account</p>
                  <p>{{sdata.user_id}}</p>
              </div>
              <div class="trade-dr">
                  <p class="trade-c">金额</p>
                  <p>{{sdata.amount * num}}</p>
              </div>
              <div class="login-buy" v-if="!sign_in" @click="signin">
                  请登录，登录才能进行购买碳资产
              </div>
              <div class="bots" v-if="sign_in">
                <div class="trade-dr">
                    <p class="trade-c">付款钱包</p>
                    <div style="margin-left: -6px">
                    <el-select v-model="wallet_id" class="m-2" placeholder="付款钱包">
                        <el-option
                          v-for="item in wallet_id_list"
                          :key="item.name"
                          :label="item.name+':'+item.wallet_id"
                          :value="item.wallet_id"
                        />
                    </el-select>
                    </div>
                </div>
                <div class="trade-dr">
                    <p class="trade-c">购买数量</p>
                    <div style="margin-top: 10px">
                      <el-input-number v-model="num" :min="1" :max="sdata.number" />
                    </div>
                </div>
                  <div class="bs">
                      <div class="" @click="this.show = false">退出</div>
                      <div class="do" @click="asset_transactions()">购买</div>
                  </div>
              </div>
          </div>
        </div>
        </div>
    </div>
  <bottom></bottom>
</template>

<script>
import header from "@/views/components/header.vue"
import bottom from "@/views/components/bottom.vue";
import {asset_list, asset_transaction, wallet_list} from "@/api/hub";
import {ElMessage} from "element-plus";
import {h} from "vue";

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "index",
    components: {
        headers: header,
        bottom: bottom,
    },
    created() {
        this.wallet_lists()
        this.asset_lists()
    },
    methods: {
        buy(data) {
          this.sdata = data
          this.show = true
        },
        signin() {
            this.$router.push({path: '/sign_in'})
        },
        wallet_lists() {
            wallet_list().then(response => {
                if (response.code !== 99997) {
                    this.sign_in = true
                    this.wallet_id_list =  response.wallet_id_list
                }
            })
        },
        asset_lists() {
            asset_list().then(response => {
                this.tableData = response.exchange_asset_list
            })
        },
        asset_transactions() {
            let data = {
                ex_id: this.sdata.ex_id,
                number: this.num,
                initiator_wallet_id: this.wallet_id,
            }
            const formData = Object.assign({}, data)
            asset_transaction(formData).then(response => {
                console.log(response)
                if (response.code === 200) {
                    ElMessage({
                        message: h('p', null, [
                            h('a', {style: 'color: teal'}, '资产购买成功'),
                        ]),
                    })
                    this.asset_lists()
                    this.show = false
                } else {
                    ElMessage({
                        message: h('p', null, [
                            h('a', {style: 'color: teal'}, '购买失败，支付失败'),
                        ]),
                    })
                }
            })
        }
    },
    data() {
        return {
            tableData: [],
            wallet_id_list:[],
            show: false,
            trade: "",
            input:"",
            num:"",
            sdata: [],
            sign_in: false,
            wallet_id:"",
        }
    }
}
</script>

<style scoped>

  .exchange {
      padding:140px 60px 50px 60px;
      margin:  0 auto;
  }

  .exchange-b {
      background: white;
      padding: 20px 20px 50px 20px;
  }

  .exchange_list_title ul {
      list-style: none;
      display: flex;
      padding: 0;
  }

  .exchange_list_title ul li {
      margin-right: 30px;
  }

  .exchange_list_title {
  }

  .trade-body {
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      display: flex;
      background: rgba(68, 68, 68, 0.49);
      justify-content: center;
      align-items: center;
      z-index: 999;
  }

  .trade-box {
      padding: 20px 60px;
      width: 700px;
      background: white;
  }

  .rows div {
      width: 180px;
  }

  .rows {
      display: flex;
      color: #737373;
      padding: 3px 0;
      justify-content: center;
  }

  .data {
      color: #232323;
  }

  .trade-c {
      color: #737373;
  }

  .trade-dr {
      margin: 20px 0;
  }

  .trade-dr p {
      padding: 0;
      margin: 3px 0;
  }

  .bs {
      display: flex;
      justify-content: right;
  }

  .bs div {
      padding: 10px 40px;
      cursor: pointer;
  }

  .do {
      background: #345952;
      color: white;
      cursor: pointer;
  }

  .exchange h2 {
      color: #2a4742;
      padding: 5px;
  }

  .login-buy {
      padding: 10px;
      background: #345952;
      color: white;
      text-align: center;
      cursor: pointer;
  }

  @media screen and (max-width: 800px)  {
    .trade-box {
        width: 90%;
    }

    .exchange {
        padding: 100px 0;
    }
  }
</style>
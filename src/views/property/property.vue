<template>
    <headers></headers>
    <div class="property">
<!--        <div id="tts" style="width: 100%;height: 40vh;"></div>-->
        <div class="property-ac">
            <div class="property-ac-box" :class="pa_show==1?'':'property-ac-box-active'" @click="pa_showc(1)">个人资产</div>
            <div class="property-ac-box" :class="pa_show==2?'':'property-ac-box-active'" @click="pa_showc(2)">注销记录</div>
        </div>
        <div class="pro-box">
            <div class="pro-box1" v-if="pa_show==2">
                <h2>个人碳资产注销记录 Personal Carbon Assets Retire History</h2>
                <el-table :data="actData" @expand-change="on" :border="parentBorder" style="width: 100%">
                    <!-- <el-table-column type="expand"> -->
                        <!-- <template>
                            <div class="exp-box">
                                <div class="exp-info">
                                    <h2 style="padding: 0">资产信息</h2>
                                    <p>日期: <span>{{ set.day }}</span></p>
                                    <p>资产代码: <span>{{ set.gs }}</span></p>
                                    <p>国家: <span>{{ set.country }}</span></p>
                                    <p>项目: <span>{{ set.project }}</span></p>
                                    <p>项目类型: <span>{{ set.project_type }}</span></p>
                                    <p>序列号: <span>{{ set.serial_number }}</span></p>
                                    <p>credits: <span>{{ set.number }}</span></p>
                                    <p>retires: <span>{{ set.retire_number }}</span></p>
                                </div>
                                <div :id="'chartLineBox' + props.row.cid" style="width: 95%;height: 50vh;"></div>
                            </div>
                        </template> -->
                    <!-- </el-table-column> -->
                    <el-table-column prop="create_time" width="250" label="注销时间"/>
                    <el-table-column prop="r_id"  label="注销的单号"/>
                    <el-table-column prop="ass_id" label="注销项目的标识"/>
                    <el-table-column prop="number" width="120" label="retires"/>
                    <el-table-column width="100" label="证书">
                        <template  #default="props">
                            <div class="d-list d-list-x" v-if="!props.row.listing">
                                <div link type="primary" @click="jump(props.row.certificate_link)">查看证书</div>
                            </div>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <div class="pro-box2" v-if="pa_show==1">
                <h2>个人碳资产 Personal Carbon Assets</h2>
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
                                    <p>retires: <span>{{ props.row.retire_number }}</span></p>
                                </div>
                                <div :id="'chartLineBox' + props.row.cid" style="width: 95%;height: 50vh;"></div>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column prop="hid" width="220" label="资产代码"/>
                    <el-table-column
                        prop="listing"
                        label="挂牌"
                        width="100"
                        :filters="[
                            { text: 'yes', value: true },
                            { text: 'no', value: false },
                        ]"
                        :filter-method="filterTag"
                        filter-placement="bottom-end">
                        <template #default="scope">
                            <el-tag
                                :type="scope.row.listing == false ? '' : 'success'"
                                disable-transitions
                            >{{ scope.row.listing == false ? 'no' : 'yes' }}</el-tag>
                        </template>
                    </el-table-column>
                    <el-table-column prop="day" width="100" label="日期"/>
                    <el-table-column prop="gs" width="120" label="GS"/>
                    <el-table-column prop="project" width="200" label="项目"/>
                    <el-table-column prop="project_type" width="150" label="项目类型"/>
                    <el-table-column prop="country" width="100" label="国家"/>
                    <el-table-column prop=number width="120" label="credits"/>
                    <el-table-column prop=retire_number width="120" label="retires"/>
                    <el-table-column prop=serial_number width="250" label="序列号"/>
                    <el-table-column fixed="right" width="80" label="操作">
                        <template  #default="props">
                            <div class="d-list" v-if="!props.row.listing">
                                <div link type="primary" @click="chushou(props.row)">挂牌</div>
                                <div link type="primary" @click="retire(props.row)">注销</div>
                            </div>
                            <div class="d-list" v-if="props.row.listing">
                                <div link type="primary" @click="remove_chushou(props.row)">取消挂牌</div>
                            </div>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <div class="trade-body" v-if="this.show2">
                <div class="trade-box">
                    <div class="t-tx">
                        <h2>注销碳资产</h2>
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
                        <p class="trade-c">Account ID</p>
                        <p>{{ sdata.user_id }}</p>
                    </div>
                    <div class="trade-dr">
                        <p class="trade-c">资产号</p>
                        <div style="margin-top: 10px">
                            <el-input :value="sdata.hid" disabled placeholder="资产号" />
                        </div>
                    </div>
                    <div class="trade-dr">
                        <p class="trade-c">数量/吨</p>
                        <div style="margin-top: 10px">
                            <el-input-number v-model="retire_amount" :min="1" :max="sdata.number" />
                        </div>
                    </div>
                    <div class="bs">
                        <div class="" @click="this.show2 = false">退出</div>
                        <div class="do" @click="retire_any()">注销</div>
                    </div>
                </div>
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
                        <p class="trade-c">Account ID</p>
                        <p>{{ sdata.user_id }}</p>
                    </div>
                    <div class="trade-dr">
                        <p class="trade-c">资产号</p>
                        <div style="margin-top: 10px">
                            <el-input :value="sdata.hid" disabled placeholder="资产号" />
                        </div>
                    </div>
                    <div class="bots">
                        <div class="trade-dr">
                            <p class="trade-c">收款钱包</p>
                            <div style="margin-left: -6px">
                                <el-select v-model="wallet" class="m-2" placeholder="钱包ID">
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
                            <p class="trade-c">数量</p>
                            <div style="margin-top: 10px">
                                <el-input-number v-model="num" :min="1" :max="sdata.number" />
                            </div>
                        </div>
                        <div class="trade-dr">
                            <p class="trade-c">数量/金额</p>
                            <div style="margin-top: 10px">
                                <el-input-number v-model="amount" :precision="2" :step="0.1" :max="1000000000" />
                            </div>
                        </div>
                        <div class="bs">
                            <div class="" @click="this.show = false">退出</div>
                            <div class="do" @click="personal_sell_set()">挂牌</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <bottoms></bottoms>
</template>

<script>
import header from "../components/header.vue"
import bottom from "../components/bottom.vue"
import {asset_personal_list, personal_get_retire, personal_retire, personal_sell, wallet_list} from "@/api/hub";
import {ElMessage} from "element-plus";
import {h} from "vue";
// import { pa } from "element-plus/es/locale";

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "property",
    components: {
        headers: header,
        bottoms: bottom,
    },
    mounted() {
        // let user = localStorage.getItem("user")
        // let data = JSON.parse(user);
        // if (data.admin_info.cell_phone_number !== "+8613318499181" && data.admin_info.cell_phone_number === undefined) {
        //     this.$router.push({path: '/index'})
        // }
        // this.year100()
        // this.dos_title()
        this.asset_personal_lists()
        this.wallet_lists()
    },
    methods: {
        personal_sell_set() {
            let data = {
                ass_id: this.sdata.ass_id,
                amount: this.amount,
                number: this.num,
                status: 3001,
                keep_time: 1000,
                collection_wallet_id: this.wallet
            }
            const formData = Object.assign({}, data)
            personal_sell(formData).then(response => {
                if (response.code == 200) {
                    ElMessage({
                        message: h('p', null, [
                            h('a', {style: 'color: teal'}, '资产挂牌成功'),
                        ]),
                    })
                    this.asset_personal_lists()
                    this.show = false
                }
            })
        },
        wallet_lists() {
            wallet_list().then(response => {
                console.log(response.wallet_id_list)
                this.wallet_id_list =  response.wallet_id_list
            })
        },
        chushou(data) {
            this.sdata = data
            this.show = true
        },
        retire(data) {
            this.sdata = data
            this.show2 = true
        },
        jump(id) {
            location.href= "https://www.hniee.top/hub/retire/"+id
        },
        remove_chushou(val) {
            let data = {
                ass_id: val.ass_id,
                collection_wallet_id:"----",
                status: 3002,
            }
            const formData = Object.assign({}, data)
            personal_sell(formData).then(response => {
                if (response.code == 200) {
                    ElMessage({
                        message: h('p', null, [
                            h('a', {style: 'color: teal'}, '取消挂牌成功'),
                        ]),
                    })
                    this.asset_personal_lists()
                }
            })
        },
        retire_any_get() {
            personal_get_retire().then(response => {
                // console.log(response)
                this.actData = response.retire_list
            })
        },
        retire_any() {
            let data = {
                ass_id: this.sdata.ass_id,
                number: this.retire_amount,
            }
            const formData = Object.assign({}, data)
            personal_retire(formData).then(response => {
                if (response.code == 200) {
                    ElMessage({
                        message: h('p', null, [
                            h('a', {style: 'color: teal'}, '注销成功'),
                        ]),
                    })
                    this.show2 = false
                    this.asset_personal_lists()
                } else {
                    ElMessage({
                        message: h('p', null, [
                            h('a', {style: 'color: teal'}, '注销失败！！'),
                        ]),
                    })
                }
            })
        },
        asset_personal_lists() {
            asset_personal_list().then(response => {
                this.tableData = response.personal_asset_list
            })
        },
        pa_showc(num) {
            this.pa_show = num
            if(num == 1) {
                this.asset_personal_lists()
            } else if(num == 2) {
                this.retire_any_get()
            }
        },
        year100() {
            var dd = new Date()
            for (var i = 1; i <= 100; i++) {
                let date = new Date(dd.getTime() - i * 24 * 60 * 60 * 1000);
                let year = date.getFullYear();
                let month = date.getMonth() + 1;
                let dates = date.getDate()
                this.year_data.push(year.toString() + '.' + month.toString() + '.' + dates.toString())
            }
        },
        filterTag(value, row) {
            return row.tag === value
        },
        on(row, s) {
            let that = this
            setTimeout(function () {
                that.dos(row.cid)
            }, 300)

        },
        dos_title() {
            var that = this
            let tts = document.getElementById('tts')
            var myChart = this.$echarts.init(tts);
            var option;
            var data1 = [];
            var data2 = [];
            var data3 = [];
            var data4 = [];
            var data5 = [];
            var data6 = [];
            var data7 = [];
            for (var i = 0; i < 100; i++) {
                data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
                data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 6);
                data3.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 7);
                data4.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 8);
                data5.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 9);
                data6.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 10);
                data7.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 3);
            }
            option = {
                title: {
                    // text: 'Bar Animation Delay'
                },
                legend: {
                    // data: ['bar', 'bar2']
                },
                toolbox: {

                },
                tooltip: {},
                xAxis: {
                    data: that.year_data.reverse(),
                    splitLine: {
                        show: false
                    }
                },
                yAxis: {

                },
                series: [
                    {
                        name: 'C23451',
                        type: 'bar',
                        data: data1,
                        emphasis: {
                            focus: 'series'
                        },
                        animationDelay: function (idx) {
                            return idx * 10;
                        }
                    },
                    {
                        name: 'C77341',
                        type: 'bar',
                        data: data2,
                        emphasis: {
                            focus: 'series'
                        },
                        animationDelay: function (idx) {
                            return idx * 10 + 100;
                        }
                    },
                    {
                        name: 'C61032',
                        type: 'bar',
                        data: data3,
                        emphasis: {
                            focus: 'series'
                        },
                        animationDelay: function (idx) {
                            return idx * 10 + 100;
                        }
                    },
                    {
                        name: 'C89978',
                        type: 'bar',
                        data: data4,
                        emphasis: {
                            focus: 'series'
                        },
                        animationDelay: function (idx) {
                            return idx * 10 + 100;
                        }
                    },
                    {
                        name: 'C87178',
                        type: 'bar',
                        data: data5,
                        emphasis: {
                            focus: 'series'
                        },
                        animationDelay: function (idx) {
                            return idx * 10 + 100;
                        }
                    },
                    {
                        name: 'C99323',
                        type: 'bar',
                        data: data6,
                        emphasis: {
                            focus: 'series'
                        },
                        animationDelay: function (idx) {
                            return idx * 10 + 100;
                        }
                    },
                    {
                        name: 'C17278',
                        type: 'bar',
                        data: data7,
                        emphasis: {
                            focus: 'series'
                        },
                        animationDelay: function (idx) {
                            return idx * 10 + 100;
                        }
                    }
                ],
                animationEasing: 'elasticOut',
                animationDelayUpdate: function (idx) {
                    return idx * 6;
                }
            };
            option && myChart.setOption(option);
        },
        dos(cid) {
            let div = document.getElementById('chartLineBox' + cid)
            if (div == undefined) {
                return
            }
            this.chartLine = this.$echarts.init(div);
            let base = +new Date(2011, 4, 3);
            let oneDay = 24 * 3600 * 1000;
            let data = [[base, Math.random() * 300]];
            for (let i = 1; i < 20000; i++) {
                let now = new Date((base += oneDay));
                data.push([+now, Math.round((Math.random() - 0.5) * 20 + data[i - 1][1])]);
            }

            // 指定图表的配置项和数据
            var option = {
                title: {
                    left: 'left',
                    text: '资产浮动'
                },
                xAxis: {
                    type: 'time',
                    boundaryGap: false,
                    show: false,
                },
                yAxis: {
                    type: 'value',
                    boundaryGap: [0, '100%']
                },
                series: [
                    {
                        name: 'Fake Data',
                        type: 'line',
                        smooth: true,
                        symbol: 'none',
                        areaStyle: {},
                        data: data
                    }
                ]
            };

            // 使用刚指定的配置项和数据显示图表。
            this.chartLine.setOption(option);
        }
    },
    data() {
        return {
            year_data: [],
            tableData: [],
            num: "",
            pa_show: 1,
            amount: "",
            retire_amount: "",
            value:"",
            show: false,
            show2: false,
            wallet: "",
            sdata: [],
            actData: [],
            wallet_id_list:[],
        }
    }
}
</script>

<style scoped>
.property {
    padding: 140px 60px 40px 60px;
}

.pro-box {
    background: white;
    padding: 20px 20px 70px 20px;
}

.d-list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}


.d-list-x > div {
    text-align: left !important;
}


.exp-box {
    padding: 40px;
}

.d-list div:nth-of-type(2) {
    color: red;;
}

.d-list div {
    width: 100%;
    text-align: center;
    cursor: pointer;
    color: #50897e;
    margin: 2px 0;
}

.exp-info {
    /*padding-left: 30px;*/
    margin-bottom: 50px;
}

.exp-info span {
    font-weight: 600;
}

.pro-box h2 {
    color: #2a4742;
    padding: 5px 30px;
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
    padding: 10px 50px;
    cursor: pointer;
}

.property-ac {
    display: flex;
}

.property-ac-box-active {
    background: #ffffff85 !important;
}

.property-ac-box {
    background: white;
    padding: 12px 24px;
    margin-right: 5px;
    cursor: pointer;
    border-radius: 10px 10px 0 0;
}

.do {
    background: #345952;
    color: white;

}

@media screen and (max-width: 800px)  {
    .property {
        padding: 100px 0;
    }
  }
</style>

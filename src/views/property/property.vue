<template>
    <headers></headers>
    <div class="property">
        <div id="tts" style="width: 100%;height: 40vh;"></div>
        <div class="pro-box">
            <h2>个人碳资产 Personal carbon assets</h2>
            <el-table :data="tableData" @expand-change="on" :border="parentBorder" style="width: 100%">
                <el-table-column type="expand">
                    <template #default="props">
                        <div class="exp-box">
                            <div class="exp-info">
                                <h2 style="padding: 0">INFORMATION</h2>
                                <p>CID: <span>{{ props.row.cid }}</span></p>
                                <p>ASSET CODE: <span>{{ props.row.asset_code }}</span></p>
                                <p>PROJECT ISSUED TO: <span>{{ props.row.pi }}</span></p>
                                <p>SERIAL NUMBER: <span>{{ props.row.s_num }}</span></p>
                                <p>CREDITS: <span>{{ props.row.credits }}</span></p>
                            </div>
                            <div :id="'chartLineBox' + props.row.cid" style="width: 95%;height: 50vh;"></div>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="cid" width="120" label="CID"/>
                <el-table-column
                        prop="hold"
                        label="STATUS"
                        width="100"
                        :filters="[
                            { text: 'YES', value: 'YES' },
                            { text: 'NO', value: 'NO' },
                          ]"
                        :filter-method="filterTag"
                        filter-placement="bottom-end">
                    <template #default="scope">
                        <el-tag :type="scope.row.tag === 'NO' ? '' : 'success'" disable-transitions>{{ scope.row.tag }}
                        </el-tag>
                    </template>
                </el-table-column>
                <el-table-column prop="asset_code" width="150" label="ASSET CODE"/>
                <el-table-column prop="pi" width="300" label="PROJECT ISSUED TO"/>
                <el-table-column prop="s_num" width="350" label="SERIAL NUMBER"/>
                <el-table-column prop=i_date width="150" label="ISSUANCE DATE"/>
                <el-table-column prop=credits width="100" label="CREDITS"/>
                <el-table-column fixed="right" width="80" label="OPERATIONS">
                    <template #default>
                        <div class="d-list">
                            <div link type="primary">转入</div>
                            <div link type="primary">转出</div>
                        </div>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
    <bottoms></bottoms>
</template>

<script>
import header from "../components/header.vue"
import bottom from "../components/bottom.vue"

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "property",
    components: {
        headers: header,
        bottoms: bottom,
    },
    mounted() {
        this.year100()
        this.dos_title()
    },
    methods: {
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
                    text: 'FLUCTUATE'
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
            tableData: [
                {
                    cid: 'C23451',
                    asset_code: 'U71HEzclKpgLS',
                    pi: 'Houji Solar Cooker Project (GS7604)',
                    s_num: 'GS1-1-CN-GS7604-3-2020-21289-85977-85978',
                    i_date: 'Jul 07, 2021',
                    credits: "2",
                    tag: 'YES'
                },
                {
                    cid: 'C77341',
                    asset_code: '9sMWpXZKhZG',
                    pi: 'Houji Solar Cooker Project (GS7604)',
                    s_num: 'GS1-1-CN-GS7604-3-2020-21289-85977-85978',
                    i_date: 'Jun 21, 2021',
                    credits: "2",
                    tag: 'NO'
                },
                {
                    cid: 'C61032',
                    asset_code: 'ZGpVmRaO71H',
                    pi: 'Houji Solar Cooker Project (GS7604)',
                    s_num: 'GS1-1-CN-GS7604-3-2020-21289-85977-85978',
                    i_date: 'Feb 02, 2021',
                    credits: "2",
                    tag: 'NO'
                },
                {
                    cid: 'C89978',
                    asset_code: 'Qd8rN8p9sMSJ',
                    pi: 'Houji Solar Cooker Project (GS7604)',
                    s_num: 'GS1-1-CN-GS7604-3-2020-21289-85977-85978',
                    i_date: 'May 11, 2022',
                    credits: "2",
                    tag: 'YES'
                },
                {
                    cid: 'C87178',
                    asset_code: 'VjfSDAS9sMSJ',
                    pi: 'Houji Solar Cooker Project (GS7604)',
                    s_num: 'GS1-1-CN-GS7604-3-2020-21289-85977-85978',
                    i_date: 'May 23, 2021',
                    credits: "2",
                    tag: 'YES'
                },
                {
                    cid: 'C99323',
                    asset_code: 'Y21rN8p9sDSa',
                    pi: 'Houji Solar Cooker Project (GS7604)',
                    s_num: 'GS1-1-CN-GS7604-3-2020-21289-85977-85978',
                    i_date: 'Feb 19, 2021',
                    credits: "2",
                    tag: 'YES'
                },
                {
                    cid: 'C17278',
                    asset_code: 'Wd3rN8p9SDa',
                    pi: 'Houji Solar Cooker Project (GS7604)',
                    s_num: 'GS1-1-CN-GS7604-3-2020-21289-85977-85978',
                    i_date: 'Jul 11, 2022',
                    credits: "2",
                    tag: 'YES'
                }
            ]
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

.exp-box {
    padding: 40px;
}

.exp-box div:nth-of-type(1) {
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
</style>
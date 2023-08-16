<template>
    <headers></headers>
    <div class="more">
        <div id="map"></div>
        <div class="more-info">
            <img :src="gsf_info.img" style="width: 100%"/>
            <div class="more_tit">
                <h1 style="color: #375f57">{{ gsf_info.tit }}</h1>
            </div>
            <div class="more_box_item" >
                <div class="more_bt_box" v-for="item in gsf_info.box">
                    <h2 style="color: #353535">{{item.tit}}</h2>
                    <p>{{item.desc}}</p>
                </div>
            </div>
            <div class="more_sustainable_development">
                <div class="m_s_d_left">
                    <img src="@/assets/r1.jpg"/>
<!--                    <img src="@/assets/r2.jpg"/>-->
                </div>
                <div class="m_s_d_right">
                    <div class="m_s_d_box" v-for="item in gsf_info.sustainable_development">
                        <h4 style="color: #353535">{{item.tit}}</h4>
                        <p>{{item.desc}}</p>
                    </div>
                </div>
            </div>
            <div class="m-trade" @click="exchange">
                <div>
                    <h3 style="color: #375f57;font-size: 20px">该项目已经在交易所上线</h3>
                    <div class="more_gsf">
                        <div style="color: #375f57" v-for="item in gsf_info.gsf_detailed">{{item.key}}: {{item.value}}</div>
                    </div>
                </div>
                <div class="m-trade-right">
                    <div class="get-more">
                        <h3>了解更多</h3>
                        <p style="margin-top: -15px;font-size: 14px">GET MROE</p>
                    </div>
                </div>
            </div>
            <div class="m-trade-source" @click="go_link(gsf_info.link)">
                | 来源 Gold Standard | : {{ gsf_info.link }}
            </div>
        </div>
    </div>
    <bottoms></bottoms>
</template>

<script>
import 'echarts/extension/bmap/bmap';
import {GsfInfo} from '@/utils/gsf.js'
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
            myChart:"",
            gsf_info: "",
            gsf_d: "",
            key:""
        }
    },
    created() {
        this.key = this.$route.params.key
        let that = this
        this.gsf_id_info()
        setTimeout(function (){
            that.map()
        },500)
    },
    methods:{
        exchange() {
            this.$router.push({path: '/exchange'})
        },
        go_link(path) {
            window.location.href=path
        },
        gsf_id_info() {
            this.gsf_info = GsfInfo[this.key]
            this.gsf_d = GsfInfo.gsf_d
        },
        map() {
            var chartDom = document.getElementById('map');
            this.myChart = this.$echarts.init(chartDom);
            var option;
            const data = this.gsf_d.data;
            const geoCoordMap = this.gsf_d.map;
            const convertData = function (data) {
                var res = [];
                for (var i = 0; i < data.length; i++) {
                    var geoCoord = geoCoordMap[data[i].name];
                    if (geoCoord) {
                        res.push({
                            name: data[i].name,
                            value: geoCoord.concat(data[i].value)
                        });
                    }
                }
                return res;
            };
            option = {
                tooltip: {
                    trigger: 'item'
                },
                bmap: {
                    key: "pyt8Vb1cecWwUGSWyUTbP66qaYuouIKn",
                    center: [109.781327, 20.608266],
                    zoom: 5,
                    roam: true,
                    mapStyle: {
                        styleJson: [
                            {
                                featureType: 'water',
                                elementType: 'all',
                                stylers: {
                                    color: '#d1d1d1'
                                }
                            },
                            {
                                featureType: 'land',
                                elementType: 'all',
                                stylers: {
                                    color: '#f3f3f3'
                                }
                            },
                            {
                                featureType: 'railway',
                                elementType: 'all',
                                stylers: {
                                    visibility: 'off'
                                }
                            },
                            {
                                featureType: 'highway',
                                elementType: 'all',
                                stylers: {
                                    color: '#fdfdfd'
                                }
                            },
                            {
                                featureType: 'highway',
                                elementType: 'labels',
                                stylers: {
                                    visibility: 'off'
                                }
                            },
                            {
                                featureType: 'arterial',
                                elementType: 'geometry',
                                stylers: {
                                    color: '#fefefe'
                                }
                            },
                            {
                                featureType: 'arterial',
                                elementType: 'geometry.fill',
                                stylers: {
                                    color: '#fefefe'
                                }
                            },
                            {
                                featureType: 'poi',
                                elementType: 'all',
                                stylers: {
                                    visibility: 'off'
                                }
                            },
                            {
                                featureType: 'green',
                                elementType: 'all',
                                stylers: {
                                    visibility: 'off'
                                }
                            },
                            {
                                featureType: 'subway',
                                elementType: 'all',
                                stylers: {
                                    visibility: 'off'
                                }
                            },
                            {
                                featureType: 'manmade',
                                elementType: 'all',
                                stylers: {
                                    color: '#d1d1d1'
                                }
                            },
                            {
                                featureType: 'local',
                                elementType: 'all',
                                stylers: {
                                    color: '#d1d1d1'
                                }
                            },
                            {
                                featureType: 'arterial',
                                elementType: 'labels',
                                stylers: {
                                    visibility: 'off'
                                }
                            },
                            {
                                featureType: 'boundary',
                                elementType: 'all',
                                stylers: {
                                    color: '#fefefe'
                                }
                            },
                            {
                                featureType: 'building',
                                elementType: 'all',
                                stylers: {
                                    color: '#d1d1d1'
                                }
                            },
                            {
                                featureType: 'label',
                                elementType: 'labels.text.fill',
                                stylers: {
                                    color: '#999999'
                                }
                            }
                        ]
                    }
                },
                series: [
                    {
                        name: 'pm2.5',
                        type: 'scatter',
                        coordinateSystem: 'bmap',
                        data: convertData(data),
                        symbolSize: function (val) {
                            return val[2] / 10;
                        },
                        encode: {
                            value: 2
                        },
                        label: {
                            formatter: '{b}',
                            position: 'right',
                            show: false
                        },
                        emphasis: {
                            label: {
                                show: true
                            }
                        }
                    },
                    {
                        name: 'Top 5',
                        type: 'effectScatter',
                        coordinateSystem: 'bmap',
                        data: convertData(
                            data
                                .sort(function (a, b) {
                                    return b.value - a.value;
                                })
                                .slice(0, 6)
                        ),
                        symbolSize: function (val) {
                            return val[2] / 10;
                        },
                        encode: {
                            value: 2
                        },
                        showEffectOn: 'render',
                        rippleEffect: {
                            brushType: 'stroke'
                        },
                        label: {
                            formatter: '{b}',
                            position: 'right',
                            show: true
                        },
                        itemStyle: {
                            shadowBlur: 10,
                            shadowColor: '#333'
                        },
                        emphasis: {
                            scale: true
                        },
                        zlevel: 1
                    }
                ]
            };

            option && this.myChart.setOption(option);
        }
    }
}
</script>

<style scoped>
    .more {
        color:#5f5f5f;
        padding: 130px 180px;
    }

    #map {
        height: 350px;
    }

    .more-info {
        padding: 40px;
        background: white;
    }

    .more-tit {
        font-size: 30px;
    }

    .more_box_item {
        display: flex;
        justify-content: space-between;
    }

    .more_bt_box {
        width: 49%;
    }

    p {
        line-height: 26px;
    }

    .more_sustainable_development {
        display: flex;
        justify-content: space-between;
    }

    .m_s_d_left,.m_s_d_right {
        width: 49%;
    }

    .m_s_d_left img {
        width: 95%;
    }

    .more_gsf div {
        margin-right: 20px;
        font-weight:600;
        margin-top: 5px;
        margin-left: 10px;
    }

    .m-trade {
        background: #f0f0f0d1;
        padding:5px 0px 20px 20px;
        border-left: 5px solid #375f57;
        cursor: pointer;
        margin-bottom: 15px;
        transition: transform 0.3s;
        display: flex;
        margin-top: 40px;
        justify-content: space-between;
    }

    .m-trade:hover {
        transform: scale(0.98, 0.98);
    }

    .m-trade-right {
        display: flex;
        padding-right: 80px;
        justify-content: center;
        align-items: center;
        font-weight:600;
    }

    .m-trade-source {
        background: #375f57;
        padding: 15px;
        color: white;
        cursor: pointer;
        transition: transform 0.3s;
    }

    .m-trade-source:hover {
        transform: scale(0.98, 0.98);
    }
</style>

<style>
    .anchorBL{display:none !important;}
</style>
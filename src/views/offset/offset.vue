<template>
  <headers></headers>
  <div class="offset">
    <h1>抵消你的碳排放</h1>
    <p class="offset-des">
	根据国际航空规则CORSIA，自2021年起，自愿碳指标可以抵销所乘航班的碳排放量。我们的线上计算器可就您的飞行距离及客舱级别，计算出您在该航班总共产生的二氧化碳排放量 。此外，您亦可直接选择一定数量的自愿碳指标，用于抵消对应规模的二氧化碳排放量。为此，只需选择下面的“个性化计划”。
    </p>
    <img src="@/assets/before-after.avif"/>
    <div class="contribute">
      <img src="@/assets/undraw_showing_support_re_5f2v.svg"/>
      <h2>个性化计划</h2>
      <p>
	个性化碳抵消规模为1~999吨二氧化碳，请选择您打算支付用于抵消的二氧化碳吨数。	
      </p>
      <h3>选择捐助方法</h3>
      <div class="contribute-box">
        <div class="contribute-box-left">
          捐助选项:
        </div>
        <div class="mb-2 flex items-center text-sm">
          <el-radio-group v-model="op" class="large">
            <div class="contribute-gr-op">
              <el-radio label="1" size="large">透过信用卡／微信／支付宝／电子支付方式支付</el-radio>
              <el-radio label="2" size="large">从我的碳账户中抵消</el-radio>
            </div>
          </el-radio-group>
        </div>
      </div>
      <div class="contribute-box">
        <div class="contribute-box-left">
          捐助额:
        </div>
        <div style="margin-top: 5px">
          HKD:
          <el-input-number
            v-model="num"
            :min="1"
            :max="10"
            controls-position="right"
            size="mx-4"
            @change="handleChange"
          />
        </div>
      </div>
      <div>
        <el-checkbox v-model="checked1" label="若要继续进行，请勾选复选框来表示你已同意。" size="large"/>
      </div>
      <div class="common-button c-bg">点击此处进行抵消，并获得抵消凭证</div>
    </div>
    <div class="carbon">
      <img :style="!sh?'display: none;':''" src="@/assets/undraw_augmented_reality_re_f0qd.svg"/>
      <div class="fen" :style="sh?'display: none;':''">
        {{ fen }}
      </div>
      <h2 :style="!sh?'display: none;':''">计算您的碳排放量</h2>
      <h2 :style="sh?'display: none;':''">通过您输入的航班信息计算你相应的碳排量</h2>
      <p style="text-align: center">通过你设定的航班信息计算你相应的碳排量</p>
      <div class="mb-2 flex items-center text-sm">
        <el-radio-group v-model="op2" class="large" text-color="#345952">
          <div class="carbon-box">
            <el-radio label="1"  size="large">回程</el-radio>
            <el-radio label="2" size="large">单程</el-radio>
          </div>
        </el-radio-group>
        <div class="o-f-t">
          <div class="o-f-t-b">出发</div>
          <div class="o-f-t-b">到达</div>
        </div>
        <el-select v-model="from" class="m-2" filterable placeholder="请选择出发的国家">
          <el-option
            v-for="item in info"
            :key="item.value"
            :label="item.name"
            :value="item.tel">
            <span style="float: left">{{ item.name }}</span>
            <span style="float: right; color: #8492a6; font-size: 13px">{{ item.en }}</span>
          </el-option>
        </el-select>
        <el-select v-model="to" class="m-2" filterable placeholder="请选择到达的国家">
          <el-option
            v-for="item in info"
            :key="item.value"
            :label="item.name"
            :value="item.tel">
            <span style="float: left">{{ item.name }}</span>
            <span style="float: right; color: #8492a6; font-size: 13px">{{ item.en }}</span>
          </el-option>
        </el-select>
        <div class="o-f-t">
          <div class="o-f-t-b">人数</div>
          <div class="o-f-t-b">舱位</div>
        </div>
        <el-select v-model="pv" class="m-2" placeholder="请选择你乘坐航班的人数" size="large">
          <el-option
            v-for="item in people"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <el-select v-model="tp" class="m-2" placeholder="请选择航班的类型" size="large">
          <el-option
            v-for="item in types"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />

        </el-select>
      </div>
      <div class="common-box">
        <div class="common-button" @click="reset()">重新设置</div>
        <div class="common-button" @click="count()">点击计算</div>
      </div>
    </div>
  </div>
  <bottoms></bottoms>
</template>

<script>
import header from "../components/header.vue"
import bottom from "../components/bottom.vue"
import {AreaCode} from '@/utils/common.js'
import {ElMessage} from 'element-plus'
import {h} from 'vue'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "offset",
  components: {
    headers: header,
    bottoms: bottom
  },
  methods: {
    reset() {
      this.from = ""
      this.to = ""
      this.pv = ""
      this.tp = ""
      this.sh = true
    },
    count() {
      if (this.from == "" || this.to == "" || this.pv == "" || this.tp == "") {
        ElMessage({
          message: h('p', null, [
            h('span', null, '把全部信息补充完成,才能计算'),
            h('b', {style: 'color: teal'}, '碳指标'),
          ]),
        })
      } else {
        this.fen = ((parseInt(this.from) + parseInt(this.to)) * (this.pv + this.tp) * 0.1).toFixed(2)
        this.sh = false
      }
    }
  },
  data() {
    return {
      info: AreaCode,
      op: "1",
      fen: 0.0,
      sh: true,
      op2: "1",
      num: 0,
      from: "",
      to: "",
      pv: "",
      tp: "",
      people: [
        {
          value: 1,
          label: '1 乘客',
        },
        {
          value: 2,
          label: '2 乘客',
        },
        {
          value: 3,
          label: '3 乘客',
        },
        {
          value: 4,
          label: '4 乘客',
        },
        {
          value: 5,
          label: '5 乘客',
        },
      ],
      types: [
        {
          value: 0.1,
          label: '头等舱',
        },
        {
          value: 0.2,
          label: '公务舱',
        },
        {
          value: 0.3,
          label: '特选经济舱',
        },
      ]
    }
  }
}
</script>

<style scoped>
.offset {
  padding: 200px 0 0 0;
  text-align: center;
  animation: offset-show 0.3s;
  animation-fill-mode: forwards;
}

@media screen and (max-width: 760px) {
  .offset > p {
    width: 85% !important;
  }

  .offset {
    padding: 150px 0 !important;
  }

  .offset h1 {
    font-size: 7vw !important;
  }

  .offset > img {
    width: 85% !important;
  }

  .contribute {
    width: 80% !important;
  }

  .contribute-box {
    flex-wrap: wrap;
  }

  .contribute .common-button {
    width: 90% !important;
  }

  .carbon {
    width: 80% !important;
  }

}

@keyframes offset-show {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.offset-des {
  width: 47%;
  margin: 70px auto;
  text-align: left;
  font-size: 20px;
  line-height: 35px;
  color: #3f3e3e;
}

.offset h3 {
  text-align: left;
}

.offset img {
  width: 50%;
}

.contribute, .carbon {
  width: 50%;
  margin: 0 auto;
  font-size: 20px;
  text-align: left;
}


.fen {
  font-size: 10vw;
  color: #345952;
}

.carbon {
  text-align: center;
  margin: 140px auto 60px auto;
}


.carbon p {
  text-align: left;
  color: #3f3e3e;
}

.contribute-gr-op {
  display: flex;
  flex-direction: column;
}

.offset .common-box {
  display: flex;
}


.offset .common-button:nth-of-type(1) {
  background: white;
  border: 3px solid #365952;
  color: #365952;
}

.offset .common-button {
  background: #365952;
  width: 43%;
  border: 3px solid #365952;
  cursor: pointer;
  padding: 13px;
  margin: 30px auto;
  font-weight: 600;
  font-size: 15px !important;
  color: white;
}

.contribute {
  text-align: center;
  margin-top: 150px;
}


.contribute p {
  text-align: left;
}

.contribute-box {
  margin-bottom: 40px;
  display: flex;
  font-size: 16px;
}

.contribute-box-left {
  width: 100px;
  padding-top: 7px;
}

.contribute-box {
  margin-top: 15px;
}

.contribute h1 {
  text-align: center;
  margin-top: 60px;
}

.contribute p {
  margin-bottom: 40px;
  line-height: 35px;
  color: #3f3e3e;
}

.contribute h3 {
  border-bottom: 5px solid #c0c0c0;
  padding-bottom: 15px;
}

.carbon-box {
  display: flex;
  justify-content: center;
  width: 100%;
}

.c-bg {
  width: 100% !important;
  text-align: center !important;
}

.o-f-t {
  display: flex;
  margin-top: 20px;
}

.o-f-t div {
  width: 50%;
  font-size: 17px;
  text-align: left;
  padding: 1% 2%;
}

</style>

<style>

.carbon .el-radio-group {
  display: block;
}

.offset .el-input {
  height: 45px;
}

.el-radio__label, .el-checkbox__label {
  font-size: 16px !important;
}

.el-select {
  width: 48%;
  margin: 1%;
}

.el-input__inner {
  font-size: 16px !important;
}

.el-select .el-input__wrapper.is-focus {
  box-shadow: 0 0 0 1px #345952 inset !important;
}

.el-select-dropdown__item.selected {
  color: #345952 !important;
}

.el-radio__input.is-checked+.el-radio__label{
  color: #345952 !important;
  font-weight: 600;
}
.el-radio__input.is-checked .el-radio__inner {
  border-color: #345952 !important;
  background: #345952 !important;
}

</style>

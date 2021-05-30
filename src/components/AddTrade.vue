<template>
  <el-form
    class="trade_box"
    :inline="true"
    :model="trad_form"
    label-width="80px"
  >
    <el-form-item label="日期" label-width="50px">
      <el-date-picker v-model="tradeInfo.date" type="date" placeholder="選擇日期">
      </el-date-picker>
    </el-form-item>
    <el-form-item label="股數" label-width="50px">
      <el-input placeholder="買入股數" v-model="tradeInfo.num" clearable> </el-input>
    </el-form-item>
    <el-form-item label="成交價" label-width="70px">
      <el-input-number
        v-model="tradeInfo.tradePrice"
        :precision="2"
        :step="0.1"
        :max="1000"
      ></el-input-number>
    </el-form-item>
    <el-form-item> 
        <el-button type="success" icon="el-icon-check" circle></el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { db } from '../firebase.js';

export default {
  data() {
    return {
        tradeInfo: {
            date: "",
            num: 1,
            tradePrice: 0,
        },
        testData: []
    };
  },
  firestore() {
      return {
          testData: db.collection('trade')
      }
  },
  methods: {
    //   post() {
          
    //   }
  }
};
</script>
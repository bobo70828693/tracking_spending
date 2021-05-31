<template>
  <el-form
    class="trade_box"
    :inline="true"
    :model="trad_form"
    label-width="80px"
  >
    <el-form-item label="日期" label-width="50px">
      <el-col :span="12">
        <el-date-picker
          v-model="tradeInfo.date"
          type="date"
          format="YYYY-MM-DD"
          value-format="YYYY-MM-DD"
          placeholder="選擇日期"
        >
        </el-date-picker>
      </el-col>
    </el-form-item>
    <el-form-item label="股號" label-width="50px">
      <el-select v-model="tradeInfo.stock_id" filterable placeholder="請選擇">
        <el-option
          v-for="oneStock in stockList"
          :key="oneStock.stock_id"
          :label="oneStock.stock_id + ' ' + oneStock.stock_name"
          :value="oneStock.stock_id"
        >
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="股數" label-width="50px">
      <el-col :span="10">
        <el-input v-model="tradeInfo.num" clearable>
        </el-input>
      </el-col>
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
      <el-button
        type="success"
        icon="el-icon-check"
        circle
        @click="onSubmit"
      ></el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { db } from "../firebase.js";

export default {
  data() {
    return {
      tradeInfo: {
        date: "",
        num: 1,
        tradePrice: 0,
        stock_id: "",
      },
      testData: [],
      stockList: [],
    };
  },
  firestore() {
    return {
      testData: db.collection("trade"),
      stockList: db.collection("stock_list"),
    };
  },
  methods: {
    onSubmit() {
      db.collection("trade").add({
        stock_id: this.tradeInfo.stock_id,
        is_sell_out: true,
        num: this.tradeInfo.num,
        trade_price: this.tradeInfo.tradePrice,
        date: "2021-05-06",
      });
      console.log("submit", this.tradeInfo);
    },
  },
};
</script>
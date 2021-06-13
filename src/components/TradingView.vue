<template>
  <el-table
    :data="tradeData"
    style="width: 100%"
    :row-style="tableRowStyle"
    :header-cell-style="tableHeaderColor"
  >
    <el-table-column prop="stockID" label="股名" width="180"> </el-table-column>
    <el-table-column prop="priceReference" label="現價" width="150">
    </el-table-column>
    <el-table-column prop="tradePrice" label="成交均價" width="100">
    </el-table-column>
    <el-table-column prop="num" label="股數" width="100"> </el-table-column>
    <el-table-column prop="income" label="未實現損益 Income(Loss)" width="200">
    </el-table-column>
    <el-table-column label="平倉">
      <el-popover placement="top" :width="250" v-model:visible="visible">
        <el-form :model="soldOutInfo" class="demo-form-inline">
          <el-form-item label="編號">
            <el-col :span="12">
              <el-input v-model="soldOutInfo.stockID" placeholder=""></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="股數" label-width="50px">
            <el-col :span="12">
              <el-input v-model="soldOutInfo.num" clearable> </el-input>
            </el-col>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="soldOut">送出</el-button>
          </el-form-item>
        </el-form>
        <template #reference>
          <el-button type="warning" id="soldOut" @click="visible = true"
            >平倉</el-button
          >
        </template>
      </el-popover>
    </el-table-column>
  </el-table>
</template>

<script>
import { db } from "../firebase.js";
 
export default {
  props: ["tradeData"],
  data() {
    return {
      soldOutInfo: {
        num: 0,
        stockID: "",
      },
      tradeView: [],
      stockData: [],
    };
  },
  mounted() {
    db.collection("trade")
      .orderBy("date", "desc")
      .get()
      .then((currentValue) => {
        this.stockData = currentValue.docs.map((doc) => {
          return {
            ...doc.data(),
            id: doc.id
          }
        });
      });
  },
  methods: {
    soldOut() {
       this.stockData.forEach((currentStock) => {
         if ((this.soldOutInfo.stockID == currentStock.stock_id) && (currentStock.is_sell_out == false)) {
           if (currentStock.num >= this.soldOutInfo.num) {
              // 庫藏股足夠 可賣

           }
         }
       });
    },
    saleStock() {
      // // 交易紀錄
      // db.collection("trade_log").add({
      //   action: 'buy',
      //   num: this.tradeInfo.num,
      //   stock_id: this.tradeInfo.stock_id,
      //   trade_price: this.tradeInfo.tradePrice,
      //   date: dateStr,
      //   fee: Math.round(this.tradeInfo.num * this.tradeInfo.tradePrice)
      // });
    },
    tableRowStyle({ row, rowIndex }) {
      return "background-color: rgb(48, 44, 44);color: #fff;";
    },
    //  modify the table header the background color
    tableHeaderColor({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        return "background-color: rgb(48, 44, 44);color: #fff;font-weight: 500;padding: 10px";
      }
    },
  },
};
</script>
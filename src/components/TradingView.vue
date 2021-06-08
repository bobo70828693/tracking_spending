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
    <el-table-column prop="num" label="股數"> </el-table-column>
    <el-table-column prop="income" label="未實現損益 Income(Loss)" width="300">
    </el-table-column>
    <!-- <template #default="scope">
        <span v-if="scope.row.action == 'sale'">{{ scope.row.fee }}</span>
        <span v-else>0</span>
      </template> -->
    <!-- </el-table-column> -->
    <el-table-column label="平倉">
      <el-popover placement="top" :width="160" v-model:visible="visible">
        <p>这是一段内容这是一段内容确定删除吗？</p>
        <div style="text-align: right; margin: 0">
          <el-button size="mini" type="text" @click="visible = false"
            >取消</el-button
          >
          <el-button type="primary" size="mini" @click="visible = false"
            >确定</el-button
          >
        </div>
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
import axios from "axios";

export default {
  data() {
    return {
      tradeView: [],
      tradeData: this.handleTradeData(),
      stockInfo: []
    };
  },
  created() {
    db.collection("trade")
      .orderBy("date", "desc")
      .get()
      .then((currentValue) => {
        this.tradeView = currentValue.docs.map((doc) => doc.data());
      });
  },
  methods: {
    async handleTradeData() {
      let stockIDList = new Set(...[this.tradeView.map((val) => val.stock_id)]);
      let stockIDListAr = Array.from(stockIDList);
      let tradeData = [];

      for(let i = 0; i < stockIDListAr.length; i++) {
        let data = [];
        await this.getStockInfo(stockIDListAr[i]);
        this.tradeView.forEach((currentValue) => {
          if (stockIDListAr[i] == currentValue.stock_id) {
            if (data.length == 0) {
              data = {
                stockID: currentValue.stock_id,
                priceReference: this.stockInfo.priceReference,
                isSellOut: currentValue.is_sell_out,
                num: parseInt(currentValue.num),
                tradePrice: currentValue.trade_price,
              };
            } else {
              data = {
                stockID: currentValue.stock_id,
                priceReference: this.stockInfo.priceReference,
                isSellOut: currentValue.is_sell_out,
                num: parseInt(data.num) + parseInt(currentValue.num),
                tradePrice:
                  (parseFloat(data.tradePrice) +
                    parseFloat(currentValue.trade_price)) /
                  (parseInt(data.num) + parseInt(currentValue.num)),
              };
            }
          }
        });
        tradeData.push(data);
      }
      console.log(tradeData);
      return tradeData;
    },
    getTrade: function () {
      return this.tradeData;
    },
    getStockInfo(stockID) {
      console.log("stockID ===> ", stockID);
      let url = "https://api.fugle.tw/realtime/v0.2/intraday/meta?symbolId="+ stockID +"&apiToken=";

      const headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
      };

      let stockInfo = axios.get(url, { headers })
        .then((res) => {
          this.stockInfo = res.data.data.meta;
        })
        .catch(function (error) {
          console.log("連線異常");
        });

        return stockInfo;
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

    // async fetchAPI(){
    //    await db.collection("trade")
    //   .orderBy("date", "desc")
    //   .get()
    //   .then((currentValue) => {
    //     this.tradeView = currentValue.docs.map((doc) => doc.data());
    //   });
    // },
  },
};
</script>
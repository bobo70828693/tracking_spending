<template>
  <el-table
    :data="getTradeLog()"
    style="width: 100%"
    :row-style="tableRowStyle"
    :header-cell-style="tableHeaderColor"
  >
    <el-table-column prop="date" label="日期" width="180"> </el-table-column>
    <el-table-column label="操作" width="80">
      <template #default="scope">
        <span v-if="scope.row.action == 'buy'">買入</span>
        <span v-else>賣出</span>
      </template>
    </el-table-column>
    <el-table-column prop="stock_no" label="編號" width="150"> </el-table-column>
    <el-table-column prop="trade_price" label="成交價" width="100">
    </el-table-column>
    <el-table-column label="股數">
      <template #default="scope">
        <span>{{ scope.row.num }}</span>
      </template>
    </el-table-column>
    <el-table-column prop="cost" label="成本">
      <template #default="scope">
        <span v-if="scope.row.action == 'buy'">{{ scope.row.fee }}</span>
        <span v-else>0</span>
      </template>
    </el-table-column>
    <el-table-column prop="income" label="實現損益 Income(Loss)" width="300">
      <template #default="scope">
        <span v-if="scope.row.action == 'sale'">{{ scope.row.fee }}</span>
        <span v-else>0</span>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination background layout="prev, pager, next" :total="1000">
  </el-pagination>
</template>

<script>
import { db } from "../firebase.js";
export default {
  data() {
    return {
      tradeLog: [],
      tableData: [
        {
          date: "2021/05/05",
          action: "現買",
          stockNo: "2609 長榮",
          tradePrice: "84.4",
          num: "250",
          cost: "21100",
          income: "0",
        },
        {
          date: "2021/05/05",
          action: "現買",
          stockNo: "2609 長榮",
          tradePrice: "84.4",
          num: "250",
          cost: "21100",
          income: "0",
        },
      ],
    };
  },
  firestore() {
    return {
      tradeLog: db.collection("trade_log").orderBy('date', 'desc'),
    };
  },
  methods: {
    getTradeLog: function () {
      return this.tradeLog;
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
<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    :row-style="tableRowStyle"
    :header-cell-style="tableHeaderColor"
  >
    <el-table-column prop="date" label="日期" width="180"> </el-table-column>
    <el-table-column prop="action" label="操作" width="80"> </el-table-column>
    <el-table-column prop="stockNo" label="編號" width="150"> </el-table-column>
    <el-table-column prop="tradePrice" label="成交價"> </el-table-column>
    <el-table-column prop="num" label="股數"> </el-table-column>
    <el-table-column prop="cost" label="成本"> </el-table-column>
    <el-table-column prop="income" label="實現損益 Income(Loss)" width="100"> </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
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
        }
      ],
    };
  },
  methods: {
    tableRowStyle({ row, rowIndex }) {
      return "background-color: rgba(255,255,255,0);color: #fff;border: solid 2px red;";
    },
    //  modify the table header the background color
    tableHeaderColor({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        return "background-color: rgba(255,255,255,0.2);color: #fff;font-weight: 500;padding: 10px";
      }
    },
  },
};
</script>
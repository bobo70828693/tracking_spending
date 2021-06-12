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
    <!-- <template #default="scope">
        <span v-if="scope.row.action == 'sale'">{{ scope.row.fee }}</span>
        <span v-else>0</span>
      </template> -->
    <!-- </el-table-column> -->
    <el-table-column label="平倉">
      <el-popover placement="top" :width="20" v-model:visible="visible">
        <el-form :inline="true" :model="soldOutInfo" class="demo-form-inline">
          <el-form-item label="編號">
            <el-input v-model="soldOutInfo.stockID" placeholder=""></el-input>
          </el-form-item>
          <el-form-item label="股數" label-width="50px">
            <el-col :span="10">
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
export default {
  props: ['tradeData'],
  data() {
    return {
      soldOutInfo: {
        num: 0,
        stockID: "",
      },
      tradeView: [],
      stockInfo: [],
    };
  },
  methods: {
    soldOut() {
      console.log("sold out");
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
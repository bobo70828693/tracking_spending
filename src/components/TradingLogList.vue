<template>
    <el-table
        v-loading="loading"
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
        <el-table-column prop="stock_id" label="編號" width="100"> </el-table-column>
        <el-table-column prop="trade_price" label="成交價" width="100"> </el-table-column>
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
        <el-table-column prop="income" label="實現損益 Income(Loss)" width="100">
            <template #default="scope">
                <span v-if="scope.row.action == 'sale'">{{ scope.row.fee }}</span>
                <span v-else>0</span>
            </template>
        </el-table-column>
    </el-table>
    <el-pagination
        background
        layout="prev, pager, next"
        @next-click="nextPage"
        @prev-click="prePage"
        @current-change="currentPage"
        :current-page="page"
        :total="totalCount"
    >
    </el-pagination>
</template>

<script>
import { db } from '../firebase.js'
export default {
    data() {
        return {
            tradeLog: [],
            itemNum: 5,
            totalCount: 0,
            page: 1,
            loading: false,
        }
    },
    mounted() {
        this.getTradeLogData(this.page, this.itemNum)
        this.getTradeLogCount()
    },
    methods: {
        getTradeLogData(page, count = this.itemNum) {
            this.loading = true
            var startAt = (page - 1) * count
            var endAt = page * count
            db.collection('trade_log')
                .orderBy('date', 'desc')
                .get()
                .then((currentValue) => {
                    var result = []
                    result = currentValue.docs.map((doc) => {
                        return {
                            ...doc.data(),
                            id: doc.id,
                        }
                    })
                    this.tradeLog = result.slice(startAt, endAt)
                    this.loading = false
                })
        },
        getTradeLogCount() {
            var result = []
            db.collection('trade_log')
                .orderBy('date', 'desc')
                .get()
                .then((currentValue) => {
                    result = currentValue.docs.map((doc) => {
                        return {
                            ...doc.data(),
                            id: doc.id,
                        }
                    })
                    this.totalCount = result.length
                })
        },
        getTradeLog() {
            return this.tradeLog
        },
        currentPage(currentPage) {
            this.getTradeLogData(currentPage)
        },
        prePage() {
            if (this.page > 1) {
                this.page--
                this.getTradeLogData(this.page, this.itemNum)
            }
        },
        nextPage() {
            this.page++
            this.getTradeLogData(this.page, this.itemNum)
        },
        tableRowStyle({ row, rowIndex }) {
            return 'background-color: rgb(48, 44, 44);color: #fff;'
        },
        //  modify the table header the background color
        tableHeaderColor({ row, column, rowIndex, columnIndex }) {
            if (rowIndex === 0) {
                return 'background-color: rgb(48, 44, 44);color: #fff;font-weight: 500;padding: 10px'
            }
        },
    },
}
</script>

<template>
    <el-form class="trade_box" :inline="true" :model="trad_form">
        <el-form-item label="日期">
            <el-col>
                <el-date-picker
                    v-model="tradeInfo.date"
                    type="date"
                    format="YYYY-MM-DD"
                    placeholder="選擇日期"
                    size="medium"
                >
                </el-date-picker>
            </el-col>
        </el-form-item>
        <el-form-item label="股號" style="width: 150px">
            <el-col>
                <el-select v-model="tradeInfo.stock_id" filterable placeholder="請選擇">
                    <el-option
                        v-for="oneStock in stockList"
                        :key="oneStock.stock_id"
                        :label="oneStock.stock_id + ' ' + oneStock.stock_name"
                        :value="oneStock.stock_id"
                    >
                    </el-option>
                </el-select>
            </el-col>
        </el-form-item>
        <el-form-item label="股數" style="width: 120px">
            <el-col>
                <el-input v-model="tradeInfo.num" clearable> </el-input>
            </el-col>
        </el-form-item>
        <el-form-item label="成交價">
            <el-col>
                <el-input-number
                    v-model="tradeInfo.tradePrice"
                    :precision="2"
                    :step="0.1"
                    :max="1000"
                ></el-input-number>
            </el-col>
        </el-form-item>
        <el-form-item>
            <el-button
                :type="isSubmit ? 'success' : 'warning'"
                icon="el-icon-check"
                circle
                @click="onSubmit"
            ></el-button>
        </el-form-item>
    </el-form>
</template>

<script>
import { rtdb } from '../firebase.js'

export default {
    data() {
        return {
            tradeInfo: {
                date: '',
                num: 1,
                tradePrice: 0,
                stock_id: '',
            },
            stockList: [],
            isSubmit: false,
        }
    },
    computed: {
        getStockList() {
            rtdb.ref('stock_list').once('value', (currentValue) => {
                this.stockList = currentValue.val()
            })
        },
    },
    methods: {
        onSubmit() {
            var date = new Date(this.tradeInfo.date)
            var month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
            var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()

            var dateStr = date.getFullYear() + '-' + month + '-' + day

            rtdb.ref('trade').push({
                stock_id: this.tradeInfo.stock_id,
                is_sell_out: false,
                num: this.tradeInfo.num,
                trade_price: this.tradeInfo.tradePrice,
                date: dateStr,
            })

            // 交易紀錄
            rtdb.ref('trade_log').push({
                action: 'buy',
                num: this.tradeInfo.num,
                stock_id: this.tradeInfo.stock_id,
                trade_price: this.tradeInfo.tradePrice,
                date: dateStr,
                fee: Math.round(this.tradeInfo.num * this.tradeInfo.tradePrice),
            })

            this.isSubmit = true
        },
    },
}
</script>

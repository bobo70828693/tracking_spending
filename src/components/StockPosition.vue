<template>
    <div :class="leftPage ? 'pages leftPage' : 'pages'" ref="pages">
        <div class="page page1">
            <share-holding-graph :tradeData="tradeData"></share-holding-graph>
        </div>
        <div class="page page2">
            <trading-view :tradeData="tradeData"></trading-view>
        </div>
    </div>
    <div class="press_box">
        <el-button type="warning" icon="el-icon-arrow-left" circle @click="nextPage()"></el-button>
        <el-button type="warning" icon="el-icon-arrow-right" circle @click="nextPage()"></el-button>
    </div>
</template>

<script>
import ShareHoldingGraph from './Dounhunt/ShareHoldingGraph.vue'
import TradingView from './TradingView.vue'
import { rtdb } from '../firebase.js'
import { apiFugleStockInfo } from '../api.js'

export default {
    components: {
        ShareHoldingGraph,
        TradingView,
    },
    data() {
        return {
            tradeData: [],
            tradeView: [],
            leftPage: false,
        }
    },
    created() {
        rtdb.ref('trade')
            .orderByChild('date')
            .once('value')
            .then((data) => {
                data.forEach((element) => {
                    let result = []
                    result = {
                        ...element.val(),
                        id: element.key,
                    }
                    this.tradeView.push(result)
                })
                this.tradeView = this.tradeView.reverse()
                this.handleTradeData()
            })
    },
    methods: {
        nextPage() {
            this.leftPage = !this.leftPage
        },
        async handleTradeData() {
            let stockIDList = new Set(...[this.tradeView.map((val) => val.stock_id)])
            let stockIDListAr = Array.from(stockIDList)
            let tradeData = []

            for (let i = 0; i < stockIDListAr.length; i++) {
                let data = []
                await this.getStockInfo(stockIDListAr[i])
                this.tradeView.forEach((currentValue) => {
                    if (stockIDListAr[i] == currentValue.stock_id && currentValue.is_sell_out == false) {
                        if (data.length == 0) {
                            data = {
                                id: currentValue.id,
                                stockID: currentValue.stock_id,
                                priceReference: this.stockInfo.priceReference,
                                isSellOut: currentValue.is_sell_out,
                                num: parseInt(currentValue.num),
                                income: Math.round(
                                    (this.stockInfo.priceReference - currentValue.trade_price) *
                                        parseInt(currentValue.num)
                                ),
                                tradePrice: currentValue.trade_price,
                            }
                        } else {
                            data = {
                                id: currentValue.id,
                                stockID: currentValue.stock_id,
                                priceReference: this.stockInfo.priceReference,
                                isSellOut: currentValue.is_sell_out,
                                num: parseInt(data.num) + parseInt(currentValue.num),
                                income: 0, // 待計算
                                tradePrice:
                                    (parseFloat(data.tradePrice) * parseInt(data.num) +
                                        parseFloat(currentValue.trade_price) * parseInt(currentValue.num)) /
                                    (parseInt(data.num) + parseInt(currentValue.num)),
                            }
                        }
                    }
                })
                if (data.length != 0) {
                    tradeData.push(data)
                }
            }
            this.tradeData = tradeData
        },
        getTrade: function () {
            return this.tradeData
        },
        getStockInfo(stockID) {
            let stockInfo = apiFugleStockInfo({
                params: {
                    symbolId: stockID,
                    apiToken: import.meta.env.VITE_FUGLE_API_TOKEN,
                },
            })
                .then((res) => {
                    this.stockInfo = res.data.data.meta
                })
                .catch((error) => {
                    console.log('連線異常')
                })

            return stockInfo
        },
    },
}
</script>

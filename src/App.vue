<template>
    <nav-bar></nav-bar>
    <over-view></over-view>
    <div class="wrapper">
        <div class="trading_list">
            <h3>Trading Log</h3>
            <div class="trading_table">
                <trading-log-list></trading-log-list>
                <add-trade></add-trade>
            </div>
        </div>
        <div class="stock_position">
            <h3>Stock Position</h3>
            <stock-position></stock-position>
        </div>
    </div>
</template>

<script>
import Chart from 'chart.js'
import NavBar from '@/components/NavBar.vue'
import TradingLogList from '@/components/TradingLogList.vue'
import AddTrade from '@/components/AddTrade.vue'
import StockPosition from '@/components/StockPosition.vue'
import OverView from '@/components/OverView.vue'

export default {
    name: 'App',
    components: {
        NavBar,
        TradingLogList,
        AddTrade,
        StockPosition,
        OverView,
    },
}
</script>

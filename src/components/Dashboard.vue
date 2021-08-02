<template>
    <div class="wrapper">
        <over-view></over-view>
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
import TradingLogList from '@/components/TradingLogList.vue'
import AddTrade from '@/components/AddTrade.vue'
import StockPosition from '@/components/StockPosition.vue'
import OverView from '@/components/OverView.vue'

export default {
    components: {
        TradingLogList,
        AddTrade,
        StockPosition,
        OverView,
    },
    mounted() {
        if (window.$cookies.get('isLogin') == 'false') {
            this.$router.push('/')
        }
    },
}
</script>

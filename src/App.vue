<template>
  <nav-bar></nav-bar>
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
      <div :class="leftPage ? 'pages leftPage' : 'pages'" ref="pages">
        <div class="page page1">
          <share-holding-graph></share-holding-graph>
        </div>
        <div class="page page2">
          <trading-view></trading-view>
        </div>
      </div>
      <div class="press_box">
        <el-button type="warning" icon="el-icon-arrow-left" circle @click="nextPage()"></el-button>
        <el-button type="warning" icon="el-icon-arrow-right" circle @click="nextPage()"></el-button>
      </div>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Chart from "chart.js";
import NavBar from "./components/NavBar.vue";
import ShareHoldingGraph from "./components/Dounhunt/ShareHoldingGraph.vue";
import TradingLogList from "./components/TradingLogList.vue";
import AddTrade from "./components/AddTrade.vue";
import TradingView from "./components/TradingView.vue";

export default {
  name: "App",
  components: {
    // HelloWorld
    NavBar,
    ShareHoldingGraph,
    TradingLogList,
    AddTrade,
    TradingView,
  },
  data() {
    return {
      leftPage: false,
    };
  },
  methods: {
    nextPage() {
      this.leftPage = !this.leftPage;
    },
  },
};
</script>

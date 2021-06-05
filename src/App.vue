<template>
  <nav-bar></nav-bar>
  <div class="wrapper">
    <div class="trading_list">
      <h3>Trading Log</h3>
      <div class="trading_table">
        <trading-list></trading-list>
        <add-trade></add-trade>
      </div>
    </div>
    <div class="stock_position" @click="nextPage()">
      <h3>Stock Position</h3>
      <div :class="(leftPage)? 'pages leftPage': 'pages'" ref="pages">
          <div class="page page1">
            <share-holding-graph></share-holding-graph>
          </div>
          <div class="page page2">
            <trading-view></trading-view>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Chart from "chart.js";
import NavBar from "./components/NavBar.vue";
import ShareHoldingGraph from "./components/Dounhunt/ShareHoldingGraph.vue";
import TradingList from "./components/TradingList.vue";
import AddTrade from "./components/AddTrade.vue";
import TradingView from "./components/TradingView.vue";

export default {
  name: "App",
  components: {
    // HelloWorld
    NavBar,
    ShareHoldingGraph,
    TradingList,
    AddTrade,
    TradingView,
  },
  data() {
    return {
      leftPage: false
    }
  },
  methods: {
    nextPage() {
      this.leftPage = !(this.leftPage);
    }
  }
};
</script>

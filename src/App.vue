<template>
  <nav-bar></nav-bar>
  <!-- <dash-board></dash-board> -->
  <div class="wrapper">
    <div class="trading_list">
      <h3>Trading Log</h3>
      <div class="trading_table">
        <trading-list></trading-list>
        <add-trade></add-trade>
      </div>
    </div>
    <div class="stock_position">
      <h3>Stock Position</h3>
      <share-holding-graph></share-holding-graph>
    </div>
  </div>
  <!-- <h3 class="text">Test</h3>
  <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Hello Vue 3.0 + Vite" /> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Chart from "chart.js";
import NavBar from "./components/NavBar.vue";
import DashBoard from "./components/DashBoard.vue";
import ShareHoldingGraph from "./components/Dounhunt/ShareHoldingGraph.vue";
import TradingList from "./components/TradingList.vue";
import AddTrade from "./components/AddTrade.vue";

export default {
  name: "App",
  components: {
    // HelloWorld
    NavBar,
    DashBoard,
    ShareHoldingGraph,
    TradingList,
    AddTrade
  },
};
</script>

<template>
    <div class="top-view-box">
        <div class="box invest-in-box">
            <h3 class="label_text invest_label">投入資金</h3>
            <h2 class="invest_text">{{ investIn }}</h2>
        </div>
        <div class="box income-box">
            <h3 class="label_text income_label">總損益</h3>
            <h2 class="income_text">{{ income }}</h2>
        </div>
        <div class="box remuneration">
            <h3 class="label_text remuneration_label">報酬率</h3>
            <h2 class="remuneration_text">{{ remuneration }}</h2>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            investIn: 235000,
            income: 12800,
            remuneration: 0,
        }
    },
    computed: {
        calcRemuneration() {
            this.remuneration = ((this.income / this.investIn) * 100).toFixed(2)
            return this.remuneration
        },
    },
}
</script>

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
            <h2 class="remuneration_text">{{ calcRemuneration }}</h2>
        </div>
    </div>
</template>

<script>
import { rtdb } from '../firebase.js'
export default {
    data() {
        return {
            investIn: 0,
            income: 0,
        }
    },
    computed: {
        calcRemuneration() {
            return ((this.income / this.investIn) * 100).toFixed(2)
        },
    },
    methods: {
        calcIncome() {
            rtdb.ref('trade_log')
                .once('value')
                .then((data) => {
                    data.forEach((currentValue) => {
                        if (currentValue.val().action == 'sale') {
                            this.income += currentValue.val().fee
                        }
                    })
                })
        },
        getInvestInData() {
            rtdb.ref('invest_in').once('value', (currentValue) => {
                this.investIn = currentValue.val()
            })
        },
    },
    mounted() {
        this.getInvestInData()
        this.calcIncome()
    },
}
</script>

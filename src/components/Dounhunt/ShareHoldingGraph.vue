<template>
    <div id="shareHoldBox">
        <dounhnut-example
            :dounhuntId="dounhuntId"
            :labels="labels"
            :dataSets="datasets"
            :options="options"
        ></dounhnut-example>
    </div>
</template>

<script>
import DounhnutExample from '../GraphExample/DounhnutExample.vue'

export default {
    name: 'ShareHoldingGraph',
    components: {
        DounhnutExample,
    },
    props: ['tradeData'],
    data() {
        return {
            dounhuntId: 'sharehoding-graph',
            labels: [],
            datasets: [
                {
                    data: [],
                    backgroundColor: [],
                },
            ],
            options: {
                cutoutPercentage: 30,
            },
        }
    },
    beforeUpdate() {
        this.tradeData.forEach((stockInfo) => {
            this.labels.push(stockInfo.stockID)
            this.datasets[0].data.push(stockInfo.num)
            this.datasets[0].backgroundColor.push(this.getRandomColor())
        })
    },
    methods: {
        getRandomColor() {
            var letters = '0123456789ABCDEF'
            var color = '#'
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)]
            }
            return color
        },
    },
}
</script>

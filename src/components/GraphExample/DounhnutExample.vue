<template>
    <canvas :id="dounhuntId"></canvas>
</template>
<script>
export default {
    name: 'DounhuntExample',
    props: {
        dounhuntId: {
            type: String,
        },
        labels: {
            type: Array,
            default() {
                return []
            },
        },
        dataSets: {
            type: Array,
            default() {
                return []
            },
        },
        options: {
            type: Object,
            default() {
                return {}
            },
        },
    },
    data() {
        return {
            dounhnutData: {
                type: 'doughnut',
                data: {
                    labels: this.labels,
                    datasets: this.dataSets,
                },
                options: this.options,
            },
        }
    },
    watch: {
        labels: {
            immediate: false,
            deep: true,
            handler(val) {
                this.render()
            },
        },
    },
    methods: {
        render() {
            const ctx = document.getElementById('sharehoding-graph')
            new Chart(ctx, this.dounhnutData)
        },
    },
}
</script>

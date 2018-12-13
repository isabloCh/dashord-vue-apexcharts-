<template>
  <b-container fluid>
    <b-row>
      <apexcharts type="bar" height=380px width=1000px :options="chartOptions" :series="series"></apexcharts>
    </b-row>
  </b-container>
</template>

<script>
  import VueApexCharts from 'vue-apexcharts'

  export default {
    data: function () {
      return {
        chartOptions: {
          chart: {
            id: 'vuechart-example'
          },
          xaxis: {
            categories: [1, 2, 3, 4, 5, 6, 7, 8]
          }
        },
        series: [{
          name: 'series-1',
          data: [30, 40, 75, 50, 49, 60, 70, 91]
        }]
      }
    },
    components: {
      apexcharts: VueApexCharts
    }
  }
</script>

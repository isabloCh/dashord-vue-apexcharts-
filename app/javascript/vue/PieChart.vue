<template>
  <div class="chart">
    <apexchart type=radialBar height=400 width=800 :options="chartOptions" :series="series" />
  </div>
</template>

<script>
  import VueApexCharts from 'vue-apexcharts'

  export default {
    data: function () {
      return {
        series: [44, 85, 67, 83],
        chartOptions: {
          plotOptions: {
            radialBar: {
              dataLabels: {
                name: {
                  fontSize: '22px',
                },
                value: {
                  fontSize: '16px',
                },
                total: {
                  show: true,
                  label: 'Total',
                  formatter: function (w) {
                    // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                    return 249
                  }
                }
              }
            }
          },
          labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
        }
      }
    },
    components: {
      apexchart: VueApexCharts,
    }
  }  
</script>

<style scoped>
  .chart{
    max-height: 100px;
  }
</style>

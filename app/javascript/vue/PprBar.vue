<template >
  <div class="pprBar">
    <pie-chart/>
  </div>
</template>

<script>
  import PieChart from './PieChart'

  export default {
    components: {
      PieChart: PieChart
    }
  }
</script>

<style scoped>
  .pprBar{
    background-color: blueviolet
  }
</style>

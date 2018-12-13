<template >
  <b-container class="pprBar">
    <b-row>
      <b-col cols="2"></b-col>
      <b-col cols="8"><pie-chart/></b-col>
      <b-col cols="2"></b-col>
    </b-row>
  </b-container>
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

<template>
  <b-container fluid class="row-bar">
    <b-row class="bar-issue">
      <issue-bar/>
    </b-row>
    <b-row class="bar-ppr">
      <ppr-bar/>
    </b-row>
  </b-container>
</template>

<script>
import IssueBar from './IssueBar'
import PprBar from './PprBar'


export default {
  components: {
    IssueBar: IssueBar,
    PprBar: PprBar
  }
}
</script>

<style scoped>
  .row-bar {
    /* background-color: blueviolet;
    height: 400px; */
    /* min-width: 100%; */
  }
  .bar-issue {
    /* width: 100%; */
    height: 400px;
  }
  .bar-ppr {
    height: 400px;
    width: 900px; 
  }
</style>

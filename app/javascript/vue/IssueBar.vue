<template>
  <b-container fluid class="issueBar">
      <b-row>
        <b-col md="2" ><total-issue/></b-col>
        <b-col md="8"><issue-chart/></b-col>
        <b-col md="2"><completed-issue/></b-col>
      </b-row>
  </b-container>    
</template>

<script>
  import IssueChart from './IssueChart'
  import TotalIssue from './TotalIssue'
  import CompletedIssue from './CompletedIssue'

  export default {
    components: {
      IssueChart: IssueChart,
      TotalIssue: TotalIssue,
      CompletedIssue: CompletedIssue
    }
  }
</script>

<style scoped>
  .issueBar {
    background-color: aqua
  }
</style>


<b-col md="3" class="py-3">
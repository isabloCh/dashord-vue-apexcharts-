<template>
  <div class="issueBar">
      <b-row>
        <b-col><total-issue/></b-col>
        <b-col><issue-chart/></b-col>
        <b-col><completed-issue/></b-col>
      </b-row>
  </div>    
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



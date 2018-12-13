<template>
  <div>
    <b-row class="bar-issue">
      <issue-bar/>
    </b-row>
    <b-row class="bar-ppr">
      <ppr-bar/>
    </b-row>
  </div>
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
  .bar-issue {
    height: 400px;
  }
  .bar-ppr {
    height: 400px;
  }
</style>

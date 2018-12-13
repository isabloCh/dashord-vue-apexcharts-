<template>
  <b-container fluid>
    <b-row><p>Выполнено в срок заявок: </p></b-row>
    <b-row><p>{{total}}</p></b-row>
  </b-container>
</template>

<script>
  export default {
    data() {
      return {
        total: "10500"
      }
    }
  }
</script>

<style scoped>
  p{
    font-size: 40px;
  }
</style>

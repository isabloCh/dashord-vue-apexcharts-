<template>
  <b-container class="total">
    <b-row><p>Всего заявок:</p></b-row>
    <b-row><p>{{total}}</p></b-row>
  </b-container>
</template>

<script>
  export default {
    data() {
      return {
        total: "100500"
      }
    }
  }
</script>

<style>
  p{
      font-size: 40px;
    }
</style>

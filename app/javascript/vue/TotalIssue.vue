<template>
  <div class="total">
    <p>Всего заявок: </p>
    <p>{{total}}</p>
  </div>
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

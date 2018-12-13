<template>
  <div>
    <p>Выполнено в срок заявок: </p>
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

<style scoped>
  p{
    font-size: 40px;
  }
</style>

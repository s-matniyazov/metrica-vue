<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3 class="bg-warning">
      You’ve successfully created a project with
    </h3>


    <i class="bi bi-0-circle bg-warning"></i>
  </div>
</template>

<style scoped>
</style>

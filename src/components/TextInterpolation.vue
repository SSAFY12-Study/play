<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div>
    <div class="text-h1">{{ msg }}</div>
  </div>
</template>

<style scoped></style>

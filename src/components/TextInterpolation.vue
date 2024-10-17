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
    <h1>{{ msg }}</h1>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  font-family: 'Monoton', sans-serif;
  font-weight: 400;
  font-style: normal;
}
</style>

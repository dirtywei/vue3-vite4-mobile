<template>
  <div> Home </div>
</template>

<script setup>
  import { sStorage } from '@/utils'
  const count = ref(0)
  console.log(count.value)
  sStorage.set('TEST_LS', '你好啊')
</script>

<style lang="scss" scoped></style>

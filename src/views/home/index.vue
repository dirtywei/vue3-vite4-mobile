<template>
  <div class="home"> Home </div>
</template>

<script setup>
  import { sStorage } from '@/utils'
  const count = ref(0)
  console.log(count.value)
  sStorage.set('TEST_LS', '你好啊')
</script>

<style lang="scss" scoped>
  .home {
    width: 200px;
    height: 300px;
    background-color: #000;
  }
</style>

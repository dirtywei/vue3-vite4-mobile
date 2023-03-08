<template>
  <div class="home">
    <svg-icon iconName="logo"></svg-icon>
  </div>
</template>

<script setup>
  import { sStorage } from '@/utils'
  sStorage.set('TEST_LS', '你好啊')
</script>

<style lang="scss" scoped>
  .home {
    width: 200px;
    height: 300px;
    background-color: #000;
  }
</style>

<script setup>
  import 'vant/es/toast/style'
  import 'vant/es/dialog/style'
  import 'vant/es/notify/style'
  import 'vant/es/image-preview/style'
</script>

<template>
  <router-view v-slot="{ Component }">
    <KeepAlive>
      <component :is="Component" v-if="$route.meta.keepAlive" />
    </KeepAlive>
    <component :is="Component" v-if="!$route.meta.keepAlive" />
  </router-view>
</template>

<style scoped></style>

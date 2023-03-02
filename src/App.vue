<script setup>
  import { showToast, showDialog, showNotify, showImagePreview } from 'vant'
  import 'vant/es/toast/style'
  import 'vant/es/dialog/style'
  import 'vant/es/notify/style'
  import 'vant/es/image-preview/style'

  initGlobalVant()
  function initGlobalVant() {
    window.$showToast = showToast
    window.$showDialog = showDialog
    window.$showNotify = showNotify
    window.$showImagePreview = showImagePreview
  }
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

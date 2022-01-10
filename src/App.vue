<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { NMessageProvider } from 'naive-ui'
import GlobalMessage from './components/GlobalMessage.vue'
</script>

<template>
  <!-- App.vue -->
  <n-message-provider>
    <GlobalMessage />
    <div class="container">
      <router-view />
    </div>
  </n-message-provider>
</template>
<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 20px;
  .container {
    width: 80%;
    margin: auto;
  }
}
</style>

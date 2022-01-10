<template>
  <n-empty description="你什么也找不到">
    <template #extra>
      <n-button size="small" @click="goBack">
        返回首页
      </n-button>
    </template>
  </n-empty>
</template>
<script setup>
import router from '../router'
import { NEmpty, NButton } from 'naive-ui'
const goBack = () => {
  router.push('/')
}
</script>

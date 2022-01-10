<script setup>
import { SearchSharp as SearchIcon } from '@vicons/ionicons5'
import { NInput, NIcon } from 'naive-ui'
import { defineComponent, ref } from 'vue'
import router from '../router'
const searchparams = ref('')

const handleSearch = async () => {
  if (searchparams.value) {
    router.push({ path: `/block/${searchparams.value}` })
  }
}
defineComponent({
  components: {
    SearchIcon
  }
})
</script>
<template>
  <n-input
    v-model:value="searchparams"
    class="searchBar"
    placeholder="搜索"
    @keyup.enter.stop="handleSearch"
  >
    <template #prefix>
      <n-icon>
        <search-icon />
      </n-icon>
    </template>
  </n-input>
</template>

<style lang="scss">
</style>

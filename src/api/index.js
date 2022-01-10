import { get } from '../utils/request'

import { ref, onMounted } from 'vue'
export const fetchBlockData = (blockid) => {
  const blockData = ref({})
  const transactionList = ref([])
  const loading = ref(true)
  onMounted(async () => {
    try {
      const res = await get(`rawblock/${blockid}`)
      blockData.value = res
      transactionList.value = res.tx || []
    } catch (e) {
      console.log(e)
      loading.value = false
    }
    loading.value = false
  })
  return {
    blockData,
    transactionList,
    loading
  }
}

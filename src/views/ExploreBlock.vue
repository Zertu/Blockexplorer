<template>
  <SearchBar />
  <div v-if="loading">
    <!-- loading -->
    <n-space vertical>
      <h2>Block</h2>
      <n-skeleton height="40px" width="99%" :sharp="false" />
      <n-skeleton height="40px" width="99%" :sharp="false" />
      <n-skeleton height="40px" width="99%" :sharp="false" />
      <n-skeleton height="40px" width="99%" :sharp="false" />
      <n-skeleton height="40px" width="99%" :sharp="false" />
      <n-skeleton height="40px" width="99%" :sharp="false" />
      <n-skeleton height="40px" width="99%" :sharp="false" />
      <n-skeleton height="40px" width="99%" :sharp="false" />
      <n-skeleton height="40px" width="99%" :sharp="false" />
      <n-skeleton height="40px" width="99%" :sharp="false" />
      <n-skeleton height="40px" width="99%" :sharp="false" />
    </n-space>
    <h2>Block Transactions</h2>
    <n-space vertical>
      <n-skeleton height="40px" width="99%" :sharp="false" />
      <n-skeleton height="40px" width="99%" :sharp="false" />
      <n-skeleton height="40px" width="99%" :sharp="false" />
      <n-skeleton height="40px" width="99%" :sharp="false" />
      <n-skeleton height="40px" width="99%" :sharp="false" />
    </n-space>
  </div>
  <div v-else>
    <div v-if="!blockData.hash">
      <nodata />
    </div>
    <div v-else>
      <h2>Block {{ blockData.height }}</h2>
      <block-info :block-data="blockData" />
      <h2>Block Transactions</h2>
      <transaction-list :transaction-list="transactionList" />
    </div>
  </div>
</template>

<script setup>
import {
  NSpace,
  NSkeleton
} from 'naive-ui'

import Nodata from '../components/Nodata.vue'
import BlockInfo from '../components/BlockInfo.vue'
// eslint-disable-next-line no-unused-vars
import TransactionList from '../components/TransactionList.vue'
import SearchBar from '../components/SearchBar.vue'
import router from '../router'
import { fetchBlockData } from '../api'
import { useRoute } from 'vue-router'
const route = useRoute()
const { id } = route.params
if (!id) {
  router.push('/')
}
const { transactionList, blockData, loading } = fetchBlockData(id)
</script>

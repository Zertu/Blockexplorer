<template>
  <n-list>
    <n-list-item>
      <n-grid :cols="2" item-responsive>
        <n-gi span="2 400:2 800:1">
          <n-tooltip :show-arrow="false" placement="top" trigger="hover">
            <template #trigger>
              <n-thing>Hash </n-thing>
            </template>
            <span>Unique identifier used to identify a particular block </span>
          </n-tooltip>
        </n-gi>
        <n-gi span="2 400:2 800:1">
          <n-thing> {{ blockData.hash }}</n-thing>
        </n-gi>
      </n-grid>
    </n-list-item>
    <n-list-item>
      <n-grid :cols="2" item-responsive>
        <n-gi span="2 400:2 800:1">
          <n-thing>Timestamp </n-thing>
        </n-gi>
        <n-gi span="2 400:2 800:1">
          <n-thing>
            {{
              new Date(blockData.time * 1000)
                .toLocaleString()
                .replace(/\//g, "-")
            }}
          </n-thing>
        </n-gi>
      </n-grid>
    </n-list-item>
    <n-list-item>
      <n-grid :cols="2" item-responsive>
        <n-gi span="2 400:2 800:1">
          <n-tooltip :show-arrow="false" placement="top" trigger="hover">
            <template #trigger>
              <n-thing>Height </n-thing>
            </template>
            <span>Number of blocks connected on the blockchain </span>
          </n-tooltip>
        </n-gi>
        <n-gi span="2 400:2 800:1">
          <n-thing> {{ blockData.height }}</n-thing>
        </n-gi>
      </n-grid>
    </n-list-item>
    <n-list-item>
      <n-grid :cols="2" item-responsive>
        <n-gi span="2 400:2 800:1">
          <n-tooltip :show-arrow="false" placement="top" trigger="hover">
            <template #trigger>
              <n-thing>Number of Transactions </n-thing>
            </template>
            <span>Number of transactions included in this block </span>
          </n-tooltip>
        </n-gi>
        <n-gi span="2 400:2 800:1">
          <n-thing> {{ blockData.tx.length }}</n-thing>
        </n-gi>
      </n-grid>
    </n-list-item>
    <n-list-item>
      <n-grid :cols="2" item-responsive>
        <n-gi span="2 400:2 800:1">
          <n-tooltip :show-arrow="false" placement="top" trigger="hover">
            <template #trigger>
              <n-thing>Merkle root </n-thing>
            </template>
            <span>The root node of a merkle tree, a descendant of all the hashed
              pairs in the tree
            </span>
          </n-tooltip>
        </n-gi>
        <n-gi span="2 400:2 800:1">
          <n-thing>{{ blockData.mrkl_root }} </n-thing>
        </n-gi>
      </n-grid>
    </n-list-item>
    <n-list-item>
      <n-grid :cols="2" item-responsive>
        <n-gi span="2 400:2 800:1">
          <n-tooltip :show-arrow="false" placement="top" trigger="hover">
            <template #trigger>
              <n-thing>Version </n-thing>
            </template>
            <span>Block version related to protocol proposals underway </span>
          </n-tooltip>
        </n-gi>
        <n-gi span="2 400:2 800:1">
          <n-thing> {{ `0x${blockData.ver.toString(16)}` }} </n-thing>
        </n-gi>
      </n-grid>
    </n-list-item>

    <n-list-item>
      <n-grid :cols="2" item-responsive>
        <n-gi span="2 400:2 800:1">
          <n-tooltip :show-arrow="false" placement="top" trigger="hover">
            <template #trigger>
              <n-thing>Bits </n-thing>
            </template>
            <span>A sub-unit of BTC, equal to 0.000001 BTC </span>
          </n-tooltip>
        </n-gi>
        <n-gi span="2 400:2 800:1">
          <n-thing>{{ blockData.bits }} </n-thing>
        </n-gi>
      </n-grid>
    </n-list-item>

    <n-list-item>
      <n-grid :cols="2" item-responsive>
        <n-gi span="2 400:2 800:1">
          <n-tooltip :show-arrow="false" placement="top" trigger="hover">
            <template #trigger>
              <n-thing>Weight </n-thing>
            </template>
            <span>A measurement to compare the size of different transactions to
              each other in proportion to the block size limit
            </span>
          </n-tooltip>
        </n-gi>
        <n-gi span="2 400:2 800:1">
          <n-thing>{{ blockData.weight }} </n-thing>
        </n-gi>
      </n-grid>
    </n-list-item>

    <n-list-item>
      <n-grid :cols="2" item-responsive>
        <n-gi span="2 400:2 800:1">
          <n-tooltip :show-arrow="false" placement="top" trigger="hover">
            <template #trigger>
              <n-thing>Size </n-thing>
            </template>
            <span>Total size of the block </span>
          </n-tooltip>
        </n-gi>
        <n-gi span="2 400:2 800:1">
          <n-thing> {{ blockData.size }} </n-thing>
        </n-gi>
      </n-grid>
    </n-list-item>

    <n-list-item>
      <n-grid :cols="2" item-responsive>
        <n-gi span="2 400:2 800:1">
          <n-tooltip :show-arrow="false" placement="top" trigger="hover">
            <template #trigger>
              <n-thing>Nonce </n-thing>
            </template>
            <span>Random value that can be adjusted to satisfy the proof of work
            </span>
          </n-tooltip>
        </n-gi>
        <n-gi span="2 400:2 800:1">
          <n-thing> {{ blockData.nonce }}</n-thing>
        </n-gi>
      </n-grid>
    </n-list-item>
  </n-list>
</template>
<script setup>
import { toRefs, defineProps } from 'vue'
import {
  NList,
  NThing,
  NListItem,
  NTooltip,
  NGrid,
  NGi
} from 'naive-ui'
const props = defineProps({
  blockData: Object
})
const { blockData } = toRefs(props)
</script>

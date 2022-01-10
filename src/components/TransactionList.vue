<template>
  <div v-if="transactionList.length">
    <n-list>
      <n-list-item
        v-for="transaction in transactionList.slice(
          pagination.pageSize * pagination.page,
          pagination.pageSize * (pagination.page + 1)
        )"
        :key="transaction.hash"
      >
        <n-grid item-responsive>
          <n-gi :span="4">
            Fee
          </n-gi>
          <n-gi :span="20">
            {{
              `${(transaction.fee / 100000000).toFixed(8)} BTC`
            }}
          </n-gi>
        </n-grid>
        <n-grid item-responsive>
          <n-gi :span="4">
            Hash
          </n-gi>
          <n-gi span="20 400:20 800:16">
            <n-ellipsis style="max-width: calc(100% - 10px)">
              {{ transaction.hash }}
            </n-ellipsis>
          </n-gi>
          <n-gi span="24 400:24 800:4">
            <n-grid item-responsive>
              <n-gi span="4 400:4 800:0">
                <div class="hiddenitem">
                  Date
                </div>
              </n-gi>
              <n-gi span="20 400:20 800:6">
                <div class="leftalginitem">
                  {{
                    new Date(transaction.time * 1000)
                      .toLocaleString()
                      .replace(/\//g, "-")
                  }}
                </div>
              </n-gi>
            </n-grid>
          </n-gi>
        </n-grid>
        <n-grid item-responsive>
          <n-gi :span="4">
            <div class="hiddenitem">
              From
            </div>
          </n-gi>
          <n-gi span="20 400:20 800:9">
            <div v-for="input of transaction.inputs" :key="input.index">
              <div v-if="input.prev_out.addr">
                <n-ellipsis style="max-width: calc(100% - 10px)">
                  <span style="color: rgb(12, 108, 242)">{{
                    input.prev_out.addr
                  }}</span>
                </n-ellipsis>
                <span class="money">
                  <span>{{
                    (input.prev_out.value / 100000000).toFixed(8)
                  }}
                    BTC</span>
                  <n-icon size="14" color="#0c6cf2">
                    <earth-icon />
                  </n-icon>
                </span>
              </div>
              <span v-else>COINBASE (Newly Generated Coins)</span>
            </div>
          </n-gi>
          <n-gi span="0 400:0 800:2">
            <n-icon size="28" color="#339f7b">
              <right-arrow />
            </n-icon>
          </n-gi>

          <n-gi span="4 400:4 800:0">
            <div class="hiddenitem">
              To
            </div>
          </n-gi>
          <n-gi span="20 400:20 800:9">
            <div v-for="out of transaction.out" :key="out.index">
              <div v-if="out.addr">
                <n-ellipsis style="max-width: calc(100% - 10px)">
                  <span style="color: rgb(12, 108, 242)">{{ out.addr }}</span>
                </n-ellipsis>
                <span class="money">
                  <span>{{ (out.value / 100000000).toFixed(8) }} BTC</span>
                  <n-icon size="14" color="#ea5b50">
                    <earth-icon />
                  </n-icon>
                </span>
              </div>
              <span v-else>COINBASE (Newly Generated Coins)</span>
            </div>
          </n-gi>
        </n-grid>
      </n-list-item>
    </n-list>
    <n-pagination
      v-model:page="pagination.page"
      v-model:page-size="pagination.pageSize"
      :item-count="transactionList.length"
      :page-slot="5"
    />
  </div>
</template>

<script setup>
import { toRefs, reactive, defineProps, defineComponent } from 'vue'
import {
  Earth as EarthIcon,
  ArrowRedoSharp as RightArrow
} from '@vicons/ionicons5'
import {
  NList,
  NListItem,
  NEllipsis,
  NGrid,
  NGi,
  NPagination,
  NIcon
} from 'naive-ui'
const props = defineProps({
  transactionList: {
    type: Array,
    default: () => []
  }
})

const pagination = reactive({
  page: 1,
  pageSize: 10
})
const { transactionList } = toRefs(props)
defineComponent({
  components: {
    EarthIcon,
    RightArrow
  }
})
</script>

<style>
@media screen and (min-width: 1020px) {
  .leftalginitem {
    display: flex;
    justify-content: flex-end;
  }
  .hiddenitem {
    display: none;
  }
  .money {
    float: right;
  }
}
@media screen and (max-width: 1020px) {
  .leftalginitem {
    display: flex;
    justify-content: flex-start;
  }
}
</style>

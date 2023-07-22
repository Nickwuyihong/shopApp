<script setup lang="ts">
import GoodsCard from '../components/GoodsCard.vue'
import { computed, onMounted } from 'vue'
import store from '@/stores'

// 请求接口
onMounted(() => store.dispatch('getListRequest'))

const list = computed(() => store.getters.getList)
</script>

<template>
  <main class="list">
    <div v-if="list.length > 0" style="width: 100%;">
      <div v-for="item in list" :key="item.id">
        <GoodsCard :id="item.id" :img="item.img" :is-cart="false" :name="item.name" :price="item.price"
          :nums="item.nums" />
      </div>
    </div>

    <div v-else class="no-data">暂无数据</div>
  </main>
</template>

<style scoped>
.list {
  display: flex;
  width: 100vw;
  height: 100vh;
}
.no-data {
  margin: auto;
}
</style>
<script setup lang="ts">
import GoodsCard from '../components/GoodsCard.vue'
import { computed, } from 'vue';
import store from '@/stores'

const list = computed(() => store.getters.getCartList)
const price = computed(() => store.getters.getSumPrice)
</script>

<template>
  <main class="list">
    <div v-if="list.length > 0" style="width: 100%;">
      <div v-for="item in list" :key="item.id">
        <GoodsCard :id="item.id" :img="item.img" :is-cart="true" :name="item.name" :price="item.price"
          :nums="item.nums" />
      </div>
    </div>
    <div v-else class="no-data">暂无数据</div>

    <div class="price">总价格：{{ price }}元</div>
  </main>
</template>

<style scoped>
.list {
  display: flex;
  height: 100vh;
}
.no-data {
  margin: auto;
}
.price {
  position: absolute;
  bottom: 4rem;
  left: .5rem;
}
</style>
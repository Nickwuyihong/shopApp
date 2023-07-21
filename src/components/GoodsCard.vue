<script setup lang="ts">
import { DeleteOutlined, ShoppingCartOutlined } from '@ant-design/icons-vue'
import store from '@/stores'

const props = defineProps<{
  id: number;
  name: string;
  img: string;
  isCart: boolean;
  price: number;
  nums: number;
}>()

/** 商品信息 */
const item = {
  id: props.id,
  name: props.name,
  img: props.img,
  price: props.price,
  nums: props.nums,
}

/** 添加购物车商品 */
const addGoods = () => {
  store.commit('addCart', { item })
}

/** 删除购物车 */
const deleteGoods = () => {
  store.commit('deleteCart', { item })
}

/** 修改购物车商品数量 */
const modifyGoods  = () => {
  store.commit('modCart', { item })
}
</script>

<template>
  <div class="goods-card">
    <img class="imgs" :src="img" alt="img" width="50" height="50">
    <div>
      <div>名称：{{ name }}</div>
      <div>价格：{{ price }}元</div>
    </div>
    <div class="right" v-if="isCart" >
      <DeleteOutlined @click="deleteGoods" />
      <input class="inputs" title="数量" v-model="item.nums" @change="modifyGoods" />
    </div>
    <div class="right" v-else>
      <ShoppingCartOutlined @click="addGoods" />
      <input class="inputs" title="数量" v-model="item.nums" />
    </div>
  </div>
</template>

<style scoped>
.goods-card {
  position: relative;
  display: flex;
  width: 90%;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 10px 5px 5px #f3f3f3;
  margin: auto;
  margin-top: 1rem;
}

.imgs {
  margin-right: 10px;
}

.right {
  position: absolute;
  right: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.inputs {
  width: 3rem;
  margin-top: 10px;
}
</style>
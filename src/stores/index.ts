import { createStore } from "vuex"
import { type GlobalDataProps } from './types'

const store = createStore<GlobalDataProps>({
  /** 
   * Vuex 使用单一状态树——是的，用一个对象就包含了全部的应用层级状态。
   * 使用 Vuex 并不意味着你需要将所有的状态放入 Vuex。虽然将所有的状态放到 Vuex 会使状态变化更显式和易调试，但也会使代码变得冗长和不直观。
   * 如果有些状态严格属于单个组件，最好还是作为组件的局部状态。你应该根据你的应用开发需要进行权衡和确定。
   */
  state: {
    // 测试数据
    list: [
      {
        id: 0,
        img: 'src/assets/rope.png',
        name: '跳绳',
        price: 10,
        nums: 0
      },
      {
        id: 1,
        img: 'src/assets/rope1.png',
        name: '跳绳1',
        price: 100,
        nums: 0
      },
      {
        id: 2,
        img: 'src/assets/watch.png',
        name: '手环',
        price: 200,
        nums: 0
      },
      {
        id: 3,
        img: 'src/assets/watch1.png',
        name: '手环1',
        price: 300,
        nums: 0
      },
    ],
    cartList: [],
  },

  /** 
   * Vuex 允许我们在 store 中定义“getter”（可以认为是 store 的计算属性）
   * Getter 会暴露为 store.getters 对象，你可以以属性的形式访问这些值
   */
  getters: {
    /** 获取商品列表 */
    getList(state) {
      return state.list
    },

    /** 获取购物车列表 */
    getCartList(state) {
      return state.cartList
    },

    /** 获取总价格 */
    getSumPrice(state) {
      let price = 0
      state.cartList.map((item) => price += item.price * item.nums)
      return price
    }
  },

  /**
   * 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。
   * Vuex 中的 mutation 非常类似于事件：每个 mutation 都有一个字符串的事件类型 (type)和一个回调函数 (handler)。
   * 这个回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数
   */
  mutations: {
    /** 添加到购物车 */
    addCart(state, payload) {
      let flag = false
      state.cartList.forEach((item) => {
        if (item.id === payload.item.id) {
          item.nums = Number(item.nums) + Number(payload.item.nums)
          flag = true
        }
      })
      if (!flag) state.cartList.push(payload.item)
    },

    /** 删除购物车 */
    deleteCart(state, payload) {
      state.cartList = state.cartList.filter((item) => item.id !== payload.item.id)
    },

    /** 修改购物车商品数量 */
    modCart(state, payload) {
      state.cartList.forEach((item) => {
        if (item.id === payload.item.id) {
          item.nums = payload.item.nums
        }
      })
    }
  },

  /**
   * Action 类似于 mutation，不同在于：
   * Action 提交的是 mutation，而不是直接变更状态。
   * Action 可以包含任意异步操作。
   */
  actions: {
    // 接口请求数据
  },
})

export default store
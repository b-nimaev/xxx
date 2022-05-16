import { createStore } from 'vuex'

export default createStore({
  state: {
    products: [
      {
        title: "Название блюда",
        chars: ['Толстое', '23 см'],
        price: 125,
        productId: 1
      },
      {
        title: "Название блюда 2",
        chars: ['Тонкое', '25 см'],
        price: 240,
        productId: 2
      }
    ]
  },
  getters: {
    products: (state) => {
      return state.products
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

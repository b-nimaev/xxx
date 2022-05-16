import {
  createStore
} from 'vuex'

export default createStore({
  state: {
    products: [{
      productId: 1,
      price: 125,
      title: "Название блюда",
      chars: ['Толстое', '23 см'],
      thumb: 'product-image.jpg',
      description: `Описание блюда, максимум на пять строчек. Американская классика с
            пикантной пепперони, Моцареллой и фирменным томатным соусом`
    }, {
      productId: 2,
      price: 240,
      title: "Название блюда 2",
      chars: ['Тонкое', '25 см'],
      thumb: ''
    }],
    cart: [{
        title: "Название блюда",
        chars: ['Толстое', '23 см'],
        price: 125,
        productId: 1,
        count: 1,
        thumb: 'product-image.jpg'
      },
      {
        title: "Название блюда 2",
        chars: ['Тонкое', '25 см'],
        price: 240,
        productId: 2,
        count: 2,
        thumb: 'product-image.jpg'
      }
    ]
  },
  getters: {
    cart: (state) => {
      return state.cart
    },
    products: (state) => {
      return state.products
    }
  },
  mutations: {
    spliceCart: (state, id) => {
      console.log(id)
      state.cart.forEach((element, index) => {
        if (element.productId == id) {
          state.cart.splice(index, 1)
        }
      });
    },

    addToCart: (state, id) => {
      let temp
      let condition = state.cart.some(function (e) {
        temp = e
        return e.productId == id
      })

      if (!condition) {
        state.cart.push({
          title: "Пицца",
          chars: ['Тонкое', '19 см'],
          price: 125,
          productId: id,
          count: 1
        })
      } else {
        temp.count++
      }

    }
  },
  actions: {},
  modules: {}
})
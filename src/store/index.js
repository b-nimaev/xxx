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
      custom_fields: [{
        name: 'thickness',
        data: [{
          title: 'Толстое',
          field: 'fat'
        }, {
          title: 'Тонкое',
          field: 'thin'
        }]
      }, {
        name: 'radius',
        data: [{
          title: '23 см',
          field: '23cm',
        }, {
          title: '30 см',
          field: '30cm',
        }, {
          title: '40 см',
          field: '40cm'
        }]
      }],
      description: `Описание блюда, максимум на пять строчек. Американская классика с
            пикантной пепперони, Моцареллой и фирменным томатным соусом`
    }, {
      productId: 2,
      price: 240,
      title: "Название блюда 2",
      chars: ['Тонкое', '25 см'],
      thumb: 'product-image.jpg',
      custom_fields: [{
        name: 'thickness',
        data: [{
          title: 'Толстое',
          field: 'fat'
        }, {
          title: 'Тонкое',
          field: 'thin'
        }]
      }, {
        name: 'radius',
        data: [{
          title: '23 см',
          field: '23cm',
        }, {
          title: '30 см',
          field: '30cm',
        }]
      }],
      description: 'Описание блюда, максимум на пять строчек.'
    }, {
      productId: 3,
      price: 125,
      title: "Название блюда",
      chars: ['Толстое', '23 см'],
      thumb: 'product-image.jpg',
      description: `Описание блюда, максимум на пять строчек. Американская классика с
            пикантной пепперони, Моцареллой и фирменным томатным соусом`
    }, {
      productId: 4,
      price: 240,
      title: "Блюдо без конструктора",
      chars: ['Тонкое', '25 см'],
      thumb: 'product-image.jpg',
      description: 'Американская классика с пикантной пепперони, Моцареллой и фирменным томатным соусом'
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
    ],
    mobile: false
  },
  getters: {
    cart: (state) => {
      return state.cart
    },
    products: (state) => {
      return state.products
    },
    mobile: (state) => {
      return state.mobile
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

    addToCart: (state, product) => {
      let temp
      let condition = state.cart.some(function (e) {
        temp = e
        return e.productId == product.id
      })

      if (!condition) {
        state.cart.push({
          title: product.title,
          custom_fields: product.custom_fields,
          price: product.price,
          productId: product.id,
          count: 1
        })
      } else {
        temp.count++
      }
    },

    mobile: (state, condition) => {
      return state.mobile = condition
    }
  },
  actions: {},
  modules: {}
})
<template>
  <aside id="basket">
    <div class="header">
      <p class="title">
        <span>Корзина</span>
        <span class="counter">({{ products.length }})</span>
      </p>
      <img src="@/assets/img/basket.png" alt="Basket" />
    </div>

    <ul>
      <li v-for="product in products" :key="product">
        <div class="product-content">
          <div class="product-image">
            <img
              v-if="product.thumb"
              :src="require('@/assets/img/' + product.thumb)"
              alt="Product"
            />
            <img
              v-else
              src="data:image/jpeg;base64,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"
              alt="No Image Product"
            />
          </div>
          <div class="product-title">
            <p>{{ product.title }}</p>
            <p class="chars">
              <span v-for="(char, index) in product.chars" :key="char">
                {{ char }}
                {{ index == product.chars.length - 1 ? "" : ", &nbsp;" }}
              </span>
            </p>
          </div>

          <button @click="spliceCart(product.productId)" class="remove">
            <svg
              width="11"
              height="11"
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.41423 1L1.00002 2.41421L4.40957 5.82377L1 9.23334L2.41421 10.6476L5.82379 7.23798L9.23335 10.6475L10.6476 9.23333L7.238 5.82377L10.6475 2.41423L9.23333 1.00001L5.82379 4.40956L2.41423 1Z"
                fill="#E0E0E0"
              />
            </svg>
          </button>
        </div>

        <div class="pfooter">
          <div class="count">
            <DecrementButton />
            <input
              :value="product.count"
              type="number"
              :name="'count-by-' + product.productId"
              :id="'price-product-id-' + product.productId"
            />
            <IncrementButton />
          </div>
          <div class="price">
            <p>{{ product.price * product.count }} ₽</p>
          </div>
        </div>
      </li>
    </ul>

    <div class="footer">
      <p class="title">Сумма заказа</p>
      <p class="price">{{ price }} ₽</p>
    </div>

    <button class="sendform">
      <span>Оформить заказ</span>
    </button>
    <p class="bonus">Будет начислено {{ bonus }} бонусов</p>
  </aside>
</template>

<script>
import IncrementButton from "@/components/buttons/IncrementButton.vue";
import DecrementButton from "@/components/buttons/DecrementButton.vue";
export default {
  components: {
    IncrementButton,
    DecrementButton,
  },
  computed: {
    products: function () {
      return this.$store.getters.cart;
    },

    price: function () {
      let temp = 0;
      this.products.forEach((element) => {
        temp += element.price * element.count;
      });

      return temp;
    },

    bonus: function () {
      return (this.price / 100) * 5;
    },
  },
  methods: {
    spliceCart(data) {
      // console.log(data)
      return this.$store.commit("spliceCart", data);
    },
  },
};
</script>

<style lang="scss" scoped>
// Sidebar

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
  outline: none;
  margin: 0 2px;
  padding: 0;
  width: 30px;
  height: 30px;
  border: 00;
  text-align: center;
  font-size: 16px;
  position: relative;
  top: 2px;
}

.sendform {
  background: #c1272d;
  color: #fff;
  border-radius: 20px;
  width: 100%;
  text-transform: uppercase;
  padding: 10px 40px;
  font-size: 15px;
  font-weight: 500;
  margin-top: 20px;
}

#basket {
  box-shadow: 0px 1px 1px 0px #00000026;
  border-radius: 10px;
  background: #fff;
  width: 100%;
  padding: 20px;
  text-align: left;
  position: relative;
  z-index: 1;
  margin: 0 0 0 auto;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: transparent;
    border-radius: 10px;
    box-shadow: 0px 3px 0px 0px #c1272d inset;
    z-index: -1;
  }
  .footer {
    margin-top: 15px;
    display: flex;
    p {
      &.price {
        margin: auto 0 auto auto;
        font-size: 18px;
        line-height: 22px;
        font-weight: 400;
      }
    }
  }
  .header {
    display: flex;
    img {
      margin: auto 0 auto auto;
    }
  }
  p {
    margin: 0;
    color: #694041;
    &.title {
      font-size: 22px;
      font-weight: 500;
      line-height: 25.79px;
      display: flex;
      .counter {
        position: relative;
        top: 1px;
        margin: auto 5px;
        color: #a7a7a7;
        line-height: 18px;
        font-size: 14px;
        font-weight: 400;
      }
    }

    &.chars {
      font-size: 12px;
      line-height: 14px;
      color: #a7a7a7;
      margin-top: 5px;
    }

    &.bonus {
      color: #a7a7a7;
      font-size: 12px;
      display: block;
      text-align: center;
      margin-top: 8px;
    }
  }
}

ul {
  padding: 0;
  margin: 20px 0 0;
  list-style-type: none;
  li {
    border-bottom: 1px solid #dedede;
    padding-bottom: 15px;
    margin-bottom: 15px;
    .product-content {
      display: flex;
      position: relative;
      .remove {
        background: transparent;
        margin: 0 0 auto 0;
      }
    }
    .pfooter {
      display: flex;
      margin-top: 12px;
      .price {
        margin: auto 0 auto auto;
        p {
          font-size: 15px;
          line-height: 22px;
          font-weight: 400;
        }
      }
    }
  }
}

.product-image {
  width: 66px;
  height: 53px;
  border-radius: 8px;
  overflow: hidden;
  img {
    width: 100%;
  }
}
.product-title {
  flex: 1;
  margin-left: 7px;
  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
  }
}

@media screen and (max-width: 1200px) {
  input[type="number"] {
    font-size: 14px;
  }
  .sendform {
    padding: 10px;
  }
  #basket {
    p {
      &.title {
        font-size: 18px
      }
      &.chars {
        font-size: 13px;
        font-weight: 300;
        span {
          display: block;
        }
      }
    }

    ul {
      margin: 15px 0 0;
    }

    .footer {
      p {
        &.price {
          font-size: 15px;
        }
      }
    }
  }
}

</style>
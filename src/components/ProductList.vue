<template>
  <div class="container dflex">
    <div class="product-list"></div>
    <aside id="basket">
      <!-- basket header  -->
      <div class="header">
        <p class="title">
          <span>Корзина</span> <span class="counter">(3)</span>
        </p>
        <img src="@/assets/img/basket.png" alt="Basket" />
      </div>

      <!-- cart -->
      <ul>
        <li>
          <div class="product-content">
            <div class="product-image">
              <img
                :src="require('@/assets/img/product-image.jpg')"
                alt="Product"
              />
            </div>
            <div class="product-title">
              <p>Название блюда, может быть и длинным, но не слишком</p>
              <p class="chars">Толстое, 23 см</p>
            </div>
          </div>

          <div class="pfooter">
            <div class="count">
              <DecrementButton />
              <input value="1" type="number" name="count" id="count" />
              <IncrementButton />
            </div>
            <div class="price">
              <p>125 ₽</p>
            </div>
          </div>
        </li>
      </ul>
    </aside>
  </div>
</template>

<script>
import IncrementButton from "@/components/buttons/IncrementButton.vue";
import DecrementButton from "@/components/buttons/DecrementButton.vue";
export default {
  components: {
    IncrementButton,
    DecrementButton,
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin: 50px auto;
}

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

#basket {
  box-shadow: 0px 1px 1px 0px #00000026;
  border-radius: 10px;
  background: #fff;
  height: 300px;
  width: 260px;
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
  }
}

ul {
  padding: 0;
  margin: 20px 0 0;
  list-style-type: none;
  li {
    .product-content {
      display: flex;
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
</style>


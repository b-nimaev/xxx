<template>
  <div class="home">
    <ProductCategories v-if="!mobile" />
    <div class="container">
      <h1 class="selected_cat">Салаты</h1>
      <div class="row">
        <div class="col col-lg-9">
          <ProductList />
        </div>
        <div class="col-md-4 col-lg-3" v-if="!mobile">
          <CartComponent />
        </div>
      </div>

      <div class="mobile-menu">
        <div class="container">
          <button class="cart-mobile">
            <img src="@/assets/img/basket.png" alt="basket" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCategories from "@/components/ProductCategories.vue";
import ProductList from "@/components/ProductList.vue";
import CartComponent from "@/components/CartComponent.vue";

export default {
  components: {
    ProductCategories,
    ProductList,
    CartComponent,
  },
  created() {
    if (window.innerWidth <= 992) {
      this.$store.commit("mobile", true);
    }

    window.addEventListener("resize", this.myEventHandler);
  },
  computed: {
    mobile: function () {
      return this.$store.getters.mobile;
    },
  },
  methods: {
    myEventHandler(e) {
      // your code for handling resize...
      if (e.target.innerWidth <= 992) {
        this.$store.commit("mobile", true);
      } else {
        this.$store.commit("mobile", false);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.mobile-menu {
  display: none;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-image: linear-gradient(0, #ffffff, transparent);
  height: 60px;
  z-index: 2;
}
.cart-mobile {
  &:before {
    content: '';
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: transparent;
    box-shadow: -2px -1px 0 0 #e61e28;
    border-radius: 3px;
    position: absolute;
  }
  background: transparent;
  box-shadow: 1px 3px 0px 0px #c1272d;
  padding: 15px;
  display: block;
  position: relative;
  margin: 0 0 0 auto;
  right: 0;
  z-index: 2;
  border-radius: 3px;
  background: #fff;
  top: -20px;
}
.container {
  margin: 50px auto;
  position: relative;
}

.selected_cat {
  text-align: left;
  margin-bottom: 30px;
}

@media screen and (max-width: 992px) {
  .container {
    margin: 0 auto;
  }
  .mobile-menu {
    display: block;
  }
}

</style>


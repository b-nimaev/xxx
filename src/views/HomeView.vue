<template>
  <div class="home">
    <ProductCategories v-if="!mobile" />
    <div class="container">
      <h1 class="selected_cat">Салаты</h1>
      <div class="row">
        <div class="col-md-8">
          <ProductList />
        </div>
        <div class="col-md-4 col-lg-3">
          <CartComponent />
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
    if (window.innerWidth < 992) {
      this.$store.commit("mobile", true);
    }

    window.addEventListener("resize", this.myEventHandler);
  },
  computed: {
    mobile: function () {
      return this.$store.getters.mobile
    }
  },
  methods: {
    myEventHandler(e) {
      // your code for handling resize...
      if (e.target.innerWidth < 992) {
        this.$store.commit("mobile", true);
      } else {
        this.$store.commit("mobile", false);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin: 50px auto;
}

.selected_cat {
  text-align: left;
  margin-bottom: 30px;
}
</style>


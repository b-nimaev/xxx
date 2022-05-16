<template>
  <div class="home">
    <ProductCategories />
    <div class="container">
      <h1 class="selected_cat">Салаты</h1>
      <div class="row">
        <div class="col-md-9">
          <ProductList />
        </div>
        <div class="col-md-3">
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
		CartComponent
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


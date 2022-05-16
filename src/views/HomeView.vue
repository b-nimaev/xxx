<template>
  <div class="home">
    <ProductCategories />
    <ProductList />
  </div>
</template>

<script>
// @ is an alias to /src
import ProductCategories from '@/components/ProductCategories.vue'
import ProductList from '@/components/ProductList.vue'

export default {
  name: 'HomeView',
  data () {
    return {
    }
  },
  components: {
    ProductCategories,
    ProductList
  }
}
</script>

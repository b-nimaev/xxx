<template>
  <div class="categories">
    <div class="container">
      <ul>
        <li v-for="(item, index) in items" :key="item">
          <a href="javascript:void(0)" :id="'product-cat-' + index">
            <img
              :src="require('@/assets/img/cats/cat' + index + '.png')"
              alt=""
            />
            <span>{{ item }}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      items: [
        "Салаты",
        "Горячее",
        "Пицца",
        "Напитки",
        "Гарниры",
        "Закуски",
        "Супы",
        "Десерты",
        "Комбо",
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
li {
  display: inline-block;
  margin: 0 15px;
}
a {
  text-decoration: none;
  color: #42b983;
  span {
    display: block;
    color: #694041;
    margin-top: 20px;
    font-weight: 700;
    font-size: 15px;
    line-height: 22px;
  }
}
</style>

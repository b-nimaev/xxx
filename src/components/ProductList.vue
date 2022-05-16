<template>
  <div class="row">
    <div class="col-md-4">
      <article>
        <div class="header">
          <div class="product-thumb">
            <img src="@/assets/img/product-image.jpg" alt="Product" />
          </div>
          <h4 class="product-title">Название блюда</h4>
          <p class="description">
            Описание блюда, максимум на пять строчек. Американская классика с
            пикантной пепперони, Моцареллой и фирменным томатным соусом
          </p>
        </div>
        <div class="content">
          <div class="input-group">
            <div>
              <label for="fat">Толстое</label>
              <input type="radio" id="fat" name="thickness" value="fat" />
            </div>
            <div>
              <label for="fat2" class="active">Тонкое</label>
              <input type="radio" id="fat2" name="thickness" value="fat2" />
            </div>
          </div>
          <div class="input-group">
            <div>
              <label for="23cm">23cm</label>
              <input type="radio" id="23cm" name="radius" value="23" />
            </div>
            <div>
              <label for="30cm" class="active">30cm</label>
              <input type="radio" id="30cm" name="radius" value="30" />
            </div>
            <div>
              <label for="40cm">40cm</label>
              <input type="radio" id="40cm" name="radius" value="40" />
            </div>
          </div>
          <button class="constructor">
            <img src="@/assets/img/icon-constructor.png" alt="Constructor" />
            <span>Добавить/убрать</span>
          </button>
        </div>
        <div class="footer">
          <button @click="addToCart(3)" class="add-to-cart">В корзину</button>
          <p class="price">125 ₽</p>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
	methods: {
		addToCart(data) {
			this.$store.commit("addToCart", data)
		}
	}
}
</script>

<style lang="scss" scoped>

.constructor {
  background: none;
  border: 1px solid #ebebeb;
  border-radius: 30px;
  padding: 10px 0;
  width: 100%;
  img {
    margin-right: 8px;
  }
  span {
    color: #a7a7a7;
    font-weight: 400;
    font-size: 13px;
  }
}

article {
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 1px 1px 0px #00000026;
  text-align: left;
  color: #694041;
  .product-thumb {
    margin-left: -20px;
    margin-top: -20px;
    margin-bottom: 30px;
    img {
      width: calc(100% + 40px);
      height: 100%;
    }
  }
  .product-title {
    font-size: 22px;
    font-weight: 500;
    margin-bottom: 8px;
    margin-left: 0;
  }
  .description {
    font-size: 12px;
    line-height: 14px;
    font-weight: 400;
    color: #a7a7a7;
  }

  .content {
    .input-group {
      display: flex;
      border: 1px solid #e0e0e0;
      border-radius: 12px;
      margin: 10px auto;
      div {
        display: flex;
        flex: 1;
      }

      label {
        text-align: center;
        width: 100%;
        font-size: 13px;
        font-weight: 400;
        line-height: 16px;
        color: #a7a7a7;
        padding: 4px 0;
        cursor: pointer;
        &.active {
          color: #694041;
          background-color: #e0e0e0;
          border-radius: 12px;
        }
      }

      input {
        display: none;
      }
    }
  }

  .footer {
    display: flex;
    margin-top: 30px;
    button {
      background-color: #c1272d;
      padding: 10px 20px;
      font-weight: 500;
      font-size: 15px;
      line-height: 16px;
      color: #fff;
      border-radius: 30px;
    }
    p {
      margin: auto 0 auto auto;
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;
    }
  }
}

</style>


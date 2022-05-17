<template>
  <div class="row">
    <div class="col-md-6 col-lg-6 col-xl-4" v-for="product in products" :key="product">
      <article>
        <form
          :name="'product-id-' + product.productId"
          @submit.prevent="sendForm(product.productId)"
        >
          <div class="header">
            <div class="product-thumb">
              <img
                v-if="product.thumb"
                :src="require('@/assets/img/' + product.thumb)"
                alt="Product"
              />
              <img
                v-else
                src="data:image/webp;base64,UklGRpwEAABXRUJQVlA4WAoAAAAgAAAAGwEA5QAASUNDUBgCAAAAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANlZQOCBeAgAAUB8AnQEqHAHmAD4pFIlDIaEhEIoENBgChLS3cLtYjdoA2oyzQj0A8XMx9Y8zMfWPMzH1jzMx9Y8zMfWPMzH1jzMx9Y8zMfWPMzH1jzMx9Y8zMfWPMzH1jy/L9WrfYwEiVs3351mt0wtk8RaOSu7sHEKpqAm4YQ4DfWmSRNgFk2Cd6msxhhXOtgC1qpf8n2L/uiECV8fWNajDlb3HCXpA3JAhzVzgLcDXO7Dv+xUqXPLDi2dlV7jEYgX+0FF+x5UBZEVdYF4xSJ9oKseZmPrHmZj6x5mY+seZmPrHmZj6x5mY+seZmPrHmZj6x5mY+seZmPrHmZj6x5mY+seZmPrHmZj6QAD+/+8jAAACHw51FVWapwiCWzoK2w5F5CmcsFCbx7VOy2bmG6oKaFNZ/1DsotDJzMSDVIno8/kCUZWACAmpzmYLNGd7iIjgg/hmuSQ91tx4+0+BAoX/gTX+G2OeqMtfX5Zmo30jETQe6GNIGHHlugF4//S7lONHcmlg83CSthyOGOPPMTxFxnno3d/YlzQXMLOX+qgPJkQrxtLy3f+BvYK8OUFkqHVMRvRHmAeTU7VLnX2fcUMdNY+n7Tu1zXih0AZk2Aux39SulgAMTRoc2mHkkAi6XzGn+KF+Uqa1YHS4XGSc9MEziFoPNqgCL7OX2qaaH4RPHp/KAM81gQqWST9AbaOg3YsFEdaX5DSIkXkbi4e7E7C1abfXjC1gnn/Qb7PMuTZouqi2Fe6DElD7v934lACZL4uUfzKnst9XUtpAfwKUkqeuNp38eVGbh0lYyOGEy88AAAAAAAAA"
                alt="Product has't picture"
              />
            </div>
            <h4 class="product-title">{{ product.title }}</h4>
            <p class="description" v-if="product.description">
              {{ product.description }}
            </p>
          </div>

          <div class="content">
            <div
              class="input-group"
              v-for="field in product.custom_fields"
              :key="field"
            >
              <div v-for="item in field.data" :key="item">
                <label :for="item.field">{{ item.title }}</label>
                <input
                  type="radio"
                  :id="item.field"
                  :name="field.name"
                  :value="item.field"
                />
              </div>
            </div>

            <button v-if="constructor" class="constructor">
              <img src="@/assets/img/icon-constructor.png" alt="Constructor" />
              <span>Добавить/убрать</span>
            </button>
          </div>

          <div class="footer">
            <button type="submit" class="add-to-cart">В корзину</button>
            <p class="price">{{ product.price }} ₽</p>
          </div>
        </form>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.getters.products;
    },
  },
  methods: {
    addToCart(product) {
      this.$store.commit("addToCart", product);
    },
    sendForm(id) {
      let form = document.querySelector('form[name="product-id-' + id + '"]')
      let childs = form.querySelectorAll("input['checked']")
      console.log(childs)
      let product = {
        id: id,
        custom_fields: []
      }
      this.addToCart(product);
    },
  },
};
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

.row {
  margin-top: -10px;
}

article {
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 1px 1px 0px #00000026;
  text-align: left;
  color: #694041;
  margin: 10px 0;
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


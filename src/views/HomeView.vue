<template>
  <div class="home">
    <div class="container">
      <h1>
        Портативная зарядка <br />
        <!-- <span>PRO M32</span> -->
      </h1>
      <p>
        Портативные зарядные устройства X-TOR — это самые совершенные и
        безопасные зарядки на рынке.
      </p>
      <!-- <img src="@/assets/img/product.webp" alt=""> -->
    </div>

    <div class="container">
      <form @submit.prevent="buyHandler">
        <div class="col-md-8">
          <div class="row">
            <div class="col-md-6"></div>
            <div class="col">
              <h4>Вариации</h4>
              <hr />
              <article>
                <h5>Тип разъёма</h5>
                <div class="input-wrapper">
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option value="1" selected>Type 1 (J1772) — Америка</option>
                    <option value="2">Type 2 (Mennekes) — Европа</option>
                    <option value="3">GB/T — Китай</option>
                  </select>
                </div>
              </article>
              <article>
                <h5>Сила тока</h5>
                <div class="input-wrapper">
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option value="1" selected>16А</option>
                    <option value="2">32А</option>
                    <option value="3">40А</option>
                  </select>
                </div>
              </article>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
hr {
  background-color: #a7a7a7;
}
article {
  margin-bottom: 1rem;
}
.home {
  text-align: left;
}
h1 {
  font-weight: 300;
  text-align: left;
  span {
    color: #65ffe8;
    font-weight: 800;
    margin-left: 90px;
    position: relative;
    top: -5px;
    font-size: 62px;
  }
}

p {
  text-align: left;
  font-size: 1.4rem;
}

select, option {
  cursor: pointer;
}
</style>
<template>
  <div class="background-layer">
    <img src="@/assets/img/bg.jpg" alt="background" />
  </div>
  <div class="wrapper">
    <header>
      <div class="container-fluid dflex">
        <div class="logotype">
          <LogotypeComponent />
        </div>
        <div class="contacts">
          <!-- <p>Уникальные зарядки <br> для вашего электромобиля</p> -->
          <a href="tel:891125490888" class="button">
            <img src="@/assets/img/phone.png" alt="Phone ico" />
            <span>8 (9112) 54-90-88</span>
          </a>
        </div>
        <div class="right_side">
          <div class="inner">
            <p>
              <a class="active" href="javascript:void(0)">Rus</a> |
              <a href="javascript:void(0)">Eng</a>
            </p>
            <button class="cart">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path
                  d="M352 128C352 57.42 294.579 0 224 0 153.42 0 96 57.42 96 128H0v304c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V128h-96zM224 48c44.112 0 80 35.888 80 80H144c0-44.112 35.888-80 80-80zm176 384c0 17.645-14.355 32-32 32H80c-17.645 0-32-14.355-32-32V176h48v40c0 13.255 10.745 24 24 24s24-10.745 24-24v-40h160v40c0 13.255 10.745 24 24 24s24-10.745 24-24v-40h48v256z"
                />
              </svg>
            </button>
            <button class="toggler">
              <img src="@/assets/img/gamburger.png" alt="Gamburger" />
            </button>
          </div>

          <!-- <button class="login">
            <span>Войти</span>
            <img src="@/assets/img/union.png" alt="Login union" />
          </button> -->
        </div>
      </div>
    </header>

    <main>
      <router-view />
    </main>

    <section id="pre-footer">
      <div class="container dflex">
        <div class="logotype">
          <router-link to="/">
            <LogotypeComponent />
          </router-link>
          <a href="tel:891125490888" class="button">
            <img src="@/assets/img/phone.png" alt="Phone ico" />
            <span>8 (9112) 54-90-88</span>
          </a>
        </div>

        <div class="address">
          <article>
            <h5 class="text-muted">Наш адрес:</h5>
            <p>
              Деревня Новосаратовка, дом 79, Всеволожский район, Ленинградская
              область.
            </p>
          </article>
          <article>
            <h5>Работаем для вас:</h5>
            <p>Ежедневно с 00:00 до 23:59</p>
          </article>
        </div>

        <div class="for-clients">
          <h5 class="text-muted">Клиентам</h5>
          <ul>
            <li><router-link to="/contacts">Конакты</router-link></li>
            <li><router-link to="/delivery">Доставка</router-link></li>
            <li><router-link to="/promo">Акции</router-link></li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import LogotypeComponent from "@/components/LogotypeComponent.vue";
export default {
  components: {
    LogotypeComponent: LogotypeComponent,
  },
};
</script>

<style lang="scss">
.right_side {
  .inner {
    display: flex;
    p {
      margin: auto 0 auto auto;
      color: #fff;
      font-weight: 600;
      a {
        color: #50615e;
        text-decoration: none;
        transition: 300ms ease-in;
        &.active {
          color: #fff;
        }
      }
    }
  }
  .toggler {
    margin: 0 0 0 10px;
  }
  .cart {
    margin: 0 0 0 10px;
    svg {
      width: 24px;
      height: 24px;
      fill: #fff;
    }
  }
}
.wrapper {
  background: #171a1ae0;
  position: relative;
  z-index: 2;
  height: 100%;
  min-height: calc(100vh - 40px);
  display: flex;
  flex-direction: column;
}
body {
  padding: 20px;
  background-color: #111;
  position: relative;
}
.background-layer {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  height: 100%;
  width: 100%;
  img {
    display: block;
    width: 50%;
    height: auto;
    object-fit: contain;
    margin: auto;
  }
}

#app {
  font-family: "Montserrat", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  font-weight: 300;
  // background: #ffe3e3;
  background: #000;
  min-height: calc(100vh - 40px);
  z-index: 1;
  position: relative;
  height: 100%;
}
#pre-footer {
  padding: 60px 0;
  text-align: left;
  margin: auto 0 0;
  h5 {
    color: #a7a7a7;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    margin-bottom: 10px;
  }
  p {
    font-size: 18px;
    line-height: 24px;
    font-weight: 400;
  }
  article {
    margin-bottom: 20px;
    &:last-child {
      margin: 0;
    }
  }
  .dflex {
    flex-wrap: wrap;
  }
  .for-clients {
    margin-left: 100px;
    ul {
      list-style-type: none;
      padding: 0;
      margin: 0;
      li {
        margin-bottom: 10px;
        a {
          font-size: 18px;
          line-height: 24px;
          font-weight: 400;
          color: #fff;
          text-decoration: none;
        }

        &:last-child {
          margin: 0;
        }
      }
    }
  }
  .logotype {
    display: flex;
    flex-direction: column;
    margin-right: 50px;
    width: fit-content;
    a {
      margin: auto;
    }
    a.button {
      margin-top: 15px;
    }
  }
  .address {
    width: 510px;
  }
}

main {
  padding: 30px 0;
}

footer {
  position: absolute;
  width: 100%;
  bottom: 0;
  padding: 15px;
  display: flex;
  display: none;
  h5 {
    margin: auto;
    color: #7f5f5f;
    font-weight: 200;
  }
}

.dflex {
  display: flex;
}

header {
  padding: 15px 0 20px;
  .dflex {
    justify-content: space-between;
  }
  .right_side {
    width: 260px;
    display: flex;
    flex-direction: column;
    button {
      background-color: transparent;
      &.login {
        margin: 24px 0 0 auto;
        span {
          color: #a7a7a7;
          margin: auto 10px auto 0;
          font-weight: 700;
          position: relative;
          font-size: 1.1rem;
          line-height: 1;
          top: 1px;
        }
      }
    }
  }
  .contacts {
    margin: auto 0;
    p {
      margin: 0;
    }
  }
  .logotype {
    width: 260px;
    margin: auto 0;
  }
}

a.button {
  display: block;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 18px;
  background-color: #00c15b;
  color: #fff;
  width: fit-content;
  img {
    position: relative;
    top: -1px;
    margin-right: 8px;
  }
  span {
    font-size: 15px;
    line-height: 16px;
    font-weight: 500;
  }

  &:hover {
    color: #fff;
  }
}

.headertop {
  margin-top: -4px;
  img {
    width: 100%;
    height: 14px;
  }
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

@media screen and (max-width: 1200px) {
  header {
    .logotype {
      width: auto;
      img {
        width: 100px;
      }
    }
    .right_side {
      width: auto;
    }
  }

  #pre-footer {
    .logotype {
      width: 200px;
      margin-right: 30px;
    }
    .address {
      width: 300px;
    }
    .for-clients {
      margin-left: 30px;
    }
  }
}
@media screen and (max-width: 768px) {
  #pre-footer {
    .logotype {
      width: 100%;
      margin-bottom: 30px;
    }
  }
}
</style>

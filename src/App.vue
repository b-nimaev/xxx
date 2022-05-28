<template>
  <div class="headertop">
    <router-link to="/">
      <img src="@/assets/img/header.jpg" alt="Headertop decoration" />
    </router-link>
  </div>

  <header>
    <div class="container dflex">
      <div class="logotype">
        <router-link to="/">
          <img src="@/assets/img/logotype.png" alt="Logotype xxx"
        /></router-link>
      </div>
      <div class="contacts">
        <p class="muted">Наш адрес:</p>
        <p>ул. Борсоева, 56</p>
        <a href="tel:83012440366" class="button">
          <img src="@/assets/img/phone.png" alt="Phone ico" />
          <span>8 (3012) 44-03-66</span>
        </a>
      </div>
      <div class="right_side">
        <button class="toggler">
          <img src="@/assets/img/gamburger.png" alt="Gamburger" />
        </button>

        <button class="login">
          <span>Войти</span>
          <img src="@/assets/img/union.png" alt="Login union" />
        </button>
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
          <img src="@/assets/img/logotype.png" alt="Logotype" />
        </router-link>
        <a class="tel" href="tel:+73012660366">
          <img src="@/assets/img/phone-red.png" alt="Phone red" />
          <span>+7 (3012) 66‒03‒66</span>
        </a>
      </div>

      <div class="address">
        <article>
          <h5 class="text-muted">Наш адрес:</h5>
          <p>г. Улан-Удэ, Борсоева, 56б</p>
        </article>
        <article>
          <h5>Работаем для вас:</h5>
          <p>Ежедневно с 11:00 до 22:00</p>
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
      <div class="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2466.514053627694!2d107.64903758196195!3d51.81503936091193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5dafdb9936e7b389%3A0x4e154ce95ca590a2!2z0KLRgNC4INCY0LrRgdCw!5e0!3m2!1sru!2sru!4v1652768222548!5m2!1sru!2sru"
          width="100%"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </section>
  <footer>
    <h5>proudly by say-an with ♥</h5>
  </footer>
</template>

<style lang="scss">
#app {
  font-family: "Roboto", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-weight: 300;
  background: #fafafa;
  // background: #ffe3e3;
}
#pre-footer {
  background-color: #fff;
  padding: 60px 0;
  text-align: left;
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
          color: #262626;
          text-decoration: none;
        }

        &:last-child {
          margin: 0;
        }
      }
    }
  }
  .logotype {
    width: 260px;
    a {
      display: block;
      text-decoration: none;
      &.tel {
        margin-top: 15px;
        line-height: 24px;
        font-size: 15px;
        font-weight: 500;
        color: #e61e28;
        img {
          margin-right: 10px;
        }
      }
    }
  }
  .map {
    margin-top: 30px;
    width: 100%;
    iframe {
      border-radius: 8px;
      max-width: 100%;
    }
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
  background: #fff;
  .dflex {
    justify-content: space-between;
  }
  .right_side {
    width: 260px;
    display: flex;
    flex-direction: column;
    button {
      background-color: transparent;
      &.toggler {
        margin: 0 0 0 auto;
      }
      &.login {
        margin: 24px 0 0 auto;
        span {
          color: #a7a7a7;
          margin: auto 10px auto 0;
        }
      }
    }
  }
  .contacts {
    margin: auto 0;
    a.button {
      display: block;
      text-decoration: none;
      margin-top: 23px;
      padding: 10px 20px;
      border-radius: 18px;
      background-color: #00c15b;
      color: #fff;
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
    }
    p {
      font-size: 19px;
      line-height: 19px;
      color: #262626;
      margin: 0;
      &.muted {
        font-size: 11px;
        line-height: 16px;
        color: #a7a7a7;
      }
    }
  }
  .logotype {
    width: 260px;
    margin: auto 0;
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
}
@media screen and (max-width: 576px) {
  header {
    .contacts {
      // display: none;
    }
  }
}
</style>

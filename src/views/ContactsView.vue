<template>
  <h4 class="view-heading">Обратная связь</h4>
  <!-- <p>Оставьте сообщение, и мы обязательно ответим вам в ближайшее время.</p> -->
  <div class="container">
    <div class="row">
      <div class="col-md-4 m-auto">
        <form @submit.prevent>
          <article class="mb-3">
            <label for="name" class="form-label">Ваше имя</label>
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder=""
            />
          </article>
          <article class="mb-3">
            <label for="contact" class="form-label">E-mail</label>
            <input
              type="email"
              class="form-control"
              id="contact"
              placeholder=""
            />
          </article>
          <article class="mb-3">
            <label for="message" class="form-label">Сообщение</label>
            <textarea class="form-control" id="message"></textarea>
          </article>
          <article>
            <input
              type="submit"
              class="btn btn-success"
            />
          </article>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
article {
    text-align: left;
}
textarea {
    display: block;
    width: 100%;
    border-radius: .4rem;
    min-height: 140px;
    max-height: 400px;
}
form {
    margin: 40px 0;
}
input[type="submit"] {
    display: block;
    width: 100%;
    text-align: center;
}

textarea, input {
    outline: none;
}

</style>
<template>
  <div>
    <section class="container">
      <div>
        <logo/>
        <h1 class="display-4 py-3">Flower for empowered females.</h1>
        <h2 class="display-5 py-4">(blossoming this spring)</h2>
        <div class="links">
          <div
            class="clearbit-form"
            data-form-id="c8039df3-4f7c-40d4-a203-4e193d0c5465"
            data-theme="default"
          ></div>
          <a
            href="#"
            class="button--green clearbit-overlay"
            data-form-id="c8039df3-4f7c-40d4-a203-4e193d0c5465"
            data-theme="default"
          >Join the Sisterhood</a>
          <a href="#" target="_blank" class="button--grey">Get Dazy</a>
        </div>
      </div>
      <img src="~/assets/a-daisy.svg" class="fixed-daisy">
    </section>

    <instafeed/>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Instafeed from '~/components/Instafeed.vue'

export default {
  components: {
    Logo,
    Instafeed
  }
}
</script>

<style>
.fixed-daisy {
  position: fixed;
  bottom: 0;
  left: 30px;
  width: 200px;
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

<template>
  <div>
    <section class="container">
      <div>
        <logo/>
        <h1 class="display-4 py-3">Flower for empowered females.</h1>
        <h2 class="display-5 py-4">(blossoming this summer)</h2>
        <script type="text/javascript" src="https://clearbitjs.com/v1/x/forms.js"></script>
        <div class="links">
          <a
            class="button--green clearbit-overlay"
            data-form-id="c8039df3-4f7c-40d4-a203-4e193d0c5465"
            data-theme="none"
          >Sign Up</a>
        </div>
        <social/>
      </div>
    </section>
    <instafeed/>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Instafeed from '~/components/Instafeed.vue'
import SocialButtons from '~/components/SocialButtons.vue'

if (process.browser) {
  require('~/assets/js/segment.js')
}

export default {
  components: {
    Logo,
    Instafeed,
    social: SocialButtons
  },
  mounted() {
    analytics.ready(() => {
      fbq('track', 'ViewContent', { content_name: 'Homepage' })
    })
    analytics.on('form_submission', (event, properties, options) => {
      fbq('track', 'CompleteRegistration')
      ga('send', 'event', {
        eventCategory: 'User',
        eventAction: 'signup',
        eventLabel: 'landing form'
      })
      console.log(JSON.stringify([event, properties, options]))
    })
  }
}
</script>

<style lang="scss">
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

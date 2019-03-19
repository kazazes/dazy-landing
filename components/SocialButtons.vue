<template>
  <div class="links social-links py-3 my-0">
    <a href="//instagram.com/get.dazy" target="_blank">
      <button type="button" class="btn btn-social btn-twitter">
        <font-awesome-icon :icon="['fab', 'instagram']"/>@get.dazy
      </button>
    </a>
    <a href="//facebook.com/getdazy" target="_blank">
      <button type="button" class="btn btn-social btn-facebook">
        <font-awesome-icon :icon="['fab', 'facebook']"/>get.dazy
      </button>
    </a>
    <a href="//www.pinterest.com/getdazy/" target="_blank">
      <button type="button" class="btn btn-social btn-pinterest">
        <font-awesome-icon :icon="['fab', 'pinterest']"/>getdazy
      </button>
    </a>
    <a href="mailto:info@getdazy.com">
      <button type="button" class="btn btn-social btn-email">
        <font-awesome-icon icon="envelope"/>info@getdazy.com
      </button>
    </a>
  </div>
</template>
<script>
export default {
  name: 'social'
}
</script>

<style lang="scss">
.social-links {
  a:hover {
    text-decoration: none;
  }
  .btn-social {
    display: inline-flex !important;
    color: #212529;
  }

  .btn-social:hover {
    color: #fff;
    text-decoration: none !important;
  }

  .btn-social.btn-email:hover {
    color: darken($color: #212529, $amount: 30) !important;
  }
}
</style>





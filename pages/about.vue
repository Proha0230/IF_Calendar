<template>
  <div class="main_about">
    <div class="main_about__block">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda dolor nesciunt odit qui vel! Dolores doloribus molestiae possimus rerum voluptatem?</p>
    </div>
  </div>

</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
@import "assets/scss/partials/mixins";

.main_about {
  @include main_block_in_page();

  &__block {
    width: 95vw;
    max-width: 650px;
    position: absolute;
    top: 150px;
  }
}

</style>
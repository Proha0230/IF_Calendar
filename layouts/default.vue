<template>
  <div class="main_layout">
    <div class="main_layout__button_block">
      <button class="main_layout__button_block--route" @click="goTo(true)" :class="route.params && route.params.name || route.fullPath.includes('/about')  ? '' : 'hidden'"><IconBack></IconBack></button>
      <button class="main_layout__button_block--about" @click="goTo(false)">About</button>
    </div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">

import {useRoute} from "vue-router";

const route = useRoute()

function goTo(value:boolean) {
  if(value) {
    if (route.params && route.params.name && !route.params.day || route.fullPath.includes('/about')) navigateTo('/')
    if (route.params && route.params.name && route.params.day) navigateTo(`/month-${route.params.name}`)
  } else navigateTo('/about')
}

</script>

<style scoped lang="scss">
@import "assets/scss/partials/mixins";

.main_layout {
  @include main_block_in_page(5vh);

  &__button_block {
    width: 100vw;
    max-width: 650px;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;

    &--route {
      margin-left: 15px;
      @include buttonInLayout();

      &.hidden {
        opacity: 0;
        cursor: default;
      }
    }
    &--about {
      margin-right: 15px;
      @include buttonInLayout();
    }
  }
}

</style>
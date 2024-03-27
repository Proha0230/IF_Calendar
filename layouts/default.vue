<template>
  <div class="main_layout">
    <div class="main_layout__button_block">
      <button class="main_layout__button_block--route" @click="goTo(true)" :class="route.params && route.params.name || route.fullPath.includes('/about')  ? '' : 'hidden'"><IconBack></IconBack></button>

      <div class="main_layout__button_block--change_year" v-if="route.params && !route.params.name && !route.fullPath.includes('/about')">
        <IconLeft @click="changeYearDecr" :class="state.year > 2023 ? '' : 'hidden'"></IconLeft>
        <p>{{ state.year }} Year</p>
        <IconRight @click="changeYearIncr" :class="state.year < 2025 ? '' : 'hidden'"></IconRight>
      </div>

      <button class="main_layout__button_block--about" @click="goTo(false)">About</button>
    </div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">

import {useRoute} from "vue-router";
import {useConfigCalendar} from "~/composables/states";

const route = useRoute();
const state = useConfigCalendar();
const {$valueYear} = useNuxtApp()

function changeYearDecr() {
  if(state.value.year > 2023) state.value.year = state.value.year - 1
  $valueYear()
}

function changeYearIncr() {
  if(state.value.year < 2025) state.value.year = state.value.year + 1
  $valueYear()
}

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

    &--change_year {
      display: flex;
      width: 190px;
      justify-content: space-around;
      align-items: center;

      & .hidden {
        opacity: 0;
        cursor: default;
      }
    }
  }
}

</style>
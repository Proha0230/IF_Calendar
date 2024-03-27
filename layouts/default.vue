<template>
  <div class="main_layout">
    <div class="main_layout__button_block">
      <button class="main_layout__button_block--route" @click="goTo(true)" :class="rules('buttonBack')"><LazyIconBack></LazyIconBack></button>

      <div class="main_layout__button_block--change_year" v-if="rules('changeYear')">
        <LazyIconLeft @click="changeYearDecr" :class="rules('changeYearDecr')"></LazyIconLeft>
        <p>{{ state.year }} Year</p>
        <LazyIconRight @click="changeYearIncr" :class="rules('changeYearIncr')"></LazyIconRight>
      </div>

      <div class="main_layout__button_block--change_year" v-if="rules('changeMonth')">
        <LazyIconLeft @click="goToMonth(state.prevMonth)" :class="rules('hiddenPrevMonth')"></LazyIconLeft>
        <p>{{ route.params.name }}</p>
        <LazyIconRight @click="goToMonth(state.nextMonth)" :class="rules('hiddenNextMonth')"></LazyIconRight>
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

function rules(value:string) {
  if(value === 'changeYear') return route.params && !route.params.name && !route.fullPath.includes('/about')
  if(value === 'changeYearDecr') return state.value.year > 2023 ? '' : 'hidden'
  if(value === 'changeYearIncr') return state.value.year < 2025 ? '' : 'hidden'
  if(value === 'changeMonth') return route.params && route.params.name && !route.params.day && !route.fullPath.includes('/about')
  if(value === 'hiddenNextMonth') return state.value.nextMonth === '' || route.params.name === state.value.nextMonth ? 'hidden' : ''
  if(value === 'hiddenPrevMonth') return state.value.prevMonth === '' || route.params.name === state.value.prevMonth ? 'hidden' : ''
  if(value === 'buttonBack') return route.params && route.params.name || route.fullPath.includes('/about')  ? '' : 'hidden'
}

function goToMonth(value:string) {
  if(value && route.params.name !== value) navigateTo(`/month-${value}`)
}
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
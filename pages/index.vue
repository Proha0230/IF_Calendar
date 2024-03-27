<template>
  <div class="year_main_block">
    <div class="year_main_block__name_app">
      <p>Calendar {{state.year}} Year</p>
    </div>
    <div class="year_main_block__months_block">
      <div v-for="item in state.monthsValue" :key="item" class="year_main_block__months_block--content" @click="goInMonth(item.name)">
      <Month :monthsValue="item"></Month>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useConfigCalendar} from "~/composables/states";
import {onBeforeMount} from "vue";


const {$valueYear} = useNuxtApp()
const state = useConfigCalendar()

function goInMonth(month: string){
  navigateTo(`/month-${month}`)
}

onBeforeMount(()=> {
  $valueYear()
})


</script>

<style scoped lang="scss">
@import "assets/scss/partials/mixins";

.year_main_block {
  @include main_block_in_page();

  &__name_app {
    position: absolute;
    top: 50px;

    & p {
      font-size: 30px;
      margin: 0 0 15px 0;
    }
  }

  &__months_block {
    max-width: 650px;
    width: 95vw;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(100px, auto);
    gap: 10px;
    position: absolute;
    top: 150px;


    &--content {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      border: solid 2px blanchedalmond;
      border-radius: 20px;
      background-color: cornsilk;
      cursor: pointer;
    }
  }
}
</style>
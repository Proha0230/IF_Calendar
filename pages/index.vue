<template>
  <div class="year_main_block">
    <div class="year_main_block__name_app">
      <p>Calendar 2024 Year</p>
    </div>
    <div class="year_main_block__months_block">
      <div v-for="item in monthsValue" :key="item" class="year_main_block__months_block--content" @click="goInMonth(item.name)">
      <Month :monthsValue="item"></Month>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import settingValue from '~/settingValue.json'
import {useConfigCalendar} from "~/composables/states";
import {type settingValueType, type monthsValueType} from '~/composables/types'
import type {Ref} from "vue";

const state = useConfigCalendar()
const configJson: settingValueType = settingValue
const monthsValue: Ref<monthsValueType | null> = ref(null)
state.value.monthsValue = configJson.config.monthsValue
state.value.dayWeak = configJson.config.dayWeak
monthsValue.value = state.value.monthsValue

function goInMonth(month: string){
  navigateTo(`/month-${month}`)
}


//  Monday
//  Tuesday
//  Wednesday
//  Thursday
//  Friday
//  Saturday
//  Sunday

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
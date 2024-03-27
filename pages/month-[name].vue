<template>
  <div class="month_day_main">
    <div class="month_day_main__name_month">
      <p>{{route.params.name}}</p>
    </div>
    <div class="month_day_main__block">
      <div v-for="item in dayWeak" :key="item" class="month_day_main__block--day_name">
        <div class="day_name__value">
          <p>{{item.name.substring(0, 3)}}</p>
        </div>
      </div>
      <div class="month_day_main__block--day"
           :class="item.includes('true') ? 'day__true' : 'day__false'"
           v-for="(item, index) in dayInMonthArray" :key="item"
           @click="goToDay(index - (+startDayInWeak.addDay - 1))"
      >
        <div class="day__value">
          <p>{{index - (+startDayInWeak.addDay - 1)}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useRoute} from "vue-router";
import {useConfigCalendar} from "~/composables/states";
import {type monthValueType, type dayWeakType, type dayStartInMonth} from '~/composables/types'
import type {Ref} from "vue";

const state = useConfigCalendar()
const route = useRoute()

const allMonthsValue: Ref<Array<monthValueType>> = ref(Object.values(toRaw(state.value.monthsValue)))
const monthValue: Ref<monthValueType> = ref(allMonthsValue.value.filter(item => item.name === route.params.name)[0])
const dayWeak: Ref<Array<dayWeakType>> = ref(Object.values(toRaw(state.value.dayWeak)))

// здесь мы создаем взависимости от кол-ва дней массив с массивами - в которых содержится "true" строка - это кол-во
// дней в месяце
const dayInMonthArray: Array<Array<"false" | "true">> = Array.from({length: +monthValue.value.day}, ()=> ["true"])

// сколько дней мы добавим к месяцу взависимости от того с какого дня недели начинается месяц
// чтобы дни недели показывались правильно
const startDayInWeak: dayStartInMonth =  dayWeak.value.filter(item => item.name === monthValue.value.firstDay)[0]

// а здесь мы создаем массив с массивами в которых содержится "false" строка - это пустые места на нашем календаре созданные
// для того чтобы дни недели отображались корректно а не все месяца начинались с понедельника
const additionalDaysArray:Array<Array<"false">> = Array.from({length: +startDayInWeak.addDay}, ()=> ["false"])

// здесь мы совмещаем массив дней с пустыми массивами для правильного отображения порядка дней месяца
additionalDaysArray.forEach(item => {
  dayInMonthArray.unshift(item)
})

function goToDay(day:number) {
  navigateTo(`/month-${route.params.name}-${day}`)
}


</script>

<style scoped lang="scss">
@import "assets/scss/partials/mixins";

.month_day_main {
  @include main_block_in_page();

  &__name_month {
    position: absolute;
    top: 50px;

    & p {
      font-size: 30px;
    }
  }

  &__block {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-auto-rows: minmax(60px, auto);
    position: absolute;
    top: 150px;
    gap: 2px;
    width: 95vw;
    max-width: 650px;

    &--day_name {
      display: flex;
      align-items: center;
      justify-content: center;

      & .day_name__value {

      }
    }

    &--day {
      display: flex;
      cursor: pointer;
      justify-content: center;
      align-items: center;
      border: solid 2px gray;
      border-radius: 40px;
      background-color: cornsilk;

      & .day__value {

      }

      &.day__false {
        background-color: transparent;
        border: transparent;

        & p {
          color: transparent;
        }
      }
    }
  }
}

</style>
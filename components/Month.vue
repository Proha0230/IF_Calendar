<template>
  <div class="month_main_block">
    <div class="month_main_block__content_block">
      <p>{{monthsValue.name}}</p>
    </div>
  </div>

</template>

<script setup lang="ts">
import {type monthValueType} from '~/composables/types'
const props = defineProps({
  monthsValue: {
    type: Object,
    default: {}
  }
})
const monthsValue:monthValueType = props.monthsValue as monthValueType

</script>

<style scoped lang="scss">

.month_main_block {


  &__content_block {

    & p {
      font-size: 20px;
    }
  }
}

</style>
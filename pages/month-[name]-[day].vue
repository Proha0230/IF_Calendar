<template>
  <div class="month_day_main">
      <div class="month_day_main__hours_tasks_block">
        <div class="month_day_main__hours_tasks_block--tasks_item" v-for="(item, index) in timeArrayTasks" :key="item">
          <p>{{item.time}}</p>
          <component :is="input && item.time === neededInput ? closeNotes : newNotes" @click="input ? notesOpen(item.time,false) : notesOpen(item.time,true)"></component>
          <input type="text" v-if="input && item.time === neededInput"/>
        </div>
      </div>
  </div>

</template>

<script setup lang="ts">
import type {Ref} from "vue";

const newNotes = resolveComponent('IconNotes');
const closeNotes = resolveComponent('IconCloseNotes')
const input: Ref<boolean> = ref(false)
const neededInput: Ref<null | string> = ref(null)
const emptyArrayTasks:Array<Array<string | Object>> = Object.values(Array.from({length: 24}, ()=> [""]))
const timeArrayTasks:Array<{ time:string, note:string }> = []

  emptyArrayTasks.forEach((item,index) => {
    const obj = { time: '', note: '' }
    if(index < 10) {
        obj.time = `0${index}:00`
    } else {
        obj.time = `${index}:00`
    }
  timeArrayTasks.push(obj)
})

function notesOpen(itemTime: string,open:boolean) {
  neededInput.value = itemTime
  input.value = open
}

</script>

<style scoped lang="scss">

.month_day_main {
  width: 100vw;
  height: 95vh;
  display: flex;
  justify-content: center;

  &__hours_tasks_block {
    position: absolute;
    top: 150px;
    width: 95vw;
    max-width: 650px;
    height: 70vh;
    padding: 5px 5px 10px 5px;
    border: solid 2px blanchedalmond;
    background-color: cornsilk;
    overflow: scroll;
    display: flex;
    flex-flow: column;
    align-items: center;

    &--tasks_item {
      padding: 5px;
      width: 95%;
      border-top: solid 2px burlywood;
      border-bottom: solid 2px burlywood;
      margin: 5px 0;
      display: flex;
      align-items: center;


      & input {
        width: 100%;
      }
    }
  }
}

</style>
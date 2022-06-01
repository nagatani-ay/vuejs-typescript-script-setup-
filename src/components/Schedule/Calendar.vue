<script setup lang="ts">
import { Date, Calendar } from '../../types';
const props = defineProps<{ calendarArray: Calendar }>();
const emit = defineEmits<{}>();
</script>

<template>
  calendar
  <div class="calendar__table">
    <div v-for="calendar in calendarArray">
      {{ calendar.date.day }}
    </div>
  </div>

  <!-- <div class="calendar__body">
    <div
      class="calendar__table"
      :class="dayitem.dayofweek"
      v-for="dayitem in dayList"
      :key="dayitem.date"
    >
      <div class="calendar__item__header" :class="dayitem.dayofweek">
        <p v-if="viewStyle == 'eco'">{{ dayitem.dayofweek.slice(0, 3) }}</p>
        <p
          class="calendar__day"
          :class="dayitem.dayofweek"
          :class="dayitem.date.month == selectMonth ? '' : 'outer__month'"
        >
          {{ dayitem.date.day }}
        </p>
        <add-menu
          @create:item="$emit('create:item', $event)"
          :source="'schedule'"
          :selectDate="dayitem.date"
        ></add-menu>
      </div>
      <div
        class="calendar__item__body"
        :class="dayitem.dayofweek"
        v-if="todoDeadlineList[Object.values(dayitem.date).join('-')]"
      >
        <ul class="calendar__droparea">
          <transition-group appear name="list">
            <todo-item
              class="calendar__todo"
              v-for="item in todoDeadlineList[
                Object.values(dayitem.date).join('-')
              ]"
              :key="item.code"
              :todo="item"
              :source="'schedule'"
              @delete:item="$emit('delete:item', item.code)"
              @update:item="$emit('update:item', $event)"
              @update:status="$emit('update:status', item.code)"
            ></todo-item>
          </transition-group>
        </ul>
      </div>
    </div>
  </div> -->
</template>

<style>
.calendar__table {
  display: grid;
  align-items: start;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-auto-rows: minmax(150px, auto);
}
</style>

<script setup lang="ts">
import { Calendar, CalendarItem, BaseDate, Todo } from '../../types';
import { useSchedule } from '../../Function/useSchedule';
import { useTodos } from '../../Function/useTodos';
import ScheduleItem from './ScheduleItem.vue';
import { toStringDeadline } from '../../Function/utils';

const props = defineProps<{}>();

const { calendarItems } = useTodos();
const { calendarArray } = useSchedule();
const dayOfWeeksJP = ['日', '月', '火', '水', '木', '金', '土'];

function setClassName(data: string | number) {
  if (typeof data == 'string') {
    const index = dayOfWeeksJP.findIndex((e) => e == data);
    return `dayofweek--${index}`;
  } else {
    return `dayofweek--${data}`;
  }
}
</script>

<template>
  <div class="calendar__header">
    <div
      class="calendar__dayofweek"
      v-for="dayOfWeek in dayOfWeeksJP"
      :key="dayOfWeek"
      :class="setClassName(dayOfWeek)"
    >
      {{ dayOfWeek }}
    </div>
  </div>
  <!-- カレンダー本体 -->
  <div class="calendar__body">
    <div class="calendar__table">
      <div
        class="
          calendar__item
          border-solid border border-green-500 border-separate
          relative
        "
        v-for="calendar in calendarArray"
        :key="calendar"
        :class="setClassName(calendar.dayofweek)"
      >
        <p class="calendar__day">{{ calendar.date.day }}</p>
        <!-- Todo -->
        <div class="calendar__todos">
          <schedule-item
            v-for="calanderTodo in calendarItems[
              toStringDeadline(calendar.date)
            ]"
            :key="calanderTodo.code"
            :calanderTodo="calanderTodo"
          ></schedule-item>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.calendar__header,
.calendar__table {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
}

.calendar__header {
  grid-auto-rows: minmax(50px, auto);
}

.calendar__table {
  grid-auto-rows: 100px;
  column-gap: 1px;
  row-gap: 1px;
}

.calendar__item {
  width: 100%;
  height: 100%;
}

.dayofweek--0 {
  color: red;
}
.dayofweek--6 {
  color: blue;
}

.calendar__day {
  width: 100%;
  height: 20%;
}
.calendar__todos {
  width: 100%;
  height: 80%;
  overflow-y: scroll;
}
</style>

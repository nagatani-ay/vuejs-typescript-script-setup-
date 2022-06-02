<script setup lang="ts">
import { Calendar, BaseDate } from '../../types';
import { useSchedule } from '../../Function/useSchedule';
import ScheduleItem from './ScheduleItem.vue';
import { useTodos } from '../../Function/useTodos';
import { useCalendar } from '../../Function/useCalendar';

const props = defineProps<{ calendarArray: Calendar }>();
const { todos } = useTodos();
const {calendarItems}=useCalendar()
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
        "
        v-for="calendar in calendarArray"
        :class="setClassName(calendar.dayofweek)"
      >
        {{ calendar.date.day }}
        <schedule-item v-for="item in calendarItems[calendar.date]"></schedule-item>
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
  grid-auto-rows: minmax(100px, auto);
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
</style>

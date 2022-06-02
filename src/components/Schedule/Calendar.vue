<script setup lang="ts">
import { Date, Calendar } from '../../types';
import {useSchedule} from "../../Function/useSchedule"

const { currentYear, currentMonth, calendarArray } = useSchedule();

const dayOfWeeksJP = ['日', '月', '火', '水', '木', '金', '土'];
</script>

<template>
  <div class="calendar__header">
    <div class="calendar__dayofweek" v-for="dayOfWeek in dayOfWeeksJP">
      {{ dayOfWeek }}
    </div>
  </div>
  <div class="calendar__body">
    <div class="calendar__table">
      <div
        class="
          calendar__item
          border-solid border border-green-500 border-separate
        "
        v-for="calendar in calendarArray"
      >
        {{ calendar.date.day }}
      </div>
    </div>
  </div>
</template>

<style>
.calendar__header {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;

  grid-auto-rows: minmax(50px, auto);
}

.calendar__table {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-auto-rows: minmax(100px, auto);
  column-gap: 1px;
  row-gap: 1px;
}

.calendar__item {
  width: 100%;
  height: 100%;
}
</style>

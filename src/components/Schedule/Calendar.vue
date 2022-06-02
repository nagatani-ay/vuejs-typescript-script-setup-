<script setup lang="ts">
import { Date, Calendar } from '../../types';
const props = defineProps<{ calendarArray: Calendar }>();
const emit = defineEmits<{}>();
const dayOfWeeksJP = ['日', '月', '火', '水', '木', '金', '土'];
</script>

<template>
  <div class="calendar__header">
    <div class="calendar__dayofweek" v-for="dayofweek in dayOfWeeksJP">
      {{ dayofweek }}
    </div>
  </div>

  <div class="calendar__table">
    <div v-for="calendar in calendarArray">
      {{ calendar.date.day }}
    </div>
  </div>
</template>

<style>
.calendar__header {
  display: grid;
  align-items: start;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-auto-rows: minmax(50px, auto);
}
.calendar__table {
  display: grid;
  align-items: start;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-auto-rows: minmax(150px, auto);
}
</style>

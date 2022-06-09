<script setup lang="ts">
import CustomButton from '../controls/Button.vue';
import { useSchedule } from '../../Function/useSchedule';

const { getYear, getMonth, prevCalendar, nextCalendar } = useSchedule();
</script>

<template>
  <p class="currentYear">{{ getYear() }}</p>
  <div class="schedule__controls">
    <custom-button @click="prevCalendar()">last</custom-button>
    <p class="currentMonth">{{ getMonth() }}月</p>
    <custom-button @click="nextCalendar()">next</custom-button>
  </div>
</template>

<style scoped>
.schedule__controls,
.currentYear {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.currentMonth,
.currentYear {
  font-size: 1.8em;
}
</style>

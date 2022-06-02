<script setup lang="ts">
import ScheduleMenu from '../components/Schedule/ScheduleMenu.vue';
import TodoCalendar from '../components/Schedule/Calendar.vue';
import { useSchedule } from '..//Function/useSchedule';
const { calendarArray, currentYear, currentMonth, prevCalendar, nextCalendar } =
  useSchedule();
</script>

<template>
  <schedule-menu
    :calendarArray="calendarArray"
    :currentYear="currentYear"
    :currentMonth="currentMonth"
    @prev="prevCalendar()"
    @next="nextCalendar()"
  ></schedule-menu>
  <todo-calendar :calendarArray="calendarArray"></todo-calendar>
</template>

<style></style>

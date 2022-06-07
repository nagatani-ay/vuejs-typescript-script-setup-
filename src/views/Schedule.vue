<script setup lang="ts">
import ScheduleMenu from '../components/Schedule/ScheduleMenu.vue';
import TodoCalendar from '../components/Schedule/Calendar.vue';
import { useSchedule } from '../Function/useSchedule';
import { useTodos } from '../Function/useTodos';
import { ref, onMounted, watch, computed } from 'vue';

const { todos, edit, calendarItems } = useTodos();
const { currentYear, currentMonth, prevCalendar, nextCalendar, calendarArray } =
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
  <!-- 本体 -->
  <todo-calendar
    :calendarArray="calendarArray"
    :calendarItems="calendarItems"
    :todos="todos"
  ></todo-calendar>
</template>

<style></style>

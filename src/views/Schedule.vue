<script setup lang="ts">
import ScheduleMenu from '../components/Schedule/ScheduleMenu.vue';
import TodoCalendar from '../components/Schedule/Calendar.vue';
import { useSchedule } from '../Function/useSchedule';
import { useTodos } from '../Function/useTodos';
const { calendarArray, currentYear, currentMonth, prevCalendar, nextCalendar } =
  useSchedule();
const {todos, edit } = useTodos();
function onEdit(data: Todo) {
  edit(data);
}
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
  :todos="todos"
  @edit="onEdit"
  ></todo-calendar>
</template>

<style></style>

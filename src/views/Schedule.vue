<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import ScheduleMenu from '../components/Schedule/ScheduleMenu.vue';
import TodoCalendar from '../components/Schedule/Calendar.vue';
import { Todo } from '../types';

const props = defineProps<{ todos: Todo[] }>();
const emit = defineEmits<{}>();

const currentYear = ref(new Date().getFullYear());
const currentMonth = ref(new Date().getMonth() + 1);

const calendarArray = computed(() => {
  let calendarArray = [];
  const firstDayWeek = new Date().getDay();
  const lastDayWeek = new Date(
    currentYear.value,
    currentMonth.value,
    0
  ).getDate();
  const lastMonthDay = new Date(currentYear.value, currentMonth.value - 1, 0);

  for (let i = 0; i < firstDayWeek; i++) {
    calendarArray.push({
      date: {
        year: lastMonthDay.getFullYear(),
        month: lastMonthDay.getMonth() + 1,
        day: lastMonthDay.getDate() - firstDayWeek + i + 1,
      },
      dayofweek: i,
    });
  }

  console.log(lastMonthDay);
  return calendarArray;
});
</script>

<template>
  <schedule-menu
    :currentMonth="currentMonth"
    :currentYear="currentYear"
  ></schedule-menu>
  <todo-calendar></todo-calendar>
  {{ calendarArray }}
</template>

<style></style>

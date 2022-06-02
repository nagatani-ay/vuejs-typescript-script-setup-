<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import ScheduleMenu from '../components/Schedule/ScheduleMenu.vue';
import TodoCalendar from '../components/Schedule/Calendar.vue';
import { Todo, Calendar } from '../types';

const props = defineProps<{ todos: Todo[] }>();
const emit = defineEmits<{}>();

const currentYear = ref(new Date().getFullYear());
const currentMonth = ref(new Date().getMonth() + 1);

const calendarArray = computed(() => {
  const calendarArray = <Calendar>[];
  const firstDayWeek = new Date().getDay();
  const lastDayWeek = new Date(
    currentYear.value,
    currentMonth.value,
    0
  ).getDate();
  const lastMonthDay = new Date(currentYear.value, currentMonth.value - 1, 0);
  const nextMonthDay = new Date(currentYear.value, currentMonth.value + 1);

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
  for (let i = 0; i < lastDayWeek; i++) {
    calendarArray.push({
      date: {
        year: currentYear,
        month: currentMonth,
        day: i + 1,
      },
      dayofweek: (i + firstDayWeek) % 7,
    });
  }

  let count = calendarArray[calendarArray.length - 1].dayofweek;
  let loop = 0;
  while (count != 6) {
    calendarArray.push({
      date: {
        year: nextMonthDay.getFullYear(),
        month: nextMonthDay.getMonth(),
        day: loop + 1,
      },
      dayofweek: count,
    });

    count++;
    loop++;
    if (count > 7) {
      break;
    }
  }
  return calendarArray;
});
</script>

<template>
  <schedule-menu
    :currentMonth="currentMonth"
    :currentYear="currentYear"
  ></schedule-menu>
  <todo-calendar :calendarArray="calendarArray"></todo-calendar>
</template>

<style></style>

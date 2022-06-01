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
  const firstDayWeek = new Date(currentYear.value, currentMonth.value, 1);
  const lastDayWeek = new Date(currentYear.value, currentMonth.value, 0);
  const lastMonthDay = new Date(currentYear.value,currentMonth.value - 1,0);

  for (let i = 0; i < firstDayWeek.getDay(); i++) {
    calendarArray.push({
      date: {
              year: lastMonthDay.getFullYear()
              month: lastMonthDay.getMonth() + 1,
              day: lastMonthDay.getDate() - i,
            },
    dayofweek: lastMonthDay.getDay()
    })
};
  console.log(lastMonthDay);
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
